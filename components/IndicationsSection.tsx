import {
  Target,
  Droplet,
  Heart,
  Brain,
  MessageCircle,
  Hand,
  Eye,
  Shield,
  Plus,
  LucideIcon,
} from "lucide-react";

const indications: { name: string; icon: LucideIcon }[] = [
  { name: "Oncology", icon: Target },
  { name: "Hematology", icon: Droplet },
  { name: "Cardiometabolism", icon: Heart },
  { name: "Neurology", icon: Brain },
  { name: "Psychiatry", icon: MessageCircle },
  { name: "Dermatology", icon: Hand },
  { name: "Ophthalmology", icon: Eye },
  { name: "Virology", icon: Shield },
  { name: "and others", icon: Plus },
];

export default function IndicationsSection() {
  return (
    <section className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="max-w-3xl font-serif text-[2.75rem] italic leading-[1.05] text-ink md:text-6xl">
          Indications we have worked in
        </h2>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {indications.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 rounded-2xl bg-[#EFE9DC] px-4 py-3.5"
            >
              <item.icon
                className="h-5 w-5 shrink-0 text-stone"
                strokeWidth={1.5}
              />
              <span className="text-[15px] text-ink/80">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
