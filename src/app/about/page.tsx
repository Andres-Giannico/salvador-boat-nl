export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">About Salvador Ibiza</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Salvador Ibiza started with a passion for the sea and a love for the unique beauty of Ibiza. Our boat, the 'Salvador', is a classic vessel with a rich history, carefully restored to offer comfort and style while preserving its authentic charm.
            We believe in creating memorable experiences, combining the stunning scenery of Ibiza's coastline with exceptional service and a fun, relaxed atmosphere.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">The Boat: 'Salvador'</h2>
          <p className="text-gray-700 leading-relaxed">
            The 'Salvador' is more than just a boat; it's a piece of history. Originally built [... add details about the boat type/year if known ...], it has been lovingly maintained and updated with modern amenities for your comfort and safety.
            It features ample deck space for sunbathing, a shaded area, comfortable seating, a sound system, onboard restroom facilities, and easy water access for swimming and water sports.
          </p>
          {/* Consider adding a picture of the boat */}
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">The Crew</h2>
          <p className="text-gray-700 leading-relaxed">
            Our experienced and friendly crew is dedicated to ensuring you have the best possible time on board. Led by Captain [... Captain's Name Placeholder ...], our team knows the waters around Ibiza intimately and will take you to the most beautiful hidden coves and best spots for sunset views.
            Safety is our top priority, and our crew is fully certified and trained.
          </p>
        </section>
      </div>
    </div>
  );
}
