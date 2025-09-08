import React from "react";

const plans = {
  budget: [
    {
      name: "Coal Plan ⛏️",
      ram: "2GB DDR4 RAM",
      cpu: "1vCore CPU",
      disk: "8GB NVMe SSD",
      price: "₹49 ~1",
    },
    {
      name: "Iron Plan ⛓️",
      ram: "4GB DDR4 RAM",
      cpu: "2vCore CPU",
      disk: "15GB NVMe SSD",
      price: "₹89 ~1",
    },
    {
      name: "Gold Plan 🥇",
      ram: "6GB DDR4 RAM",
      cpu: "3vCore CPU",
      disk: "25GB NVMe SSD",
      price: "₹149 ~1",
    },
  ],
  premium: [
    {
      name: "Diamond Plan 💎",
      ram: "8GB DDR4 RAM",
      cpu: "3vCore CPU",
      disk: "30GB NVMe SSD",
      price: "₹199 ~1",
    },
    {
      name: "Netherite Plan 🪨",
      ram: "12GB DDR4 RAM",
      cpu: "4vCore CPU",
      disk: "40GB NVMe SSD",
      price: "₹289 ~1",
    },
  ],
};

const features = [
  "Plugins Installer",
  "Version Installer",
  "Player Manager",
  "Themed Game Panel",
  "FULL SFTP & Console Access",
  "24/7 Uptime & Instant Setup",
  "Per GB / ₹25 INR",
  "Custom Plans Available",
];

export default function Plans() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl text-center mb-8 font-bold">Echo Cloud VPS Plans</h1>

      {/* Budget Plans */}
      <h2 className="text-2xl mb-4 font-semibold text-center">💰 Budget Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {plans.budget.map((plan) => (
          <div
            key={plan.name}
            className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
            <ul className="mb-4 text-left">
              <li>➡️ {plan.ram}</li>
              <li>➡️ {plan.cpu}</li>
              <li>➡️ {plan.disk}</li>
            </ul>
            <div className="text-yellow-400 font-bold text-lg">{plan.price}</div>
          </div>
        ))}
      </div>

      {/* Premium Plans */}
      <h2 className="text-2xl mb-4 font-semibold text-center">💎 Premium Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {plans.premium.map((plan) => (
          <div
            key={plan.name}
            className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
            <ul className="mb-4 text-left">
              <li>➡️ {plan.ram}</li>
              <li>➡️ {plan.cpu}</li>
              <li>➡️ {plan.disk}</li>
            </ul>
            <div className="text-yellow-400 font-bold text-lg">{plan.price}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="bg-gray-800 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">🔧 Included Features</h2>
        <ul className="list-disc list-inside space-y-1">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <p className="text-center mt-8 text-gray-400">
        LOCATION: INDIA 🇮🇳 | POWERED BY INTEL | DDR4 RAM | NVMe SSD STORAGE
      </p>
    </div>
  );
}
