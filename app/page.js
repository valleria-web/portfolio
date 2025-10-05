import Image from "next/image";

export default function Home() {
  const nav = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "Geo Pixel Map",
      desc: "A Minimalistic, Real-Time Global Status Visualization Tool",
      tags: ["Next.js", "Leaflet", "MongoDB"],
      image: "/geoPixelMap.png",
      link: "/geo-pixel-map",
    },
    {
      title: "Timeline MVC",
      desc: "Dynamic timeline built from Markdown → objects.",
      tags: ["Next.js", "OOP", "Markdown"],
      link: "https://odaee-timeline.vercel.app/",
    },

    {
      title: "Sales Dashboard",
      desc: "KPIs, Top 10 and range-based analytics.",
      tags: ["Charts", "API", "Node"],
      link: "/sales-dashboard",
    },
    {
      title: "The Digital Character Cafe",
      desc: "Where Bitcoin NFTs come to life with unique personalities and stories.",
      tags: ["Blog", "Video Edition"],
      image: "/the-digital-character-cafe.jpg",
      link: "https://the-digital-character-cafe.vercel.app/",
    },
    {
      title: "Ordinals Observatory",
      desc: "Ordinals on Bitcoin",
      tags: ["Blog", "NFTs"],
      image: "/ordinals-observatory.png",
      link: "https://portal-ordinal.vercel.app/",
    },
    {
      title: "Portfolio",
      desc: "This site — clean and elegant code.",
      tags: ["UI/UX", "Next.js"],
    },
  ];

  const skills = [
    "JavaScript (ES6+)",
    "React / Next.js",
    "Node.js",
    "MongoDB",
    "REST APIs",
    "NotebookLM",
    "Haggingface",
    "AI / AI Agents",
    "Prompt Engineering/Context",
    "Blockchain / Web3",
    "Smart Contracts (Solidity)",
    "Git & GitHub",
    "Vercel / Cloud Deployment",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="font-bold tracking-tight text-xl">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Valeria (VdSR)
            </span>
            <span className="text-slate-400"> · Portfolio</span>
          </a>
          <ul className="hidden md:flex gap-6 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white/40 hover:shadow-lg hover:shadow-fuchsia-500/10 transition"
          >
            <span>Let’s talk</span>
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative">
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
          <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute top-20 right-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open for collaborations
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Valeria
                </span>
                .
              </h1>
              <p className="mt-4 text-slate-300 max-w-prose">
                Software engineering student building web experiences with{" "}
                <strong className="text-white">JavaScript (OOP)</strong>,{" "}
                <strong className="text-white">Next.js</strong>, and exploring{" "}
                <strong className="text-white">AI & Blockchain</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full px-5 py-3 text-sm font-medium bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition"
                >
                  View Projects
                </a>
                <a
                  href="#about"
                  className="rounded-full px-5 py-3 text-sm font-medium border border-white/20 hover:border-white/40"
                >
                  About Me
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Next.js", "React", "Node.js", "Tailwind", "AI", "Web3"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          🛠️ Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 hover:bg-white/[0.08] transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
          <a href="#" className="text-sm text-cyan-300 hover:text-cyan-200">
            View all →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition overflow-hidden"
            >
              <a
                href={p.link || "#"}
                target={p.link ? "_blank" : "_self"}
                rel={p.link ? "noopener noreferrer" : undefined}
                className="block"
              >

                <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-fuchsia-500/30 via-violet-500/25 to-cyan-500/30" />
                  )}
                </div>
              </a>

              <div className="p-4">
                <h3 className="mt-2 text-lg font-semibold group-hover:text-white">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border border-white/10 bg-slate-900/60 px-2 py-1 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONNECT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center border-t border-white/10 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Shall we build something together?
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          Explore my code or get in touch, I usually reply fast.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@aprendo_ensinando"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 text-white hover:brightness-110 transition"
          >
            ▶️ YouTube
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/valleria-web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-white hover:bg-white/10 transition"
          >
            🧠 GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/valeria-ds-reiser/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-white hover:bg-white/10 transition"
          >
            💼 LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between text-sm text-slate-400">
          <p>{new Date().getFullYear()} VdSR. Built with ❤️ and Next.js.</p>
          <a href="#hero" className="hover:text-slate-200">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}