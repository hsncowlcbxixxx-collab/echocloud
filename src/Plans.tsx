import React from "react";

const plans = [
  {
    name: "Coal Plan ⛏️",
    type: "Budget",
    ram: "2GB DDR4 RAM",
    cpu: "1vCore CPU",
    disk: "8GB NVMe SSD",
    price: "₹49 ~1",
    color: "bg-gray-700",
  },
  {
    name: "Iron Plan ⛓️",
    type: "Budget",
    ram: "4GB DDR4 RAM",
    cpu: "2vCore CPU",
    disk: "15GB NVMe SSD",
    price: "₹89 ~1",
    color: "bg-gray-600",
  },
  {
    name: "Gold Plan 🥇",
    type: "Budget",
    ram: "6GB DDR4 RAM",
    cpu: "3vCore CPU",
    disk: "25GB NVMe SSD",
    price: "₹149 ~1",
    color: "bg-yellow-600",
  },
  {
    name: "Diamond Plan 💎",
    type: "Premium",
    ram: "8GB DDR4 RAM",
    cpu: "3vCore CPU",
    disk: "30GB NVMe SSD",
    price: "₹199 ~1",
    color: "bg-blue-500",
  },
  {
    name: "Netherite Plan 🪨",
    type: "Premium",
    ram: "12GB DDR4 RAM",
    cpu: "4vCore CPU",
    disk: "40GB NVMe SSD",
    price: "₹289 ~1",
    color: "bg-purple-700",
  },
];

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
    <div className="min-h-screen bg-[url('/assets/minecraft-bg.jpg')] bg-cover bg-center py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-yellow-400 drop-shadow-lg">
          Echo Cloud VPS Plans
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${plan.color} rounded-xl p-6 text-white text-center border-4 border-black hover:scale-105 transform transition-transform shadow-lg`}
            >
              <h3 className="text-2xl font-bold mb-4 drop-shadow-md">{plan.name}</h3>
              <ul className="mb-4 text-left list-disc list-inside">
                <li>{plan.ram}</li>
                <li>{plan.cpu}</li>
                <li>{plan.disk}</li>
              </ul>
              <div className="text-2xl font-extrabold text-yellow-300 drop-shadow-md">
                {plan.price}
              </div>
              <div className="mt-2 text-sm font-semibold text-gray-200">{plan.type}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-400 drop-shadow-md">
            🔧 Included Features
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-200">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <p className="text-center mt-8 text-gray-300 font-semibold">
          LOCATION: INDIA 🇮🇳 | POWERED BY INTEL | DDR4 RAM | NVMe SSD STORAGE
        </p>
      </div>
    </div>
  );
}
