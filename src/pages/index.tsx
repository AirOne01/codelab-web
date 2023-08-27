import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import fg from "../../public/arch_in_desert/fg.webp"
import bg from "../../public/arch_in_desert/bg.webp"

export default function Home() {
  return (
    <>
      <Head>
        <title>Codelab</title>
        <meta name="description" content="Codelab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax pages={4} className="bg-black text-white font-semibold text-4xl">
        <ParallaxLayer
          speed={.1}
          factor={1.56}
          offset={0}
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer speed={.5} offset={.46}>
          <div className="flex justify-center items-center w-full h-full text-black">
            <span className="font-bold">
              \/
            </span>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          speed={.15}
          factor={1.2}
          offset={.3}
          style={{
            backgroundImage: `url(${fg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer speed={0.75} offset={0}>
          <div className="flex flex-col items-center w-full h-full text-black pt-20">
            <h1 className="headline bg-black/20">
              <span className="visually-hidden">Codelab</span>
              <svg aria-hidden="true" id="lockup-headline-mask" className="headline lockup-headline-mask visually-hidden">
                <clipPath id="lockup-headline-mask-path">
                  <text dominantBaseline="hanging" textAnchor="middle" x="50%" y="0em" dy="0.0em">Codelab</text>
                </clipPath>
              </svg>
            </h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
