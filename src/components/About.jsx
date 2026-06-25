import { CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";

const strengths = [
  "Developing RESTful APIs with Spring Boot and Java",
  "Creating responsive interfaces with React.js",
  "Working with MySQL, Hibernate/JPA, and clean data models",
  "Deploying and maintaining applications with practical cloud workflows"
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About Me"
          title="A practical developer focused on reliable web applications"
          description="I enjoy turning business requirements into working software with clear backend logic, maintainable APIs, and simple user experiences."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg bg-slate-950 p-8 text-white shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Profile Summary
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Java Full Stack Developer with hands-on experience across Spring
              Boot, React.js, MySQL, REST APIs, Spring Security, and Hibernate.
              Comfortable contributing to both backend and frontend tasks, with
              a strong interest in clean code, scalable architecture, and
              production-ready delivery.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-soft"
              >
                <CheckCircle2 className="text-emerald-600" size={22} />
                <p className="mt-4 font-semibold leading-7 text-slate-800">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
