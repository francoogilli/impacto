// page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between px-7 py-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/background.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ width: "125%", height: "125%" }}
        />
      </div>
      <div className="relative z-10 max-w-[58rem]">
        <p className="text-5xl md:text-6xl font-semibold text-[#EFEFEF]">Optimiza tu Empresa con las mejores <span className="text-balance text-[#FFEE00]">Soluciones.</span></p>
      </div>
    </main>
  );
}
