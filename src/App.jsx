import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white text-gray-900">
      {/* Nav / Header */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/60 border-b border-indigo-100/60">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">1</div>
            <span className="font-semibold">OneStep</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
            <a href="#how" className="hover:text-indigo-600 transition">How it works</a>
            <a href="#testimonials" className="hover:text-indigo-600 transition">Stories</a>
          </div>
          <a href="#get-started" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">Get Started</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-3xl rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Stop Tracking Habits. <span className="text-indigo-600">Start Building Your Identity.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl">
              OneStep is more than a habit tracker. It’s a complete system for personal transformation, designed to help you become the person you want to be. We focus on the <em>who</em>, not just the <em>what</em>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a id="get-started" href="#download" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-sm hover:shadow-md hover:bg-indigo-700 transition">
                Get Started for Free
              </a>
              <span className="text-sm text-gray-600">Available on iOS and Android.</span>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden p-4 md:p-6">
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  'Morning coffee',
                  'Journal 3 min',
                  'Plan day',
                  'Read 5 pages',
                  '10 push-ups',
                  'Breathwork',
                  'Walk 10 min',
                  'Hydrate',
                  'Sleep by 11',
                ].map((label, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-700 px-3 py-4 text-xs font-medium"
                  >
                    {label}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-gray-500">A glimpse of stacked habits powering your identity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold">Why Most Habits Don't Stick (And How We Fix It)</h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            You've tried tracking streaks. You've set reminders. But motivation fades because traditional apps miss the point: <strong>Lasting change isn't about what you do, it's about who you become.</strong>
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            OneStep is built on the proven principle of identity-based habit formation. Every action you take becomes a vote for your future self, making change feel natural, not forced.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">A Smarter Way to Build Your Life</h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="rounded-2xl bg-white border border-indigo-100 p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold">Build Unstoppable Routines with Habit Stacking</h3>
              <p className="mt-3 text-gray-700">
                Don't just add habits—chain them together. Our intuitive drag-and-drop interface lets you create powerful, automated sequences where one good habit effortlessly triggers the next. Turn your morning coffee into a 5-step ritual for a productive day.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="rounded-2xl bg-white border border-indigo-100 p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold">Become Your Own Proof</h3>
              <p className="mt-3 text-gray-700">
                Every completed habit is more than a checkmark; it's evidence. Our unique Evidence Ledger is your personal journal of wins, skills, and achievements. Watch the proof of your new identity grow day by day, reinforcing your commitment and crushing self-doubt.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="rounded-2xl bg-white border border-indigo-100 p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold">Design Habits That Actually Work</h3>
              <p className="mt-3 text-gray-700">
                Our guided 4-step process (When, Where, How, Review) helps you create deeply contextual and actionable habits. By defining the triggers and specific steps from the start, you're building a system for success, not just a wish list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">Your Transformation in 3 Simple Steps</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">1</div>
              <h3 className="mt-4 text-lg font-bold">Define Your Identity</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Start by choosing who you want to become. Are you an athlete? A writer? A mindful person? This is your north star.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">2</div>
              <h3 className="mt-4 text-lg font-bold">Create & Stack Your Habits</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Build specific actions that align with your new identity. Use our creator and habit stacking tools to design powerful daily routines.
              </p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">3</div>
              <h3 className="mt-4 text-lg font-bold">Collect Evidence & Reinforce</h3>
              <p className="mt-2 text-gray-700 text-sm">
                With every completed habit, receive a micro-affirmation and log it in your Evidence Ledger. Watch yourself evolve in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">Don't Just Take Our Word For It</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <blockquote className="rounded-2xl bg-white shadow-sm border p-6">
              <p className="text-gray-800 text-lg">“The Evidence Ledger is a game-changer. Seeing the proof that I'm actually becoming a 'runner' is more motivating than any streak ever was. I'm finally consistent.”</p>
              <footer className="mt-4 text-sm font-semibold text-gray-700">— Sarah K.</footer>
            </blockquote>
            <blockquote className="rounded-2xl bg-white shadow-sm border p-6">
              <p className="text-gray-800 text-lg">“Habit stacking in OneStep is brilliant. My morning routine is now on autopilot. I get more done before 9 AM than I used to in half a day.”</p>
              <footer className="mt-4 text-sm font-semibold text-gray-700">— Michael P.</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="download" className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Take the One Step That Changes Everything?</h2>
          <p className="mt-4 text-gray-700">
            The journey to a new you begins today. Download OneStep and start building a life driven by identity, not just by intention.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black text-white font-semibold shadow hover:opacity-90 transition" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.665 13.807a4.788 4.788 0 0 1 2.24 4.056c-.054 1.27-.394 2.54-.995 3.614-.7 1.275-1.598 2.405-2.682 3.356-1.084.95-2.349 1.685-3.72 2.163-1.23.423-2.523.657-3.82.674a10.777 10.777 0 0 1-3.834-.6 10.5 10.5 0 0 1-3.287-1.87 10.032 10.032 0 0 1-2.373-2.73 10.973 10.973 0 0 1-1.37-3.67 11.31 11.31 0 0 1 .203-4.653 10.473 10.473 0 0 1 1.62-3.557 10.072 10.072 0 0 1 2.792-2.726 10.349 10.349 0 0 1 3.7-1.488 11.091 11.091 0 0 1 4.06.009 9.953 9.953 0 0 1 3.492 1.263 10.736 10.736 0 0 1 2.982 2.698c-.28.203-.534.431-.772.678-1.03 1.07-1.78 2.375-2.177 3.81a7.26 7.26 0 0 0-.212 3.687c.183 1.108.616 2.17 1.272 3.089.655.92 1.52 1.67 2.503 2.181.321.157.65.292.987.405Zm-5.9-13.4c.675-.778 1.53-1.38 2.482-1.767a6.532 6.532 0 0 1 3.763-.257c-.2 1.256-.806 2.415-1.727 3.316-.922.901-2.103 1.494-3.36 1.698a6.728 6.728 0 0 1-3.878-.515c.29-1.244.914-2.39 1.72-3.475Z"/></svg>
              Download on the App Store
            </a>
            <a className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow hover:opacity-90 transition" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="30 336.7 120.9 129.2" className="w-5 h-5 fill-current"><path d="M38.7 367.6c-2.3 3.9-3.6 8.3-3.6 12.9 0 4.6 1.2 9 3.6 12.9 2.3 3.9 5.6 7.1 9.6 9.2l.1-44.2c-4 2.1-7.3 5.3-9.7 9.2z"/><path d="M78.9 407.9l-21.1 21.1c2.9.9 6 .9 9 0 3-.9 5.7-2.7 7.7-5.1l10.3-10.3-5.9-5.9z"/><path d="M119.6 397.2l-11.3-11.3-10.3 10.3 17.4 17.4c2.1-3.5 3.2-7.4 3.2-11.7.1-1.5-.1-3-.4-4.7-.1-1.6-1.6-2.4-3.2-2.4h-5.8l9-9z"/><path d="M57.8 348.9c-4-.9-8.3-.2-11.7 2l21.1 21.1 5.9-5.9-10.3-10.3c-2-2.4-4.7-4.2-7.7-5.1z"/><path d="M108.4 358.8c-1.4-2.4-3.3-4.4-5.6-5.8-2.3-1.3-5-2-7.7-2-3.1 0-6 .8-8.7 2.2l-8.1 8.1 20.5 20.5 10.4-10.3c2.6-2.5 4-5.9 4-9.5 0-1.4-.2-2.8-.8-3.9z"/></svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-indigo-600 text-white grid place-items-center font-bold">1</div>
            <span>© {new Date().getFullYear()} OneStep</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#how" className="hover:text-indigo-600">How it works</a>
            <a href="#download" className="hover:text-indigo-600">Download</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
