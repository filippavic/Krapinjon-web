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
import styles from "../styles/Home.module.css";

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
      className={styles["event-container"]}
      variants={animations.eventAnimation}
      animate={anim}
      initial={props.initial}
    >
      <div className={styles["event-card"]}>
        <div className={styles["event-card-title-container"]}>
          <motion.h2
            variants={animations.eventDetailsAnimation}
            className="text-lg md:text-2xl lg:text-4xl font-extrabold text-center ml-3 mr-3"
          >
            {name}
          </motion.h2>
        </div>

        <div className={styles["event-image-container"]}>
          <Image
            src={thumbnail[0].original_secure_url}
            placeholder="blur"
            blurDataURL={thumbLink}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
            className={styles["event-image"]}
            sizes="(max-width: 512px) 256px,(max-width: 768px) 384px,640px"
          />
        </div>
      </div>

      <motion.div
        variants={animations.eventDetailsAnimation}
        className="inline-flex items-center mt-5"
      >
        <CalendarIcon className="h-3 w-3 sm:h-5 sm:w-5 text-white mr-1" />
        <span className="text-xs sm:text-base md:text-lg font-semibold">
          {eventDateTime}
        </span>
      </motion.div>

      <motion.div
        variants={animations.eventDetailsAnimation}
        className="inline-flex items-center mt-2"
      >
        <LocationMarkerIcon className="h-3 w-3 sm:h-5 sm:w-5 text-white mr-1" />
        <span className="text-xs sm:text-base md:text-lg font-semibold">
          {location}
        </span>
      </motion.div>

      <Link href={link} prefetch={false} passHref>
        <motion.a
          variants={animations.eventButtonAnimation}
          className="flex items-center justify-center py-2 px-5 rounded-full bg-transparent border border-krapinjon-orange hover:bg-krapinjon-orange text-white text-xs font-semibold mt-5 cursor-pointer shadow-2xl transition duration-200 ease-in-out"
        >
          Više...
        </motion.a>
      </Link>
    </motion.div>
  );
}
