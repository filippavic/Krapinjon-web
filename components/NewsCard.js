import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import animations from "../utils/otherAnimations";

export default function NewsCard(props) {
  return (
    <Link href="/">
      <motion.div
        className="flex flex-col md:flex-row bg-none hover:bg-dark-gray w-full h-72 md:h-40 mb-20 p-3 rounded-xl cursor-pointer transition duration-300 ease-in-out hover:shadow-xl"
        whileHover={{ scale: 1.02 }}
        variants={animations.cardAnimation}
        initial="start"
        animate="finish"
      >
        <div className="w-full h-1/2 md:h-full md:w-5/12 flex flex-row justify-between">
          <motion.span
            className="text-xs md:text-sm font-semibold text-white leading-none"
            variants={animations.elementAnimation}
          >
            {props.article.date}
          </motion.span>
          <motion.div
            className="relative w-8/12 h-full"
            variants={animations.elementAnimation}
          >
            <Image
              src={props.article.image}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt=""
            />
          </motion.div>
        </div>
        <div className="w-full h-1/2 md:h-full md:w-7/12 flex flex-col justify-between">
          <div className="h-max pt-4 pl-0 md:pt-0 md:pl-4">
            <motion.h2
              className="text-right text-sm md:text-base font-extrabold text-white"
              variants={animations.elementAnimation}
            >
              {props.article.title}
            </motion.h2>
          </div>
          <div className="h-max flex flex-row justify-between">
            <div className="w-min flex flex-row md:pl-4 self-end">
              {props.article.tags.map((tag, index) => {
                return (
                  <motion.span
                    key={index}
                    className="text-xxs font-bold text-white mr-2"
                    variants={animations.elementAnimation}
                  >
                    {tag}
                  </motion.span>
                );
              })}
            </div>
            <div className="w-min">
              <Link href="/">
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
