import logoSrc from "../assets/logo.png";

export default function Logo({ size = 34 }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-xl overflow-hidden"
      style={{
        width: size,
        height: size,
        boxShadow: "0 0 18px rgba(0,194,255,0.45)",
        background: "rgba(7,16,31,0.8)",
      }}
    >
      <img
        src={logoSrc}
        alt="Fleetcor Logo"
        className="h-[85%] w-[85%] object-contain"
        style={{ display: "block" }}
      />
      <span
        className="absolute inset-0 rounded-xl"
        style={{
          border: "1px solid rgba(255,255,255,0.18)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
