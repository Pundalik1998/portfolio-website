export const metadata = {
  title: "Portfolio | About",
  description:
    "Learn more about Pundalik Masurkar, a Software Developer with experience across React frontends and Java & Spring Boot backends.",
};

export default function AboutPage() {
  return (
    <section className="space-y-8 fade-in-up">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Software Developer with hands‑on full‑stack experience.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          I&apos;m Pundalik Masurkar, a Software Developer who enjoys turning ideas into
          reliable, user‑focused web applications. I work across the stack—from React
          frontends to Java &amp; Spring Boot backends—always aiming for clean code and
          smooth user experiences.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 shadow-lg shadow-slate-950/60 card-elevated">
            <h2 className="text-sm font-semibold text-white">Background</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              I&apos;ve worked as a Junior Web Developer at Walstar Technologies, where I
              designed and built front‑end interfaces using HTML, CSS, JavaScript,
              jQuery, and React, and collaborated with backend teams to integrate REST
              APIs and improve performance. Before that, I was a Web Developer Intern at
              Wolfox Services, contributing to full‑stack features using Java, Spring
              Boot, React, and MySQL.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 card-elevated">
            <h2 className="text-sm font-semibold text-white">What I value</h2>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li>· Writing clean, maintainable Java and JavaScript code</li>
              <li>· Building performant, user‑friendly UIs with React</li>
              <li>· Designing RESTful APIs and secure authentication flows</li>
              <li>· Continuous learning, experimentation, and improving system design</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-indigo-500/40 bg-indigo-950/40 p-5 card-elevated">
            <h2 className="text-sm font-semibold text-white">
              Quick profile
            </h2>
            <dl className="mt-3 grid grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Role
                </dt>
                <dd>Software Developer</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Location
                </dt>
                <dd>Kolhapur, India</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Focus
                </dt>
                <dd>Full‑stack web applications, REST APIs, React UIs</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Interests
                </dt>
                <dd>AI‑assisted development, ecommerce platforms, clean architecture</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 card-elevated">
            <h2 className="text-sm font-semibold text-white">Outside of work</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              I enjoy exploring new tools, APIs, and frameworks, especially in the Java
              and JavaScript ecosystems. I also like working on side projects such as AI
              powered component generators and ecommerce platforms that challenge me to
              think about usability, performance, and real‑world constraints.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-5 card-elevated">
        <h2 className="text-sm font-semibold text-white">Timeline</h2>
        <ol className="mt-3 space-y-3 text-sm text-slate-300">
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <div>
              <p className="font-medium text-slate-100">
                Junior Web Developer · Walstar Technologies, Kolhapur
              </p>
              <p className="text-xs text-slate-400">Aug 2023 – Oct 2025</p>
              <p className="mt-1 text-xs text-slate-400">
                Front‑end development with HTML, CSS, JavaScript, jQuery, React and REST
                API integrations.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <div>
              <p className="font-medium text-slate-100">
                Web Developer Intern · Wolfox Services, Kolhapur
              </p>
              <p className="text-xs text-slate-400">Feb 2023 – May 2023</p>
              <p className="mt-1 text-xs text-slate-400">
                Full‑stack features with Java, Spring Boot, React, and MySQL.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
            <div>
              <p className="font-medium text-slate-100">
                B.Tech · Computer Science and Engineering
              </p>
              <p className="text-xs text-slate-400">
                KIT College of Engineering, Kolhapur · Aug 2019 – Jun 2023
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}


