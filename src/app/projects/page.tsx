export const metadata = {
  title: "Portfolio | Projects",
  description:
    "Highlighted projects by Pundalik Masurkar, including an AI Component Generator and a Java full‑stack ecommerce platform.",
};

const projects = [
  {
    title: "AI Component Generator",
    period: "Jun 2024 – Aug 2024",
    tech: "React, Vite, Tailwind CSS, Gemini API, Monaco Editor",
    summary:
      "An AI‑powered React component generator with live preview, component export, and optimized UI rendering.",
    bullets: [
      "Integrated Gemini API to generate React components from natural language prompts.",
      "Used Monaco Editor for a code editing experience similar to VS Code.",
      "Implemented component export, notifications, and performance improvements for smooth previews.",
    ],
  },
  {
    title: "Java Full‑Stack Ecommerce Platform",
    period: "Jan 2023 – May 2023",
    tech: "Spring Boot, React, MySQL, JWT, Razorpay/Stripe",
    summary:
      "A multi‑vendor ecommerce platform with seller dashboards, admin panel, and secure payments.",
    bullets: [
      "Built RESTful APIs with Spring Boot for products, orders, users, and payments.",
      "Implemented JWT‑based authentication, carts, coupons, reviews, and an integrated AI chatbot.",
      "Developed seller dashboards and an admin interface to manage inventory, orders, and deals.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8 fade-in-up">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Projects
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Selected work.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          A few projects that represent how I think about product, performance, and
          real‑world constraints—from AI‑assisted tooling to full‑stack ecommerce.
        </p>
      </div>

      <div className="space-y-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-200 card-elevated"
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline">
              <div>
                <h2 className="text-base font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mt-1 text-xs text-slate-400">{project.tech}</p>
              </div>
              <p className="text-xs text-slate-400">{project.period}</p>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {project.summary}
            </p>

            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              {project.bullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}


