import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Education() {
  return (
    <section id="education" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation"
          description="Computer application education supporting full-stack development, database design, and software engineering fundamentals."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.short}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-800 text-white">
                  <GraduationCap size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-800">
                    {item.short}
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-slate-950">
                    {item.degree}
                  </h3>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
