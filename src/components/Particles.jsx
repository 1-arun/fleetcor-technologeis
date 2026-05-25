import { useMemo } from "react";

export default function Particles({ count = 24 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: 4 + Math.random() * 10,
        top: Math.random() * 100,
        left: Math.random() * 100,
        dur: 8 + Math.random() * 14,
        delay: Math.random() * 6,
      })),
    [count]
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((p) => (
        <span
          key={p.id}
          className="particle animate-float"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
