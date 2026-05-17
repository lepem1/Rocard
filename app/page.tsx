<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <title>Rocard</title>

  <script src="https://cdn.tailwindcss.com"></script>

  <style>
    body {
      background: #07111f;
      overflow-x: hidden;
      font-family: Arial, sans-serif;
    }

    .glass {
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255,255,255,0.1);
    }

    .glow {
      position: absolute;
      width: 500px;
      height: 500px;
      background: rgba(0,255,255,0.15);
      filter: blur(120px);
      z-index: 0;
    }
  </style>
</head>

<body class="text-white min-h-screen relative">

  <div class="glow top-[-200px] left-[-100px]"></div>
  <div class="glow bottom-[-200px] right-[-100px]"></div>

  <!-- Navbar -->
  <nav class="flex justify-between items-center p-6 relative z-10">

    <h1 class="text-4xl font-bold text-cyan-400">
      Rocard
    </h1>

    <div class="flex gap-4">

      <a href="/login"
         class="px-6 py-3 rounded-xl glass hover:bg-white/10 transition">
        Login
      </a>

      <a href="/register"
         class="px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
        Create Account
      </a>

    </div>

  </nav>

  <!-- Hero -->
  <section class="flex flex-col items-center justify-center text-center mt-28 px-6 relative z-10">

    <h2 class="text-6xl md:text-7xl font-bold max-w-5xl leading-tight">
      Modern Digital
      <span class="text-cyan-400"> Earning Bank</span>
    </h2>

    <p class="text-gray-300 mt-8 max-w-2xl text-xl">
      Rocard helps users earn money through tasks,
      rewards, surveys, and secure payout systems.
    </p>

    <div class="flex gap-5 mt-10 flex-wrap justify-center">

      <a href="/register"
         class="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
        Start Earning
      </a>

      <a href="/login"
         class="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
        Login
      </a>

    </div>

  </section>

  <!-- Cards -->
  <section class="grid md:grid-cols-3 gap-8 px-8 mt-24 max-w-7xl mx-auto relative z-10">

    <div class="glass rounded-3xl p-8 shadow-2xl">

      <div class="text-cyan-400 text-5xl mb-5">
        🔒
      </div>

      <h3 class="text-2xl font-bold">
        Secure Accounts
      </h3>

      <p class="text-gray-400 mt-4">
        Protected login system with encrypted user data
        and advanced security systems.
      </p>

    </div>

    <div class="glass rounded-3xl p-8 shadow-2xl">

      <div class="text-cyan-400 text-5xl mb-5">
        💰
      </div>

      <h3 class="text-2xl font-bold">
        Earn Rewards
      </h3>

      <p class="text-gray-400 mt-4">
        Complete tasks, surveys, and activities to
        receive rewards instantly.
      </p>

    </div>

    <div class="glass rounded-3xl p-8 shadow-2xl">

      <div class="text-cyan-400 text-5xl mb-5">
        ⚡
      </div>

      <h3 class="text-2xl font-bold">
        Fast Withdrawals
      </h3>

      <p class="text-gray-400 mt-4">
        Withdraw earnings using gift cards or
        supported payout systems.
      </p>

    </div>

  </section>

  <!-- Fake Bank Card -->
  <section class="flex justify-center mt-28 px-6 relative z-10">

    <div class="glass rounded-[35px] p-10 w-[500px] shadow-2xl">

      <div class="flex justify-between items-center">

        <h2 class="text-3xl font-bold text-cyan-400">
          Rocard
        </h2>

        <div class="text-gray-300">
          Platinum
        </div>

      </div>

      <div class="mt-16 text-3xl tracking-[6px]">
        4587 2391 8492 1932
      </div>

      <div class="flex justify-between mt-10">

        <div>
          <p class="text-gray-400 text-sm">
            CARD HOLDER
          </p>

          <p class="mt-1 text-lg">
            USER ACCOUNT
          </p>
        </div>

        <div>
          <p class="text-gray-400 text-sm">
            EXPIRES
          </p>

          <p class="mt-1 text-lg">
            12/30
          </p>
        </div>

      </div>

    </div>

  </section>

  <!-- Footer -->
  <footer class="text-center text-gray-500 mt-24 pb-10 relative z-10">
    © 2026 Rocard. All rights reserved.
  </footer>

</body>
</html>
