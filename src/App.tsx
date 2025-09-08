import React from "react";

const FeatureCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="p-6 bg-gray-900 rounded-xl shadow-md hover:scale-105 transition transform">
    <h3 className="text-2xl font-bold text-indigo-400 mb-3">{title}</h3>
    <p className="text-gray-300">{children}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-gray-900/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.svg" alt="Echo Cloud" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-white">Echo Cloud</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex-1 grid place-items-center py-24 px-6 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl font-extrabold text-white mb-4">Echo Cloud — Premium Hosting</h2>
          <p className="text-lg text-indigo-100 mb-8">Fast. Secure. Reliable. Scale with confidence — 99.9% uptime, SSD storage, and 24/7 expert support.</p>
          <div className="flex gap-4 justify-center">
            <a className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:opacity-95" href="#pricing">Get Started</a>
            <a className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/5" href="#features">See Features</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-white">Why Echo Cloud?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard title="Blazing Speed">SSD NVMe storage, optimized networking and HTTP/3 support for lowest latency.</FeatureCard>
            <FeatureCard title="DDoS Protection">Multi-layered mitigation to keep your services online under attack.</FeatureCard>
            <FeatureCard title="24/7 Support">Expert support via chat & email — we're always here to help.</FeatureCard>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-6 bg-gray-900/80">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-white">Plans & Pricing</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$5/mo", perks: ["1 vCPU", "1 GB RAM", "10 GB SSD"] },
              { name: "Business", price: "$15/mo", perks: ["2 vCPU", "4 GB RAM", "50 GB SSD"] },
              { name: "Enterprise", price: "$45/mo", perks: ["8 vCPU", "16 GB RAM", "200 GB SSD"] },
            ].map((p) => (
              <div key={p.name} className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg">
                <h4 className="text-2xl font-bold mb-3 text-white">{p.name}</h4>
                <div className="text-4xl font-extrabold mb-6 text-indigo-300">{p.price}</div>
                <ul className="mb-6 text-gray-300 space-y-2">
                  {p.perks.map((x) => (
                    <li key={x}>✅ {x}</li>
                  ))}
                </ul>
                <button className="px-5 py-3 bg-indigo-500 rounded-lg text-white font-semibold hover:bg-indigo-600">Choose</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-8 mt-12 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Echo Cloud — All rights reserved.</p>
          <p className="text-sm">Built with ❤️ — Deploy on Vercel / Netlify / any static host</p>
        </div>
      </footer>
    </div>
  );
}
