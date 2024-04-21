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
        <div className="flex justify-center items-center pb-8 md:pb-14">
          <Image src="/logo.webp" alt="Logo" width={92} height={92}/>
        </div>

        <div className="flex justify-center items-center bg-neutral-900 max-w-[14rem] py-2 px-5 mb-7 md:mb-4 gap-x-3 rounded-xl mx-auto">
          <div style={{ width: "10px", height: "10px", backgroundColor: "#4492FC", borderRadius: "50%", boxShadow: "0px 0px 5px 2px #4492FC90"}}></div>
          <div>
            <p className="text-white font-medium">¡Nuevos cursos! 🎉</p>
          </div>
        </div>
        <p className="text-[1.9rem] leading-[1.1] md:text-[3.55rem] md:leading-[1.2]  font-semibold text-center text-[#EFEFEF]">Potencia tu empresa con las mejores 
          <span className="inline from-[#5EA2EF] to-[#0072F5] bg-clip-text text-transparent bg-gradient-to-b"> soluciones.</span>
        </p> 
      </div>
    </main>
  );
}
