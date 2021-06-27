import Link from "next/link";

import { motion } from "framer-motion";

import { CalendarIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/outline";

import animations from "../utils/landingAnimations";
import styles from "../styles/Home.module.css";

export default function EventCard(props) {
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
            {props.event.title}
          </motion.h2>
        </div>

        <img src={props.event.image} className={styles["event-image"]} />
      </div>

      <motion.div
        variants={animations.eventDetailsAnimation}
        className="inline-flex items-center mt-5"
      >
        <CalendarIcon className="h-3 w-3 sm:h-5 sm:w-5 text-white mr-1" />
        <span className="text-xs sm:text-md md:text-lg font-semibold">
          {props.event.time}
        </span>
      </motion.div>

      <motion.div
        variants={animations.eventDetailsAnimation}
        className="inline-flex items-center mt-2"
      >
        <LocationMarkerIcon className="h-3 w-3 sm:h-5 sm:w-5 text-white mr-1" />
        <span className="text-xs sm:text-md md:text-lg font-semibold">
          {props.event.location}
        </span>
      </motion.div>

      <Link href="/">
        <motion.a
          variants={animations.eventDetailsAnimation}
          className="flex items-center justify-center py-2 px-5 rounded-full bg-transparent border border-krapinjon-orange hover:bg-krapinjon-orange text-white text-xs font-semibold mt-5 cursor-pointer shadow-2xl transition duration-200 ease-in-out"
        >
          Više...
        </motion.a>
      </Link>
    </motion.div>
  );
}
