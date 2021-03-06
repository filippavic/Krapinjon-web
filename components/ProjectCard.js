import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  getCloudinaryThumbLink,
  getProjectLink,
} from "../utils/helperFunctions";

export default function ProjectCard(props) {
  const { name, slug, thumbnail, description, link } = props.project.fields;

  let eventLink = getProjectLink(link, slug);
  let thumbLink = getCloudinaryThumbLink(thumbnail[0].original_secure_url);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout="true"
      layoutId={"card-" + name}
      className="h-60 rounded-xl relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { ease: "easeInOut", duration: 1 },
      }}
    >
      <motion.div className="flex flex-col justify-evenly items-center bg-black bg-opacity-40 w-full h-full absolute z-10 rounded-xl hover:bg-opacity-70 transition duration-300 ease-in-out">
        {!isHovered && (
          <motion.h1
            layoutId={"h1-" + name}
            className="text-center text-3xl font-extrabold text-white"
          >
            {name}
          </motion.h1>
        )}
        {isHovered && (
          <motion.h1
            layoutId={"h1-" + name}
            className="text-center text-xl font-extrabold text-krapinjon-orange"
          >
            {name}
          </motion.h1>
        )}
        {isHovered && (
          <motion.span
            layoutId={"span-" + name}
            className="text-center text-sm w-9/12"
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.35,
              },
            }}
          >
            {description}
          </motion.span>
        )}
        {isHovered && eventLink && (
          <Link href={eventLink.url} passHref prefetch={false}>
            <motion.a
              layoutId={"link-" + name}
              className="flex items-center justify-center py-1.5 px-4 rounded-full bg-transparent border border-krapinjon-orange hover:border-krapinjon-orange hover:bg-krapinjon-orange text-white text-xs font-semibold cursor-pointer hover:shadow-lg hover:shadow-krapinjon-orange/50 transition duration-200 ease-in-out"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  ease: "easeInOut",
                  duration: 0.2,
                },
              }}
              target={eventLink.external ? "_blank" : undefined}
              rel={eventLink.external ? "noopener noreferrer" : undefined}
            >
              Vi??e...
            </motion.a>
          </Link>
        )}
      </motion.div>
      <motion.div
        className="relative w-full h-full filter grayscale"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1, transition: { duration: 1, ease: "easeInOut" } }}
      >
        <Image
          src={thumbnail[0].original_secure_url}
          placeholder="blur"
          blurDataURL={thumbLink}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
          className="rounded-xl"
          sizes="640px"
        />
      </motion.div>
    </motion.div>
  );
}
