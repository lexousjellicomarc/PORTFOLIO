import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      className="cursor-glow pointer-events-none fixed inset-0 z-[1] hidden xl:block"
      style={{ "--cursor-x": `${position.x}%`, "--cursor-y": `${position.y}%` }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;
