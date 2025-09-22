export default function FAQPage() {
  const faqs = [
    { q: "How do I book a session?", a: "You can book directly on our Studio Booking page." },
    { q: "Do you require a deposit?", a: "Yes, a small deposit is required to confirm your session." },
    { q: "Can I cancel or reschedule?", a: "Yes, cancellations or reschedules must be made at least 48 hours in advance." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((item, i) => (
          <div key={i}>
            <h3 className="font-semibold text-lg">{item.q}</h3>
            <p className="text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
