import useMousePosition from "../hooks/useMousePosition";

export default function MouseGlow() {
  const { x, y } = useMousePosition();
  return (
    <div
      className="pointer-events-none fixed z-[1] hidden md:block"
      style={{
        left: x - 200,
        top: y - 200,
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(0,194,255,0.18) 0%, transparent 60%)",
        transition: "transform .08s linear",
      }}
    />
  );
}
