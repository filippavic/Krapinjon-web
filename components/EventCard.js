import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dayjs from "dayjs";

import { CalendarIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/outline";

import animations from "../utils/landingAnimations";
import styles from "../styles/Home.module.css";

export default function EventCard(props) {
  const {
    name,
    location,
    thumbnail,
    infoLink,
    startDateTime,
    endDateTime,
    allDay,
    type,
  } = props.event.fields;

  // Blurred thumbnail link
  let linkArr = thumbnail[0].original_secure_url.split("/");
  linkArr.splice(-2, 0, "t_thumb");
  let thumbLink = linkArr.join("/");

  // Date and time manipulation
  let eventDateTime;

  if (allDay) {
    eventDateTime = dayjs(startDateTime).format("DD.MM.YYYY.");

    if (endDateTime) {
      eventDateTime =
        eventDateTime + " - " + dayjs(endDateTime).format("DD.MM.YYYY.");
    }
  } else {
    eventDateTime = dayjs(startDateTime).format("DD.MM.YYYY., HH:mm");

    if (endDateTime) {
      if (eventDateTime.startsWith(dayjs(endDateTime).format("DD.MM.YYYY."))) {
        eventDateTime =
          eventDateTime + " - " + dayjs(endDateTime).format("HH:mm");
      } else {
        eventDateTime =
          eventDateTime +
          " - " +
          dayjs(endDateTime).format("DD.MM.YYYY., HH:mm");
      }
    }
  }

  return (
    <motion.div
      className={styles["event-container"]}
      variants={animations.eventAnimation}
      animate={props.animate}
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

      <Link href={infoLink} prefetch={false}>
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
