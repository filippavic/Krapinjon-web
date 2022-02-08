import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import animations from "../utils/otherAnimations";

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      exit={{
        opacity: 0,
        transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
      }}
    >
      <Head>
        <title>
          Stranica ne postoji | Krapinjon - udruga mladih iz Krapine
        </title>

        <meta name="description" content="Udruga Krapinjon..." />
        <meta name="copyright" content="Filip Pavić/Udruga Krapinjon" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.krapinjon.hr/404"} />
        <meta
          property="og:title"
          content="Stranica ne postoji | Krapinjon - udruga mladih iz Krapine"
        />
        <meta property="og:description" content="Udruga Krapinjon..." />
        {/* <meta property="og:image" content={thumbnail[0].original_secure_url} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={"https://www.krapinjon.hr/404"} />
        <meta
          name="twitter:title"
          content="Stranica ne postoji | Krapinjon - udruga mladih iz Krapine"
        />
        <meta name="twitter:description" content="Udruga Krapinjon..." />
        {/* <meta name="twitter:image" content={thumbnail[0].original_secure_url} /> */}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen flex flex-col justify-evenly content-center">
        <div className="w-full flex flex-col items-center">
          <motion.h1
            className="font-display text-5xl sm:text-6xl text-krapinjon-orange text-opacity-30"
            variants={animations.titleAnimation}
            initial="initial"
            animate="animate"
          >
            404
          </motion.h1>

          <motion.h2
            className="font-extrabold text-base sm:text-lg md:text-2xl mt-7 text-krapinjon-orange text-center"
            variants={animations.titleAnimation}
            initial="initial"
            animate="animate"
          >
            Izgleda da ova stranica ne postoji ...
          </motion.h2>
        </div>

        <div className="w-full flex flex-col items-center">
          <motion.h2
            className="font-normal text-base sm:text-lg"
            variants={animations.titleAnimation}
            initial="initial"
            animate="animate"
          >
            Ali zato postoje ove:
          </motion.h2>

          <motion.div className="flex flex-col md:flex-row max-w-xs w-1/2 justify-evenly items-center mt-7">
            <Link href="/" prefetch={false} passHref>
              <motion.a
                className="cursor-pointer font-display text-base text-white hover:text-krapinjon-orange transition ease-easeAlt2 duration-300"
                initial="initial"
                animate="animate"
                variants={animations.titleAnimation}
              >
                Naslovna
              </motion.a>
            </Link>
            <Link href="/projekti" prefetch={false} passHref>
              <motion.a
                className="mt-2 md:mt-0 cursor-pointer font-display text-base text-white hover:text-krapinjon-orange transition ease-easeAlt2 duration-300"
                initial="initial"
                animate="animate"
                variants={animations.titleAnimation}
              >
                Projekti
              </motion.a>
            </Link>
            <Link href="/novosti" prefetch={false} passHref>
              <motion.a
                className="mt-2 md:mt-0 cursor-pointer font-display text-base text-white hover:text-krapinjon-orange transition ease-easeAlt2 duration-300"
                initial="initial"
                animate="animate"
                variants={animations.titleAnimation}
              >
                Novosti
              </motion.a>
            </Link>
            <Link href="/informacije" prefetch={false} passHref>
              <motion.a
                initial="initial"
                animate="animate"
                className="mt-2 md:mt-0 cursor-pointer font-display text-base text-white hover:text-krapinjon-orange transition ease-easeAlt2 duration-300"
                variants={animations.titleAnimation}
              >
                Informacije
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
