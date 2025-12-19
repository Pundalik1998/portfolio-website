import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Portfolio | Contact",
  description:
    "Get in touch with Pundalik Masurkar for software development roles, freelance work, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <section className="space-y-8 fade-in-up">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let&apos;s build something together.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Whether you have a project in mind, want to discuss a role, or just say
          hello, feel free to reach out using the form below. You can also connect
          with me directly via email or LinkedIn.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[3fr,2fr] fade-in-delayed">
        <ContactForm />

        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-200 card-elevated">
            <h2 className="text-sm font-semibold text-white">Direct contact</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              You can reach me directly using the details below.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <span className="text-slate-400">Email:</span>{" "}
                <span className="text-slate-100">pundalikmasurkar2001@gmail.com</span>
              </li>
              <li>
                <span className="text-slate-400">Location:</span>{" "}
                <span className="text-slate-100">Kolhapur, India</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-200 card-elevated">
            <h2 className="text-sm font-semibold text-white">Links</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/pundalik-masurkar2001"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-300 hover:text-indigo-200 underline-offset-2 hover:underline"
                >
                  @pundalik-masurkar2001
                </a>
              </li>
              <li>GitHub: <a
                  href="https://github.com/Pundalik1998"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-300 hover:text-indigo-200 underline-offset-2 hover:underline"
                >
                  https://github.com/Pundalik1998
                </a></li>
              <li>leetcode:  <a
                  href="https://leetcode.com/u/Pundalik_Masurkar/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-300 hover:text-indigo-200 underline-offset-2 hover:underline"
                >
                  https://leetcode.com/u/Pundalik_Masurkar/
                </a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}


