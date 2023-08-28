import Head from "next/head";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ArrowDownCircleIcon } from "lucide-react";

import bg from "../../public/hdd.jpg"
import avatar from "../../public/avatar.jpg"
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Header } from "~/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codelab</title>
        <meta name="description" content="Codelab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax pages={2} className="bg-black text-white font-semibold text-xl md:text-4xl">
        <ParallaxLayer
          speed={.1}
          offset={0}
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={`blur-md brightness-50`}
        />
        <ParallaxLayer speed={50} offset={0} className="flex flex-col-reverse items-center p-4">
          <button>
            <ArrowDownCircleIcon className="h-8 w-8" />
          </button>
        </ParallaxLayer>
        <ParallaxLayer speed={0.75} offset={0} className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 text-transparent bg-clip-text">Codelab</h1>
          {/* aca8fc */}
          <p className="bg-gradient-to-r from-[#ACA8FC] to-[#B991FC] text-transparent bg-clip-text">Coding for fun</p>
        </ParallaxLayer>
        <ParallaxLayer speed={0.75} offset={1} factor={.2} className="flex flex-col gap-4 justify-center items-center p-1">
          <h2 className="text-5xl">Meet the degenerates</h2>
          <div className="flex flex-wrap-reverse items-center gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <Avatar key={i}>
                <AvatarImage asChild src="/avatar.jpg">
                  <Image alt="@dude" src={avatar} />
                </AvatarImage>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0 }}>
          <Header />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
