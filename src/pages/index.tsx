import Head from "next/head";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ArrowDownCircleIcon } from "lucide-react";
import { Canvas } from "@react-three/fiber";

import avatar from "../../public/avatar.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Header } from "~/components/header";
import { Blob } from "~/components/three/blob";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codelab</title>
        <meta name="description" content="Codelab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax pages={2} className="bg-white text-stone-950 dark:bg-stone-950 dark:text-white font-semibold text-xl md:text-4xl">
        <ParallaxLayer
          speed={1}
          offset={0}
          factor={2}
          style={{
            backgroundColor: "rgb(30, 13, 60)",
            // backgroundColor: "rgb(28, 25, 23)",
            backgroundImage: "radial-gradient(at 25% 25%, rgb(30, 58, 138) 0, transparent 60%), radial-gradient(at 60% 50%, rgb(112, 26, 117) 0, transparent 50%), radial-gradient(at 90% 100%, rgba(112, 75, 50) 0, transparent 40%), radial-gradient(at 0% 100%, rgb(30, 13, 60) 0, transparent 75%)"
          }}
        />
        <ParallaxLayer
          speed={1}
          offset={0.99999}
          factor={1}
          className="bg-gradient-to-b from-transparent to-stone-950"
        />
        <ParallaxLayer speed={1} offset={0} className="">
          <div
            className="absolute left-0 top-0 w-full h-full"
          ></div>
          <Canvas id="blob-canvas" camera={{ position: [.0, .0, 8.]}} className="absolute w-full h-full left-0 top-0">
            <Blob />
          </Canvas>
        </ParallaxLayer>
        <ParallaxLayer speed={-50} offset={0} className="flex flex-col-reverse items-center p-4">
          <ArrowDownCircleIcon className="h-8 w-8" />
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={0} className="flex flex-col justify-center items-center gap-4 dark:text-white text-stone-950">
          <h1 className="text-7xl md:text-9xl font-bold">Codelab</h1>
          {/* aca8fc */}
          <p>Coding for fun</p>
        </ParallaxLayer>
        {/* <ParallaxLayer
          speed={1}
          offset={0.9999}
          factor={1.5}
          style={{
            backgroundColor: "rgb(30, 13, 60)",
            // backgroundColor: "rgb(28, 25, 23)",
            backgroundImage: "radial-gradient(at 25% 25%, rgb(30, 58, 138) 0, transparent 60%), radial-gradient(at 60% 50%, rgb(112, 26, 117) 0, transparent 50%), radial-gradient(at 90% 100%, rgba(112, 75, 50) 0, transparent 40%), radial-gradient(at 0% 100%, rgb(30, 13, 60) 0, transparent 75%)"
          }}
        /> */}
        {/* <ParallaxLayer
          speed={1}
          offset={0.9999}
          // factor={1.5}
          style={{
            backgroundColor: "rgb(217, 249, 157)",
            backgroundImage: "radial-gradient(at 15% 26%, rgb(96, 165, 250) 0, transparent 90%), radial-gradient(at 14% 14%, rgb(134, 239, 172) 0, transparent 56%), radial-gradient(at 68% 6%, rgb(254, 243, 199) 0, transparent 30%), radial-gradient(at 41% 8%, rgb(71, 85, 105) 0, transparent 14%), radial-gradient(at 5% 81%, rgb(254, 226, 226) 0, transparent 77%), radial-gradient(at 45% 17%, rgb(159, 18, 57) 0, transparent 29%)"
          }}
        /> */}
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
