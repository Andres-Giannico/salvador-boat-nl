import Link from 'next/link';

// Placeholder FAQ data - replace with real questions and answers
const faqData = [
  {
    question: "What is included in the all-inclusive boat trip?",
    answer: "Our all-inclusive trips include drinks (beer, wine, soft drinks, water), snacks, use of paddleboards and snorkeling equipment, music, and insurance.",
  },
  {
    question: "What are the departure times?",
    answer: "We offer two trips daily: a midday trip from 12:00 PM to 4:00 PM and a sunset trip from 5:00 PM to 9:00 PM (times may vary slightly depending on the season).",
  },
  {
    question: "Where does the boat depart from?",
    answer: "The boat departs from the main harbor in San Antonio, Ibiza. Exact meeting point details will be provided upon booking.",
  },
  {
    question: "Are children allowed on the boat?",
    answer: "Yes, children are welcome! We offer reduced prices for children. Please contact us for details.",
  },
  {
    question: "What should I bring?",
    answer: "We recommend bringing sunscreen, a hat, sunglasses, a towel, and your camera!",
  },
  // Add more FAQs
];

export default function FaqPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">{item.question}</h2>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
      <p className="mt-8">
        Have more questions? <Link href="/contact"><span className="text-blue-600 hover:underline">Contact us</span></Link>!
      </p>
    </div>
  );
}
