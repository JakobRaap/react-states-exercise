import "./styles.css";
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState(false);

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        {!active ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}
