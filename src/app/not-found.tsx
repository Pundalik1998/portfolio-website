import Link from "next/link";

export default function NotFound() {
  return (
    <section className="space-y-6 py-16 text-center text-slate-100">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
        404
      </p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Page not found.
      </h1>
      <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-300">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        Use the navigation above or return to the home page.
      </p>
      <div className="mt-4 flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}


