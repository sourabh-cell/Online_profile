import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-semibold text-slate-600">
          © 2026 {profile.name}. All rights reserved.
        </p>
        <p className="text-sm font-semibold text-slate-500">
          Built with React.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
