import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="Project examples showing full-stack implementation, backend APIs, database design, deployment, and responsive interfaces."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-cyan-300 hover:shadow-soft"
            >
              <div className="h-2 rounded-full bg-gradient-to-r from-cyan-700 via-emerald-500 to-amber-400" />
              <h3 className="mt-6 text-2xl font-extrabold text-slate-950">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-3">
                <a
                  href={project.liveUrl}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-800"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
                {/* <a
                  href={project.codeUrl}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-bold text-slate-800 transition hover:border-cyan-700 hover:text-cyan-800"
                >
                  <GitBranch size={16} />
                  Code
                </a> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
