import React from "react";

export default function What() {
  return (
    <section id="what" className="bg-stone-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Question/Hook */}
          <div>
            <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-8 leading-tight">
              What is Core Energetics?
            </h2>
            <img
              src="/emerging_plant.jpg"
              alt="Yellow flowers emerging through concrete cracks"
              className="w-full h-auto"
            />
          </div>

          {/* Right Column - Explanation */}
          <div className="space-y-6 text-stone-700 leading-relaxed">
            <h3 className="text-2xl font-semibold text-stone-900 leading-snug">
              A body-centered psychotherapy that recognizes trauma lives in the
              body, not just the mind.
            </h3>
            <p>
              Core Energetics integrates verbal therapy with breathwork,
              movement, and physical expression to help you access and release
              deeply held emotional patterns and trauma.
            </p>
            <p>
              Founded by Dr. John Pierrakos in the 1970s, this therapeutic
              approach understands that our bodies hold the story of our
              lives—protective armoring, blocked energy, and unprocessed
              emotions that shape how we move through the world.
            </p>
            <p>
              Through this work, you can reconnect with your authentic self,
              release what no longer serves you, and discover a deeper capacity
              for presence, vitality, and meaningful connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
