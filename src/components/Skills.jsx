import SectionHeader from "./SectionHeader.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="Technology stack built for full-stack delivery"
          description="A balanced toolkit for backend services, frontend screens, databases, version control, and deployment workflows."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-soft"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-50 text-cyan-800 transition group-hover:bg-cyan-800 group-hover:text-white">
                    <Icon size={21} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                    {skill.category}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
