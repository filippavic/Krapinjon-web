import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import { CalendarIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/outline";

import {
  dateTimeToString,
  getCloudinaryThumbLink,
  getEventLink,
} from "../utils/helperFunctions";

import animations from "../utils/landingAnimations";

export default function EventCard(props) {
  // Animation variable
  const anim = useAnimation();

  const {
    name,
    slug,
    location,
    thumbnail,
    infoLink,
    startDateTime,
    endDateTime,
    allDay,
    type,
  } = props.event.fields;

  // Blurred thumbnail link
  let thumbLink = getCloudinaryThumbLink(thumbnail[0].original_secure_url);

  // Date and time manipulation
  let eventDateTime = dateTimeToString(startDateTime, endDateTime, allDay);

  // Info link
  let link = getEventLink(infoLink, slug);

  // Animate card when its state changes
  useEffect(() => {
    anim.start(props.eventState);
  }, [props.eventState]);

  return (
    <motion.div
      className="relative flex flex-col items-center"
      variants={animations.eventAnimation}
      animate={anim}
      initial={props.initial}
    >
      <div className="w-s-9/20 md:w-s-1/2 max-w-xl h-80 md:h-100 rounded-2xl overflow-hidden">
        <div className="absolute w-s-9/20 md:w-s-1/2 max-w-xl h-80 md:h-100 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <motion.h2
            variants={animations.eventDetailsAnimation}
            className="text-lg md:text-2xl lg:text-4xl font-extrabold text-center ml-3 mr-3"
          >
            {name}
          </motion.h2>
        </div>

        <div className="w-full h-full relative">
          <Image
            src={thumbnail[0].original_secure_url}
            placeholder="blur"
            blurDataURL={thumbLink}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
            className="rounded-2xl overflow-hidden"
            sizes="(max-width: 512px) 256px,(max-width: 768px) 384px,640px"
          />
        </div>
      </div>

      <motion.div
        variants={animations.eventDetailsAnimation}
        className="inline-flex items-center mt-5"
      >
        <CalendarIcon className="h-3 w-3 sm:h-5 sm:w-5 text-white mr-1" />
        <span className="text-xs sm:text-base md:text-lg font-semibold w-max">
          {eventDateTime}
        </span>
      </motion.div>

      <motion.div
        variants={animations.eventDetailsAnimation}
        className="inline-flex items-center mt-2"
      >
        <LocationMarkerIcon className="h-3 w-3 sm:h-5 sm:w-5 text-white mr-1" />
        <span className="text-xs sm:text-base md:text-lg font-semibold w-max">
          {location}
        </span>
      </motion.div>

      <Link href={link.url} prefetch={false} passHref>
        <motion.a
          variants={animations.eventButtonAnimation}
          className="flex items-center justify-center py-2 px-5 rounded-full bg-transparent border border-krapinjon-orange hover:bg-krapinjon-orange text-white text-xs font-semibold mt-5 cursor-pointer shadow-2xl transition duration-200 ease-in-out"
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
        >
          Više...
        </motion.a>
      </Link>
    </motion.div>
  );
}
