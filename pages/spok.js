import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import SpokPastCard from "../components/SPOK/spokPastCard";

import ChevronDoubleDownIcon from "@heroicons/react/solid/ChevronDoubleDownIcon";
import { CalendarIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import CurrencyEuroIcon from "@heroicons/react/outline/CurrencyEuroIcon";

import spok from "../public/images/spok.jpg";
import animations from "../utils/otherAnimations";

const upcomingQuiz = {
  name: "SPOK - Back to School",
  location: "Mega Bar, Krapina",
  startDateTime: "1.9.2021., 19:00",
  endDateTime: "1.9.2021., 22:00",
  information:
    "Stvarno Predobar Opći Kviz - SPOK - nova je generacija mnogima omiljenog formata pub quiza. Tematski kvizovi, kreativne kategorije, zanimljiva pitanja i pažljivo odabrana glazba osiguravaju zabavu za baš svakog sudionika.",
  price: "50 kn po timu",
  accentColor: "#03fc98",
};

const pastQuizzes = [
  {
    name: "SPOK - Back to School",
    location: "Mega Bar, Krapina",
    startDateTime: "1.9.2021., 19:00",
    endDateTime: "1.9.2021., 22:00",
    information:
      "Stvarno Predobar Opći Kviz - SPOK - nova je generacija mnogima omiljenog formata pub quiza. Tematski kvizovi, kreativne kategorije, zanimljiva pitanja i pažljivo odabrana glazba osiguravaju zabavu za baš svakog sudionika.",
    price: "50 kn po timu",
    accentColor: "#03fc98",
  },
  {
    name: "SPOK - pod zvijezdama",
    location: "Mega Bar, Krapina",
    startDateTime: "6.8.2021., 20:00",
    endDateTime: "6.8.2021., 23:00",
    information:
      "Stvarno Predobar Opći Kviz - SPOK - nova je generacija mnogima omiljenog formata pub quiza. Tematski kvizovi, kreativne kategorije, zanimljiva pitanja i pažljivo odabrana glazba osiguravaju zabavu za baš svakog sudionika.",
    price: "Besplatno",
    accentColor: "#fcba03",
  },
];

export default function SPOK() {
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
          SPOK - Stvarno Predobar Opći Kviz | Krapinjon - udruga mladih iz
          Krapine
        </title>

        <meta name="description" content="Udruga Krapinjon..." />
        <meta name="copyright" content="Filip Pavić/Udruga Krapinjon" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.MAIN_URL + "/SPOK"} />
        <meta
          property="og:title"
          content="SPOK - Stvarno Predobar Opći Kviz | Krapinjon - udruga mladih iz Krapine"
        />
        <meta property="og:description" content="Udruga Krapinjon..." />
        {/* <meta property="og:image" content={thumbnail[0].original_secure_url} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={process.env.MAIN_URL + "/SPOK"} />
        <meta
          name="twitter:title"
          content="SPOK - Stvarno Predobar Opći Kviz | Krapinjon - udruga mladih iz Krapine"
        />
        <meta name="twitter:description" content="Udruga Krapinjon..." />
        {/* <meta name="twitter:image" content={thumbnail[0].original_secure_url} /> */}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="w-11/12 flex flex-col absolute z-30">
          {!upcomingQuiz && (
            <motion.h1
              className="w-7/12 text-5xl sm:text-7xl text-white font-extrabold"
              variants={animations.titleAnimation}
              initial="initial"
              animate="animate"
            >
              Spremamo nova pitanja.
            </motion.h1>
          )}

          {upcomingQuiz && (
            <div>
              <h1
                className="text-5xl sm:text-7xl font-extrabold"
                style={{ color: upcomingQuiz.accentColor }}
              >
                {upcomingQuiz.name}
              </h1>
              <div className="inline-flex items-center mt-4">
                <CalendarIcon
                  className="h-3 w-3 sm:h-7 sm:w-7 mr-1"
                  style={{ color: upcomingQuiz.accentColor }}
                />
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  {upcomingQuiz.startDateTime}
                </h2>
              </div>

              <div className="flex flex-row mt-4">
                <div className="inline-flex items-center mr-4">
                  <LocationMarkerIcon
                    className="h-3 w-3 sm:h-5 sm:w-5 mr-1"
                    style={{ color: upcomingQuiz.accentColor }}
                  />
                  <span className="text-xs sm:text-sm font-semibold">
                    {upcomingQuiz.location}
                  </span>
                </div>

                <div className="inline-flex items-center">
                  <CurrencyEuroIcon
                    className="h-3 w-3 sm:h-5 sm:w-5 mr-1"
                    style={{ color: upcomingQuiz.accentColor }}
                  />
                  <span className="text-xs sm:text-sm font-semibold">
                    {upcomingQuiz.price}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <motion.div className="absolute bottom-10 z-50">
          <ChevronDoubleDownIcon className="h-5 w-5 text-white" />
        </motion.div>

        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black z-20"></div>

        <div className="w-full h-full relative">
          <Image
            src={spok}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
            className="filter grayscale"
          />
        </div>
      </div>

      <div className="w-11/12 md:w-9/12 lg:w-7/12 max-w-screen-lg flex flex-col self-center bg-black mt-20 mb-40">
        <motion.h1 className="font-extrabold text-2xl text-white text-center">
          Što je SPOK?
        </motion.h1>

        <motion.p className="font-normal text-base text-white text-center mt-12">
          Stvarno Predobar Opći Kviz - SPOK - nova je generacija mnogima
          omiljenog formata pub quiza. Tematski kvizovi, kreativne kategorije,
          zanimljiva pitanja i pažljivo odabrana glazba osiguravaju zabavu za
          baš svakog sudionika.
        </motion.p>
      </div>

      {pastQuizzes && pastQuizzes.length > 0 && (
        <div className="self-center mb-20 w-11/12 md:w-9/12 lg:w-7/12 max-w-screen-lg">
          <motion.h1 className="font-extrabold text-2xl text-white text-center">
            Prošli kvizovi
          </motion.h1>

          <div className="justify-items-center mt-12">
            {pastQuizzes.map((quiz, index) => {
              return <SpokPastCard key={index} quiz={quiz} />;
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
}
