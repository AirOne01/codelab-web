import Head from "next/head";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ArrowDownCircleIcon } from "lucide-react";
import { Canvas } from "@react-three/fiber";

import avatar from "../../public/avatar.jpg"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Header } from "~/components/header";
import { Blob } from "~/components/three/blob";
import { Button } from "~/components/ui/button";
import { SiReact } from "@icons-pack/react-simple-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codelab</title>
        <meta name="description" content="Codelab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full h-full bg-white text-stone-950 dark:bg-stone-950 dark:text-white">
        {/* BODY */}
        <Parallax pages={5} className="static left-0 top-0 font-semibold text-xl md:text-4xl">
          {/* BACKGROUNDS AND GRADIENTS */}
          <ParallaxLayer
            speed={1}
            offset={0}
            factor={2}
            style={{
              backgroundColor: "rgb(30, 13, 60)",
              backgroundImage: "radial-gradient(at 25% 25%, rgb(15, 29, 69) 0, transparent 60%), radial-gradient(at 60% 50%, rgb(56, 13, 59) 0, transparent 50%), radial-gradient(at 90% 100%, rgba(112, 75, 50) 0, transparent 40%), radial-gradient(at 0% 100%, rgb(30, 13, 60) 0, transparent 75%)"
            }}
          />
          <ParallaxLayer
            speed={1}
            offset={0.999999999}
            factor={1}
            className="bg-gradient-to-b from-transparent to-stone-950"
          />
          {/* CONTENT - Page 1 */}
          <ParallaxLayer speed={1} offset={0}>
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
            <p>Coding for fun</p>
          </ParallaxLayer>
          {/* CONTENT - PAGE 2 */}
          <ParallaxLayer
            factor={.1}
            offset={1.25}
            sticky={{ start: .75, end: 1.5 }}
            className="flex flex-col gap-4 justify-center items-center p-1"
            id="people"
          >
            <h2 className="text-5xl">Meet the degenerates</h2>
            <div className="flex flex-wrap-reverse items-center gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <Avatar key={`degen_${i}`}>
                  <AvatarImage asChild src="/avatar.jpg">
                    <Image alt="@dude" src={avatar} />
                  </AvatarImage>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Button>About</Button>
          </ParallaxLayer>
          <ParallaxLayer
            factor={.1}
            offset={1.25}
            sticky={{ start: 1.75, end: 2.5 }}
            className="flex flex-col gap-4 justify-center items-center p-1"
            id="people"
          >
            <h2 className="text-5xl">Our objectives</h2>
            <p className="text-2xl">
              AUUUUUGHHHHH
            </p>
            <Button>bruh</Button>
          </ParallaxLayer>
          <ParallaxLayer
            factor={.1}
            offset={1.25}
            sticky={{ start: 2.75, end: 3.5 }}
            className="flex flex-col gap-4 justify-center items-center p-1"
            id="people"
          >
            <h2 className="text-5xl">The stack©</h2>
            <div className="flex flex-wrap-reverse items-center gap-2">
              {Array.from({ length: 10 }).map((_, i) => (
                <TooltipProvider key={`degen_${i}`}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" className="p-2 aspect-square">
                        <SiReact size={24} className="pointer-events-none" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>React</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <Button>bruh</Button>
          </ParallaxLayer>
        </Parallax>
        {/* HEADER */}
        <Header className="static left-0 top-0" />
      </div>
    </>
  );
}
