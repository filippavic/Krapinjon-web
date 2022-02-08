import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useWindowWidth } from "@react-hook/window-size";
import { createClient } from "contentful";

import { Switch } from "@headlessui/react";
import ReactCardCarousel from "react-card-carousel";
import EventCard from "../components/EventCard";
import ChevronLeftIcon from "@heroicons/react/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/solid/ChevronRightIcon";

import cave from "../public/images/krapinjon_cave_bg.jpg";

import animations from "../utils/landingAnimations";
import styles from "../styles/Home.module.css";

var classNames = require("classnames");

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "event",
    "fields.finished": "false",
    select:
      "fields.name,fields.slug,fields.type,fields.location,fields.startDateTime,fields.endDateTime,fields.allDay,fields.infoLink,fields.thumbnail,fields.finished,sys.contentType",
    order: "fields.startDateTime",
  });

  return {
    props: {
      events: res.items,
    },
  };
}

export default function Home({ events }) {
  const windowWidth = useWindowWidth();

  // fire animation switch
  const [isSwitched, setIsSwitched] = useState(false);

  // event carousel ref
  const carouselRef = useRef(null);

  // main title
  const titleLine = "Zapali svoju vatru";

  // fire animation toggle
  const toggleSwitch = () => {
    setIsSwitched(!isSwitched);
  };

  // Controlling event cards
  var eventState = [];

  for (var i = 0; i < events.length; ++i) {
    if (i == 0) eventState[i] = "inFocus";
    else {
      eventState[i] = "outOfFocus";
    }
  }

  const [eventStates, setEventStates] = useState(eventState);

  const handleCardChange = (cardIndex) => {
    let currentIndex = carouselRef.current.getCurrentIndex();

    let previousIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;

    if (previousIndex >= eventStates.length) previousIndex = 0;
    if (previousIndex < 0) previousIndex = eventStates.length - 1;

    if (nextIndex >= eventStates.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = eventStates.length - 1;

    let items = [...eventStates];
    items[previousIndex] = "outOfFocus";
    items[nextIndex] = "outOfFocus";
    items[currentIndex] = "inFocus";

    setEventStates(items);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center"
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] },
      }}
    >
      <Head>
        <title>Krapinjon - udruga mladih iz Krapine</title>

        <meta name="description" content="Udruga Krapinjon..." />
        <meta name="copyright" content="Filip Pavić/Udruga Krapinjon" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.krapinjon.hr"} />
        <meta
          property="og:title"
          content="Krapinjon - udruga mladih iz Krapine"
        />
        <meta property="og:description" content="Udruga Krapinjon..." />
        {/* <meta property="og:image" content={require('../images/web_preview.jpg')} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={"https://www.krapinjon.hr"} />
        <meta
          name="twitter:title"
          content="Krapinjon - udruga mladih iz Krapine"
        />
        <meta name="twitter:description" content="Udruga Krapinjon..." />
        {/* <meta name="twitter:image" content={require('../images/web_preview.jpg')} /> */}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen flex justify-center items-center">
        <motion.div className="w-full h-full absolute flex justify-center items-center z-20">
          <motion.h1
            className="font-display text-6xl text-center"
            variants={animations.sentenceAnimation}
            initial="initial"
            animate="animate"
          >
            {/* Zapali svoju vatru */}
            {titleLine.split("").map((char, index) => {
              return (
                <motion.span
                  key={char + "-" + index}
                  variants={animations.letterAnimation}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
        </motion.div>

        <motion.div
          className="z-40"
          variants={animations.contentAnimation}
          initial="initial"
          animate="animate"
        >
          <div
            className={classNames(
              styles["smoke"],
              isSwitched && styles["switched-smoke"]
            )}
          >
            <span className={styles["smoke-0"]}></span>
            <span className={styles["smoke-1"]}></span>
            <span className={styles["smoke-2"]}></span>
            <span className={styles["smoke-3"]}></span>
            <span className={styles["smoke-4"]}></span>
            <span className={styles["smoke-5"]}></span>
            <span className={styles["smoke-6"]}></span>
            <span className={styles["smoke-7"]}></span>
            <span className={styles["smoke-8"]}></span>
            <span className={styles["smoke-9"]}></span>
          </div>

          <div
            className={classNames(
              styles["fire"],
              isSwitched && styles["switched-fire"]
            )}
          >
            <div className={styles["fire-left"]}>
              <div className={styles["main-fire"]}></div>
              <div
                className={classNames(
                  styles["particle-fire"],
                  !isSwitched && styles["particle-off"]
                )}
              ></div>
            </div>
            <div className={styles["fire-main"]}>
              <div className={styles["main-fire"]}></div>
              <div
                className={classNames(
                  styles["particle-fire"],
                  !isSwitched && styles["particle-off"]
                )}
              ></div>
            </div>
            <div className={styles["fire-right"]}>
              <div className={styles["main-fire"]}></div>
              <div
                className={classNames(
                  styles["particle-fire"],
                  !isSwitched && styles["particle-off"]
                )}
              ></div>
            </div>
            <div className={styles["fire-bottom"]}>
              <div className={styles["main-fire"]}></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 z-50"
          variants={animations.backgroundAnimation}
          initial="initial"
          animate="animate"
        >
          <Switch
            checked={isSwitched}
            onChange={toggleSwitch}
            className={`${isSwitched ? "bg-krapinjon-orange" : "bg-transparent"}
            z-75 relative inline-block h-6 w-16 rounded-full cursor-pointer border-2 border-medium-gray`}
          >
            <span className="sr-only">Zapali vatru</span>
            <span
              aria-hidden="true"
              className={`${isSwitched ? "translate-x-5" : "-translate-x-5"}
                pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-lg transform ring-0 transition ease-easeAlt duration-500`}
            />
          </Switch>
        </motion.div>

        <motion.div
          className="w-full h-full overflow-x-hidden"
          variants={animations.backgroundAnimation}
          initial="initial"
          animate="animate"
        >
          <motion.div>
            <Image
              src={cave}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              unoptimized="true"
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="w-full flex flex-col items-center mt-20">
        <InView threshold={0.75}>
          {({ ref, inView }) => (
            <motion.h1
              ref={ref}
              className="font-display text-6xl text-krapinjon-orange text-center w-min"
              variants={animations.elementAnimation}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              Udruga Krapinjon
            </motion.h1>
          )}
        </InView>

        <InView threshold={0.75}>
          {({ ref, inView }) => (
            <motion.p
              ref={ref}
              className="w-1/2 font-normal text-base text-white text-center mt-12"
              variants={animations.elementAnimation}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              Aliquam erat volutpat. In bibendum sagittis urna. Donec tincidunt
              libero sed augue vestibulum sollicitudin. Vestibulum maximus eu mi
              sit amet ultricies. Nam in dolor sed nibh convallis iaculis eget
              in nisl.
            </motion.p>
          )}
        </InView>
      </motion.div>

      <motion.div className="w-full flex flex-col mt-36 mb-12 md:mb-36 content-center items-center">
        <InView threshold={0.75}>
          {({ ref, inView }) => (
            <motion.h1
              ref={ref}
              className="font-display text-6xl text-krapinjon-orange text-center w-min"
              variants={animations.elementAnimation}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            >
              Organiziramo
            </motion.h1>
          )}
        </InView>

        {events && events.length == 0 && (
          <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.h2
                className="font-normal text-base text-white text-center mt-12 mb-12"
                ref={ref}
                variants={animations.elementAnimation}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                Trenutno nema nadolazećih događaja. Provjeri opet uskoro!
              </motion.h2>
            )}
          </InView>
        )}

        {events && events.length !== 0 && (
          <InView threshold={0.3}>
            {({ ref, inView }) => (
              <motion.div
                className="flex relative h-110 md:h-120 mt-5 md:mt-24 w-11/12 items-center justify-between max-w-6xl"
                ref={ref}
                variants={animations.elementAnimation}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {events.length > 1 && (
                  <motion.div
                    variants={animations.elementAnimation}
                    className="rounded-full h-10 w-10 z-50 flex items-center justify-center border border-krapinjon-orange hover:bg-krapinjon-orange cursor-pointer transition duration-200 ease-in-out"
                    onClick={() => carouselRef.current.prev()}
                  >
                    <ChevronLeftIcon className="h-5 w-5 text-white" />
                  </motion.div>
                )}

                <div className="relative h-full w-3/5 md:w-5/6 clear-both">
                  <ReactCardCarousel
                    autoplay={false}
                    autoplay_speed={5000}
                    spread={
                      windowWidth > 768
                        ? "medium"
                        : windowWidth > 1280
                        ? "wide"
                        : "narrow"
                    }
                    afterChange={(cardIndex) => handleCardChange(cardIndex)}
                    ref={carouselRef}
                  >
                    {events.map((event, index) => {
                      return (
                        <EventCard
                          key={index}
                          event={event}
                          eventState={eventStates[index]}
                          initial={index == 0 ? "inFocus" : "outOfFocus"}
                        />
                      );
                    })}
                  </ReactCardCarousel>
                </div>

                {events.length > 1 && (
                  <motion.div
                    variants={animations.elementAnimation}
                    className="rounded-full h-10 w-10 z-50 flex items-center justify-center border border-krapinjon-orange hover:bg-krapinjon-orange cursor-pointer transition duration-200 ease-in-out"
                    onClick={() => carouselRef.current.next()}
                  >
                    <ChevronRightIcon className="h-5 w-5 text-white" />
                  </motion.div>
                )}
              </motion.div>
            )}
          </InView>
        )}
      </motion.div>
    </motion.div>
  );
}
