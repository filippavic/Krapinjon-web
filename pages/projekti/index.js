import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { createClient } from "contentful";
import { Disclosure } from "@headlessui/react";

import ChevronUpIcon from "@heroicons/react/solid/ChevronUpIcon";

import { groupBy } from "../../utils/helperFunctions";

import ProjectCard from "../../components/ProjectCard";
import EventMiniCard from "../../components/EventMiniCard";

import landscape from "../../public/images/krapinjon_landscape_bg.jpg";

import animations from "../../utils/otherAnimations";
import PastEventCard from "../../components/PastEventCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const projects = await client.getEntries({
    content_type: "project",
    select:
      "fields.slug,fields.name,fields.description,fields.thumbnail,fields.link,sys.contentType",
    order: "fields.order",
  });

  const upcomingEvents = await client.getEntries({
    content_type: "event",
    "fields.finished": "false",
    select:
      "fields.name,fields.slug,fields.type,fields.location,fields.startDateTime,fields.endDateTime,fields.allDay,fields.infoLink,fields.thumbnail,fields.finished,sys.contentType",
    order: "fields.startDateTime",
  });

  const pastEvents = await client.getEntries({
    content_type: "event",
    "fields.finished": "true",
    select:
      "fields.name,fields.slug,fields.type,fields.startDateTime,fields.endDateTime,fields.allDay,fields.infoLink,fields.finished,sys.contentType",
    order: "-fields.startDateTime",
  });

  let pastEventsGrouped = groupBy(
    pastEvents.items,
    (event) => event.fields.type
  );

  return {
    props: {
      projects: projects.items,
      upcomingEvents: upcomingEvents.items,
      pastEvents: pastEventsGrouped,
    },
  };
}

export default function Projekti({ projects, upcomingEvents, pastEvents }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      exit={{
        opacity: 0,
        transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
      }}
    >
      <Head>
        <title>Projekti | Krapinjon - udruga mladih iz Krapine</title>

        <meta name="description" content="Udruga Krapinjon..." />
        <meta name="copyright" content="Filip Pavić/Udruga Krapinjon" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krapinjon.hr/projekti" />
        <meta
          property="og:title"
          content="Projekti | Krapinjon - udruga mladih iz Krapine"
        />
        <meta property="og:description" content="Udruga Krapinjon..." />
        {/* <meta property="og:image" content={require('../images/web_preview.jpg')} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://krapinjon.hr/projekti" />
        <meta
          name="twitter:title"
          content="Projekti | Krapinjon - udruga mladih iz Krapine"
        />
        <meta name="twitter:description" content="Udruga Krapinjon..." />
        {/* <meta name="twitter:image" content={require('../images/web_preview.jpg')} /> */}

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

      <div className="self-center mt-0 mb-20 w-11/12 md:w-9/12 lg:w-7/12 max-w-screen-lg">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2 },
          }}
        >
          {projects &&
            projects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
        </motion.div>
      </div>

      <div className="self-center mt-20 mb-20 w-11/12 md:w-9/12 lg:w-7/12 max-w-screen-lg">
        <motion.h1
          className="flex self-center justify-center font-display text-6xl"
          variants={animations.titleAnimation}
          initial="initial"
          animate="animate"
        >
          Uskoro
        </motion.h1>

        <div className="justify-items-center mt-12">
          {upcomingEvents.length !== 0 &&
            upcomingEvents.map((event, index) => {
              return <EventMiniCard key={index} event={event} />;
            })}

          {upcomingEvents.length == 0 && (
            <h2 className="text-center text-lg">
              Trenutno nema nadolazećih događaja
            </h2>
          )}
        </div>
      </div>

      {pastEvents.length !== 0 && (
        <div className="self-center mt-20 mb-20 w-11/12 md:w-9/12 lg:w-7/12 max-w-screen-lg">
          <motion.h1
            className="flex self-center justify-center font-display text-6xl text-center"
            variants={animations.titleAnimation}
            initial="initial"
            animate="animate"
          >
            Organizirali smo
          </motion.h1>

          <motion.div
            className="justify-items-center mt-12 bg-dark-gray rounded-xl p-1"
            variants={animations.titleAnimation}
            initial="initial"
            animate="animate"
          >
            {pastEvents &&
              pastEvents.map((pastEventGroup, index) => {
                return (
                  <div key={index} className="p-2">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex flex-row w-full h-8 rounded-lg justify-between items-center p-2 bg-krapinjon-orange">
                            <span className="text-xs uppercase font-extrabold">
                              {pastEventGroup[0]}
                            </span>
                            <ChevronUpIcon
                              className={`${
                                open ? "" : "transform rotate-180"
                              } w-5 h-5 `}
                            />
                          </Disclosure.Button>

                          <Disclosure.Panel
                            as={motion.div}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            transition={{ duration: 0.15, ease: "easeInOut" }}
                          >
                            {pastEventGroup[1].map((event, index) => {
                              return (
                                <PastEventCard event={event} key={index} />
                              );
                            })}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                );
              })}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
