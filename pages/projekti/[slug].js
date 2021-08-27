import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import {
  getCloudinaryThumbLink,
  dateTimeToString,
} from "../../utils/helperFunctions";

import CalendarIcon from "@heroicons/react/outline/CalendarIcon";
import LocationMarkerIcon from "@heroicons/react/outline/LocationMarkerIcon";
import CurrencyEuroIcon from "@heroicons/react/outline/CurrencyEuroIcon";
import InformationCircleIcon from "@heroicons/react/outline/InformationCircleIcon";

import landscape from "../../public/images/krapinjon_landscape_bg.jpg";

import animations from "../../utils/otherAnimations";
import textRenderOptions from "../../utils/textRenderOptions";

// Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "event" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "event",
    "fields.slug": params.slug,
  });

  if (!items[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event: items[0] },
  };
}

export default function EventInfo({ event }) {
  // Event data
  const {
    name,
    slug,
    thumbnail,
    type,
    location,
    locationForMaps,
    information,
    startDateTime,
    endDateTime,
    allDay,
    price,
    documents,
  } = event.fields;

  let eventDateTime = dateTimeToString(startDateTime, endDateTime, allDay);
  let thumbLink = getCloudinaryThumbLink(thumbnail[0].original_secure_url);

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [1, 1.3]);

  const [isMapOpen, setIsMapOpen] = useState(false);

  const toggleMap = () => {
    setIsMapOpen(!isMapOpen);
  };

  let mapsLocation = locationForMaps ? locationForMaps : location;

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
          {name +
            " (" +
            eventDateTime +
            ") | Krapinjon - udruga mladih iz Krapine"}
        </title>

        <meta name="description" content="Udruga Krapinjon..." />
        <meta name="copyright" content="Filip Pavić/Udruga Krapinjon" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.MAIN_URL + "/" + slug} />
        <meta
          property="og:title"
          content={
            name +
            " (" +
            eventDateTime +
            ") | Krapinjon - udruga mladih iz Krapine"
          }
        />
        <meta property="og:description" content="Udruga Krapinjon..." />
        <meta property="og:image" content={thumbnail[0].original_secure_url} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={process.env.MAIN_URL + "/" + slug} />
        <meta
          name="twitter:title"
          content={
            name +
            " (" +
            eventDateTime +
            ") | Krapinjon - udruga mladih iz Krapine"
          }
        />
        <meta name="twitter:description" content="Udruga Krapinjon..." />
        <meta name="twitter:image" content={thumbnail[0].original_secure_url} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full">
        <div className="w-full flex justify-center">
          <motion.h1
            className="absolute z-50 flex self-center justify-center font-display text-6xl"
            variants={animations.titleAnimation}
            initial="initial"
            animate="animate"
          >
            Projekti
          </motion.h1>

          <motion.div
            className="w-screen relative"
            style={{ height: "500px" }}
            variants={animations.backgroundAnimation}
            initial="initial"
            animate="animate"
          >
            <Image
              src={landscape}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              unoptimized="true"
              alt=""
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-white self-center mt-0 mb-20 w-11/12 rounded-xl max-w-screen-2xl"
        variants={animations.cardAnimation}
        initial="start"
        animate="finish"
      >
        <motion.div className="flex relative justify-center w-full h-96 overflow-hidden rounded-t-xl">
          <div className="absolute z-50 h-full w-1/2 flex flex-col justify-center items-center">
            <motion.span
              className="text-xs uppercase font-extrabold text-krapinjon-orange"
              variants={animations.elementAnimation}
            >
              {type}
            </motion.span>
            <motion.h1
              className="flex self-center justify-center text-4xl font-bold text-center"
              initial={{ opacity: 0, y: 15, scale: 1.1 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 1,
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              }}
            >
              {name}
            </motion.h1>
          </div>

          <div className="absolute z-20 w-full h-full bg-black bg-opacity-60"></div>

          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.2 }}
            animate={{
              scale: 1,
              transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
            }}
            style={{ scale: y1 }}
          >
            <Image
              src={thumbnail[0].original_secure_url}
              blurDataURL={thumbLink}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt=""
              quality="70"
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row w-full h-auto justify-evenly content-center items-center p-7">
          <motion.div
            variants={animations.elementAnimation}
            className="inline-flex items-center"
          >
            <CalendarIcon className="h-3 w-3 sm:h-5 sm:w-5 text-black mr-1" />
            <span className="text-black text-xs sm:text-sm md:text-base font-semibold">
              {eventDateTime}
            </span>
          </motion.div>

          <motion.div
            variants={animations.elementAnimation}
            className="inline-flex items-center mt-2 md:mt-0"
          >
            <LocationMarkerIcon className="h-3 w-3 sm:h-5 sm:w-5 text-black mr-1" />
            <span className="text-black text-xs sm:text-sm md:text-base font-semibold">
              {location}
            </span>
            <InformationCircleIcon
              className="h-4 w-4 text-light-gray ml-1 cursor-pointer hover:text-krapinjon-orange transition-colors ease-easeAlt2 duration-300"
              onClick={toggleMap}
            />
          </motion.div>

          <motion.div
            variants={animations.elementAnimation}
            className="inline-flex items-center mt-2 md:mt-0"
          >
            <CurrencyEuroIcon className="h-3 w-3 sm:h-5 sm:w-5 text-black mr-1" />
            <span className="text-black text-xs sm:text-sm md:text-base font-semibold">
              {price}
            </span>
          </motion.div>
        </div>

        {isMapOpen && (
          <div className="w-full h-72 bg-white">
            <iframe
              className="w-full h-full"
              loading="lazy"
              src={
                "https://www.google.com/maps/embed/v1/place?key=" +
                process.env.NEXT_PUBLIC_MAPS_API_KEY +
                "&q=" +
                mapsLocation
              }
            />
          </div>
        )}

        {information && (
          <div className="justify-items-center p-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              }}
            >
              {documentToReactComponents(information, textRenderOptions)}
            </motion.div>
          </div>
        )}
        {documents !== undefined ? (
          <motion.div
            className="p-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.9],
              },
            }}
          >
            <span className="text-gray-400 font-semibold">Prilozi</span>
            <div className="mt-5">
              {documents.map((document, index) => {
                return (
                  <a
                    className="text-krapinjon-orange font-semibold"
                    href={"https:" + document.fields.file.url}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`${document.fields.title} (.${document.fields.file.fileName
                      .split(".")
                      .pop()})`}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </motion.div>
    </motion.div>
  );
}
