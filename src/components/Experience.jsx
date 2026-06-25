import { BriefcaseBusiness } from "lucide-react";
import { experience } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Experience() {
  return (
    <section id="experience" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Experience"
          title="Hands-on Java full-stack development"
          description="Focused experience across backend development, frontend implementation, database integration, and application deployment."
        />

        <div className="space-y-5">
          {experience.map((item) => (
            <article
              key={item.role}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-slate-950 text-white">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-950">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-semibold text-cyan-800">
                      {item.company}
                    </p>
                  </div>
                </div>
                <span className="w-fit rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
                  {item.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-600">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
