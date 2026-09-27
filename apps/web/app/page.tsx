const products = [
  {
    icon: "▶",
    name: "Zacus Video",
    description:
      "A powerful video editor for creators. Edit, trim, add effects, and export your videos with ease.",
    label: "Video Editor",
  },
  {
    icon: "◉",
    name: "Zacus Audio",
    description:
      "Record, edit, clean and enhance your audio with simple and powerful tools.",
    label: "Audio Editor",
  },
  {
    icon: "▣",
    name: "Zacus Screen",
    description:
      "Record your screen, webcam and microphone. Perfect for tutorials, demos and presentations.",
    label: "Screen Recorder",
  },
];

const platforms = [
  { name: "Web", description: "Use Zacus directly in your browser." },
  { name: "Windows", description: "Powerful desktop tools for Windows." },
  { name: "macOS", description: "A native creative experience on Mac." },
  { name: "Android", description: "Create and edit wherever you are." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a
          href="/"
          className="text-2xl font-bold tracking-[-0.04em] transition-opacity hover:opacity-70"
        >
          Zacus
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#products" className="transition-colors hover:text-white">
            Products
          </a>
          <a href="#platforms" className="transition-colors hover:text-white">
            Platforms
          </a>
          <a href="#pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden rounded-full px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-white sm:block"
          >
            Sign in
          </a>

          <a
            href="#products"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pb-28 pt-24 lg:px-8 lg:pb-36 lg:pt-32">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Web · Desktop · Mobile
          </div>

          <h1 className="text-5xl font-bold tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
            Create without
            <br />
            <span className="text-zinc-500">limits.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Powerful creative tools for video, audio, screen recording and
            more. One ecosystem for everything you create.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#products"
              className="w-full rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:scale-105 sm:w-auto"
            >
              Start creating
            </a>

            <a
              href="#products"
              className="w-full rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/[0.07] sm:w-auto"
            >
              Explore apps
            </a>
          </div>
        </div>
      </section>

      {/* Product section */}
      <section id="products" className="border-t border-white/10 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-zinc-500">THE ZACUS ECOSYSTEM</p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Everything you need
              <br />
              to create.
            </h2>

            <p className="mt-5 leading-7 text-zinc-500">
              A growing collection of simple, powerful creative applications
              designed to work together.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-bold text-black">
                  {product.icon}
                </div>

                <p className="mt-8 text-xs font-medium uppercase tracking-widest text-zinc-500">
                  {product.label}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {product.name}
                </h3>

                <p className="mt-4 min-h-20 text-sm leading-6 text-zinc-500">
                  {product.description}
                </p>

                <a
                  href="#"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-all group-hover:gap-3"
                >
                  Learn more
                  <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform section */}
      <section
        id="platforms"
        className="border-t border-white/10 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium text-zinc-500">CREATE ANYWHERE</p>

            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              One account.
              <br />
              Every platform.
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-zinc-500">
              Start a project on the web, continue on desktop, or create
              something from your phone. Zacus is built around your workflow.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              Explore downloads
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-semibold">{platform.name}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-20 text-center sm:px-12">
          <p className="text-sm font-medium text-zinc-500">ZACUS</p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Your ideas deserve
            <br />
            better tools.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-zinc-500">
            Start creating with Zacus today. More powerful tools are on the
            way.
          </p>

          <a
            href="#products"
            className="mt-9 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Start creating
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xl font-bold tracking-[-0.04em]">Zacus</div>
            <p className="mt-1 text-sm text-zinc-600">
              Creative tools for everyone.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-xs text-zinc-700">
          © 2026 Zacus. All rights reserved.
        </div>
      </footer>
    </main>
  );
}