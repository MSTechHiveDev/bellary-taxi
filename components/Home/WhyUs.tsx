import { ShieldCheck, Clock, Car, BadgeCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Clock size={36} />,
      title: "24/7 Availability",
      desc: "Anytime, anywhere in Bellary — day or night. We are always on standby.",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Safe & Professional",
      desc: "Verified, trained drivers with clean & comfortable vehicles.",
    },
    {
      icon: <BadgeCheck size={36} />,
      title: "Transparent Pricing",
      desc: "No hidden charges. Pay only what you see. Honest & fair pricing.",
    },
    {
      icon: <Car size={36} />,
      title: "Clean & Well-Maintained Cars",
      desc: "Sanitized, inspected, and maintained regularly for comfort & safety.",
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl sm:text-4xl font-bold">
          Why Choose <span className="text-yellow-400">Best Bellary Taxi?</span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          We make every ride safe, comfortable, and hassle-free with our professional service.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition backdrop-blur-md"
            >
              <div className="text-yellow-400 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
