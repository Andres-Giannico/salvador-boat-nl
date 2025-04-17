import { Metadata } from "next";
import FAQClientPage from "./page.client";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Salvador Ibiza",
  description:
    "Find answers to common questions about our boat trips, services, and more. Plan your perfect Mediterranean adventure with Salvador Ibiza.",
};

export default function FAQPage() {
  return <FAQClientPage />;
}
