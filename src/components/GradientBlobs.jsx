export default function GradientBlobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 animate-blob"
        style={{ background: "radial-gradient(circle,#00C2FF, transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-25 animate-blob"
        style={{
          background: "radial-gradient(circle,#2563EB, transparent 60%)",
          animationDelay: "4s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-blob"
        style={{
          background: "radial-gradient(circle,#38BDF8, transparent 60%)",
          animationDelay: "8s",
        }}
      />
    </div>
  );
}
