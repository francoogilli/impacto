// page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between px-7 py-20">
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
        <div className="flex justify-center items-center pb-16">
          <Image src="/logo.webp" alt="Logo" width={92} height={92}/>
        </div>
        <p className="text-[2.55rem] leading-[1] md:text-[3.55rem] md:leading-[1.2]  font-semibold text-center text-[#EFEFEF]">Potencia tu empresa con las mejores 
          <span className="text-balance text-[#4492FC]"> soluciones.</span>
        </p> 
      </div>
    </main>
  );
}
