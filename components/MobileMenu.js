import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import animations from "../utils/layoutAnimations";

export default function MobileMenu({ isVisible, openCloseMenu }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex w-screen h-screen fixed bg-black z-75 justify-center items-center"
          variants={animations.headerAnimation}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col w-4/5 h-3/5 text-center justify-evenly">
            <Link href="/projekti" prefetch={false} passHref>
              <motion.a
                className="font-display text-lg hover:text-krapinjon-orange"
                variants={animations.headerChildAnimation}
                onClick={openCloseMenu}
              >
                Projekti
              </motion.a>
            </Link>
            <Link href="/novosti" prefetch={false} passHref>
              <motion.a
                className="font-display text-lg hover:text-krapinjon-orange"
                variants={animations.headerChildAnimation}
                onClick={openCloseMenu}
              >
                Novosti
              </motion.a>
            </Link>
            <Link href="/informacije" prefetch={false} passHref>
              <motion.a
                className="font-display text-lg hover:text-krapinjon-orange"
                variants={animations.headerChildAnimation}
                onClick={openCloseMenu}
              >
                Informacije
              </motion.a>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
