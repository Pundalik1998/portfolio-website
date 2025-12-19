export const metadata = {
  title: "Portfolio | Skills",
  description:
    "Technical skills of Pundalik Masurkar, including Java, Spring Boot, React, REST APIs, MySQL, and modern frontend tooling.",
};

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Redux & Context API",
      "HTML5, CSS3",
      "Tailwind CSS & Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases & Tools",
    items: ["MySQL", "Git & GitHub", "Postman", "VS Code, IntelliJ IDEA"],
  },
];

export default function SkillsPage() {
  return (
    <section className="space-y-8 fade-in-up">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Skills
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Technologies and capabilities I work with.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          A snapshot of my current stack, from building responsive React frontends to
          designing secure REST APIs and working with relational databases in
          production environments.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 fade-in-delayed">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 shadow-sm shadow-slate-950/60 card-elevated"
          >
            <h2 className="text-sm font-semibold text-white">{group.title}</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-indigo-500/40 bg-indigo-950/30 p-5 text-sm text-slate-200 card-elevated">
        <h2 className="text-sm font-semibold text-white">
          How I approach projects
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          I like to understand the problem first, then design a simple but scalable
          solution—whether it&apos;s a Java Spring Boot backend, a React UI, or an
          end‑to‑end ecommerce or AI‑powered application. I care about readable code,
          consistent APIs, and performance that feels effortless to the user.
        </p>
      </div>
    </section>
  );
}


