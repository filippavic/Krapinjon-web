import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { CalendarIcon } from "@heroicons/react/outline";
import { LocationMarkerIcon } from "@heroicons/react/outline";

import { dateTimeToString } from "../utils/helperFunctions";

import animations from "../utils/otherAnimations";

export default function EventMiniCard(props) {
  const {
    name,
    type,
    location,
    startDateTime,
    endDateTime,
    allDay,
    infoLink,
    thumbnail,
  } = props.event.fields;

  let eventDateTime = dateTimeToString(startDateTime, endDateTime, allDay);

  return (
    <Link href={"/"} passHref>
      <motion.div
        className="relative flex flex-col md:flex-row hover:bg-dark-gray w-full h-60 md:h-40 mb-20 p-3 rounded-xl cursor-pointer transition duration-300 ease-in-out hover:shadow-xl"
        variants={animations.cardAnimation}
        initial="start"
        animate="finish"
        whileHover="hover"
        whileTap="tap"
      >
        <div className="w-full h-2/3 md:h-full md:w-1/2 flex flex-col justify-around items-center">
          <div className="flex flex-col justify-center absolute z-10 items-center">
            <motion.span
              className="text-xxs uppercase font-extrabold text-krapinjon-orange"
              variants={animations.elementAnimation}
            >
              {type}
            </motion.span>
            <motion.h2
              className="text-lg md:text-xl lg:text-xl font-extrabold text-center w-10/12"
              variants={animations.elementAnimation}
            >
              {name}
            </motion.h2>
          </div>
          <motion.div
            className="relative w-full h-full"
            variants={animations.elementAnimation}
          >
            <Image
              src={thumbnail[0].original_secure_url}
              layout="fill"
              sizes="384px"
              objectFit="cover"
              objectPosition="center"
              alt=""
              className="rounded-lg opacity-40"
            />
          </motion.div>
        </div>

        <div className="w-full h-1/3 md:h-full md:w-1/2 flex flex-row md:flex-col justify-between items-end">
          <div className="flex flex-col h-max pt-4 pl-0 md:pt-0 md:pl-4 items-start md:items-end">
            <motion.div
              variants={animations.elementAnimation}
              className="inline-flex items-center"
            >
              <CalendarIcon className="h-3 w-3 sm:h-5 sm:w-5 text-white mr-1" />
              <span className="text-xs sm:text-sm md:text-base font-semibold">
                {eventDateTime}
              </span>
            </motion.div>

            <motion.div
              variants={animations.elementAnimation}
              className="inline-flex items-center mt-2"
            >
              <LocationMarkerIcon className="h-3 w-3 sm:h-5 sm:w-5 text-white mr-1" />
              <span className="text-xs sm:text-sm md:text-base font-semibold">
                {location}
              </span>
            </motion.div>
          </div>
          <div className="h-max flex flex-row justify-between">
            <div className="w-min">
              <Link href={"/"} passHref>
                <motion.a
                  className="flex items-center justify-center py-1.5 px-4 rounded-full bg-transparent border border-krapinjon-orange hover:border-krapinjon-orange hover:bg-krapinjon-orange text-white text-xs font-semibold cursor-pointer shadow-2xl transition duration-200 ease-in-out"
                  variants={animations.elementAnimation}
                >
                  Više...
                </motion.a>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
