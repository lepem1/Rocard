export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 relative z-10">

        <h1 className="text-4xl font-bold text-cyan-400">
          Rocard
        </h1>

        <div className="flex gap-4">

          <a
            href="/login"
            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Login
          </a>

          <a
            href="/register"
            className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
          >
            Create Account
          </a>

        </div>

      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center mt-28 px-6 relative z-10">

        <h2 className="text-6xl md:text-7xl font-bold max-w-5xl leading-tight">
          Modern Digital
          <span className="text-cyan-400"> Earning Platform</span>
        </h2>

        <p className="text-gray-300 mt-8 max-w-2xl text-xl">
          Complete tasks, participate in activities,
          and earn rewards in a modern secure platform.
        </p>

        <div className="flex gap-5 mt-10 flex-wrap justify-center">

          <a
            href="/register"
            className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
          >
            Get Started
          </a>

          <a
            href="/login"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
          >
            Login
          </a>

        </div>

      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-8 mt-24 max-w-7xl mx-auto relative z-10">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

          <div className="text-cyan-400 text-5xl mb-5">
            🔒
          </div>

          <h3 className="text-2xl font-bold">
            Secure System
          </h3>

          <p className="text-gray-400 mt-4">
            Modern account protection and secure authentication.
          </p>

        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

          <div className="text-cyan-400 text-5xl mb-5">
            📋
          </div>

          <h3 className="text-2xl font-bold">
            Task System
          </h3>

          <p className="text-gray-400 mt-4">
            Complete tasks and activities directly from your dashboard.
          </p>

        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 transition">

          <div className="text-cyan-400 text-5xl mb-5">
            ⚡
          </div>

          <h3 className="text-2xl font-bold">
            Fast Experience
          </h3>

          <p className="text-gray-400 mt-4">
            Smooth, responsive, and optimized platform performance.
          </p>

        </div>

      </section>

      {/* About */}
      <section className="mt-28 px-6 relative z-10">

        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 text-center">

          <h2 className="text-4xl font-bold text-cyan-400">
            Why Rocard?
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Rocard is built to provide a modern earning experience
            with clean design, secure systems, and a simple workflow
            for completing tasks and activities online.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-24 pb-10 relative z-10">
        © 2026 Rocard. All rights reserved.
      </footer>

    </main>
  );
}
