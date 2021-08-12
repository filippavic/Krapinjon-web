import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimateSharedLayout } from "framer-motion";

import { getCloudinaryThumbLink } from "../utils/helperFunctions";

export default function ProjectCard(props) {
  const { name, slug, thumbnail, description, link } = props.project.fields;

  let thumbLink = getCloudinaryThumbLink(thumbnail[0].original_secure_url);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
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
      <div className="flex flex-col justify-evenly items-center bg-black bg-opacity-40 w-full h-full absolute z-10 rounded-xl hover:bg-opacity-70 transition duration-300 ease-in-out">
        <AnimateSharedLayout type="crossfade">
          {!isHovered && (
            <div>
              <motion.h1
                layoutId="projectTitle"
                className="text-center text-3xl font-extrabold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {name}
              </motion.h1>
            </div>
          )}
          {isHovered && (
            <>
              <motion.h1
                layoutId="projectTitle"
                className="text-center text-3xl font-extrabold text-krapinjon-orange"
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  opacity: 1,
                  scale: 0.8,
                }}
              >
                {name}
              </motion.h1>
              <motion.span
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
              {link && (
                <Link href={link} passHref>
                  <motion.a
                    className="flex items-center justify-center py-1.5 px-4 rounded-full bg-transparent border border-krapinjon-orange hover:border-krapinjon-orange hover:bg-krapinjon-orange text-white text-xs font-semibold cursor-pointer shadow-2xl transition duration-200 ease-in-out"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        ease: "easeInOut",
                        duration: 0.2,
                      },
                    }}
                  >
                    Više...
                  </motion.a>
                </Link>
              )}
            </>
          )}
        </AnimateSharedLayout>
      </div>

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
