/**
 * Notify Bing and other IndexNow engines about sitemap URLs after deploy.
 * @see https://www.indexnow.org/documentation
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY || "a74d0309a4a2c7405f000afdc69ae9bb";
const INDEXNOW_ENDPOINT =
  process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";
const BATCH_SIZE = 10_000;

function stripTrailingSlash(url) {
  return url.replace(/\/+$/, "");
}

function getSiteUrl() {
  return stripTrailingSlash(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.SITE_URL ||
      "https://www.salvadoribiza.com"
  );
}

function shouldRun() {
  if (process.env.INDEXNOW_DISABLED === "1") {
    return false;
  }
  if (process.env.INDEXNOW_FORCE === "1") {
    return true;
  }
  return process.env.VERCEL_ENV === "production";
}

function readSitemapUrls(siteUrl) {
  const sitemapPath = path.join(ROOT, "public", "sitemap-0.xml");
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`Sitemap not found: ${sitemapPath}. Run next-sitemap first.`);
  }

  const xml = fs.readFileSync(sitemapPath, "utf8");
  const host = new URL(siteUrl).host;
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  return [...new Set(locs.filter((url) => {
    try {
      return new URL(url).host === host;
    } catch {
      return false;
    }
  }))];
}

async function submitBatch(host, urlList) {
  const keyLocation = `${getSiteUrl()}/${INDEXNOW_KEY}.txt`;
  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList,
  };

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return { status: response.status, statusText: response.statusText };
}

async function main() {
  if (!shouldRun()) {
    console.log(
      "[indexnow] Skipped (set INDEXNOW_FORCE=1 to run locally, or deploy to Vercel production)."
    );
    return;
  }

  const siteUrl = getSiteUrl();
  const host = new URL(siteUrl).host;
  const urls = readSitemapUrls(siteUrl);

  if (urls.length === 0) {
    console.warn(`[indexnow] No URLs found for host ${host} in sitemap-0.xml`);
    return;
  }

  console.log(`[indexnow] Submitting ${urls.length} URL(s) for ${host}…`);

  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    const { status, statusText } = await submitBatch(host, batch);

    if (status === 200 || status === 202) {
      console.log(`[indexnow] OK ${status} ${statusText} (${batch.length} URLs)`);
    } else {
      console.error(`[indexnow] Failed ${status} ${statusText}`);
      process.exitCode = 1;
    }
  }
}

main().catch((err) => {
  console.error("[indexnow] Error:", err.message);
  process.exitCode = 1;
});
