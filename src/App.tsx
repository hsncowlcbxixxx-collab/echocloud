import React, { useState } from "react";
import Home from "./components/Home";
import Plans from "./components/Plans";

export default function App() {
  const [selectedOption, setSelectedOption] = useState<"Budget" | "Premium" | null>(null);

  return (
    <>
      {!selectedOption && <Home onSelect={setSelectedOption} />}
      {selectedOption && <Plans category={selectedOption} onBack={() => setSelectedOption(null)} />}
    </>
  );
}
