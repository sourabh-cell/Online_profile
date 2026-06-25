import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GitBranch, Network, Send } from "lucide-react";
import { contactItems, profile } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something useful"
          description="Open to Java full-stack roles, backend-focused opportunities, and collaborative web application work."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-extrabold">Get in touch</h3>
            <p className="mt-4 leading-7 text-slate-300">
              Reach out for job opportunities, project discussions, or resume
              requests.
            </p>

            <div className="mt-8 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-cyan-300"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-400 text-slate-950">
                      <Icon size={20} />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-widest text-slate-400">
                        {item.label}
                      </span>
                      <span className="mt-1 block font-semibold text-white">
                        {item.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="rounded-lg bg-white p-6 text-slate-950 shadow-soft"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-700 focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-700 focus:ring-4 focus:ring-cyan-100"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea
                rows="5"
                name="message"
                placeholder="Tell me about the role or project"
                required
                className="mt-2 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-cyan-700 focus:ring-4 focus:ring-cyan-100"
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-cyan-800 sm:w-auto"
            >
              <Send size={18} />
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-sm font-bold text-slate-700">
                {status}
              </p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:border-cyan-700 hover:text-cyan-800"
              >
                <GitBranch size={17} />
                GitHub
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:border-cyan-700 hover:text-cyan-800"
              >
                <Network size={17} />
                LinkedIn
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
