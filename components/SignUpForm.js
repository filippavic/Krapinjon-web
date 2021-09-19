import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import animations from "../utils/layoutAnimations";

export default function SignUpForm({ isVisible, openCloseSignUpForm, name }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="flex w-full h-full bg-black fixed z-75 bg-opacity-70 items-center place-content-center"
          exit={{ opacity: 0 }}
        >
          <motion.div className="flex w-4/5 max-w-2xl bg-white justify-center items-center rounded-xl">
            <div className="flex flex-col text-center justify-evenly p-7 w-full">
              <div className="flex flex-col justify-center items-center">
                <motion.span className="text-xs uppercase font-extrabold text-krapinjon-orange">
                  Prijava
                </motion.span>
                <motion.h1 className="flex self-center justify-center text-lg font-bold text-center text-krapinjon-orange">
                  {name}
                </motion.h1>
              </div>
              <div className="flex flex-col pt-7 w-full"></div>

              <div className="flex flex-row justify-evenly">
                <motion.button
                  className="flex items-center justify-center py-2 px-5 rounded-full bg-transparent border border-light-gray hover:bg-light-gray text-light-gray hover:text-white text-xs font-semibold mt-5 cursor-pointer shadow-2xl transition duration-200 ease-in-out"
                  onClick={openCloseSignUpForm}
                >
                  Odustani
                </motion.button>
                <motion.button className="flex items-center justify-center py-2 px-5 rounded-full bg-transparent border border-krapinjon-orange hover:bg-krapinjon-orange text-krapinjon-orange hover:text-white text-xs font-semibold mt-5 cursor-pointer shadow-2xl transition duration-200 ease-in-out">
                  Prijavi se
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
