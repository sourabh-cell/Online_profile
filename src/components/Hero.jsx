import { ArrowRight, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { highlights, profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,#ecfeff_0,#f8fafc_35%,#f1f5f9_100%)] px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-700 via-emerald-500 to-amber-400" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-bold text-cyan-800 shadow-sm">
            <Sparkles size={16} />
            Available for Java full-stack opportunities
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-2xl font-bold text-cyan-800 sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Java Full Stack Developer with {profile.experience} of experience
            building scalable backend services, REST APIs, secure application
            workflows, and responsive React interfaces.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-1 hover:bg-cyan-800"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:-translate-y-1 hover:border-cyan-700 hover:text-cyan-800"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-cyan-800 transition hover:-translate-y-1 hover:bg-cyan-50"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-lg border border-white bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <Icon className="mb-3 text-cyan-700" size={22} />
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 font-bold text-slate-950">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-white bg-white p-6 shadow-soft">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
              <div className="grid h-20 w-20 place-items-center rounded-lg bg-gradient-to-br from-slate-950 to-cyan-800 text-2xl font-extrabold text-white">
                SG
              </div>
              <div>
                <p className="text-xl font-extrabold text-slate-950">
                  Backend-first full stack
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-500">
                  <MapPin size={16} />
                  {profile.location}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                ["API Development", "Spring Boot, REST, Security"],
                ["Frontend Delivery", "React.js, responsive UI"],
                ["Data Layer", "MySQL, Hibernate/JPA"],
                ["Cloud Basics", "AWS EC2, AWS S3"]
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="flex items-center justify-between gap-4 rounded-lg bg-slate-50 p-4"
                >
                  <span className="text-sm font-bold text-slate-700">
                    {title}
                  </span>
                  <span className="text-right text-sm font-semibold text-cyan-800">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
