import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dayjs from "dayjs";

import MobileMenu from "./MobileMenu";

import logo from "../public/images/krapinjon_logo.png";

import ChevronUpIcon from "@heroicons/react/solid/ChevronUpIcon";

import animations from "../utils/layoutAnimations";

export default function Layout({ children }) {
  // Header menu
  const [state, setState] = useState({
    initial: false,
    open: false,
    menuName: "IZBORNIK",
  });

  const openCloseMenu = () => {
    if (state.open === true) {
      setState({
        open: false,
        menuName: "IZBORNIK",
      });
    } else if (state.open === false) {
      setState({
        open: true,
        menuName: "ZATVORI",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let now = dayjs().format("YYYY");

  return (
    <div>
      <header className="h-24 w-full fixed top-0 z-100 flex justify-center bg-gradient-to-b from-black to-transparent">
        <motion.div
          className="w-11/12 flex items-center justify-between h-20 px-2"
          variants={animations.headerMainAnimation}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="flex-1"
            variants={animations.headerChildAnimation}
          >
            <motion.div className="group w-16 cursor-pointer">
              <Link href="/" prefetch={false} passHref={true}>
                <a aria-label="Krapinjon" className="fill-current text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 663.62 342.73"
                  >
                    <path d="M361.42,230c-1.92,3.17-10,5.15-18.79,5.15s-18.78-1.76-20.63-5c-5.36-9.22,3.14-3.73,19.91-3.56C357.75,226.77,365,224.06,361.42,230Z" />
                    <path d="M357.38,246.17c-1.29,3.32-7.57,4.71-14.82,4.71s-15.26-1-16.65-4.49c-3.93-9.74,7.36-3.85,16.06-3.61C355.07,243.13,359.78,240,357.38,246.17Z" />
                    <path d="M341.34,258.34c-11.92-.07-14.39-4.06-13.36.38,2,8.58,3.27,23.21,3.27,32.19,0,4.44,3.72,50.74,8.55,50.74A12.16,12.16,0,0,0,352,329.59c0-9-.71-10.23-.71-19.22,0-4.44,1.57-39,3.65-50.9C355.56,255.66,352.6,258.41,341.34,258.34Z" />
                    <path d="M74.32,339.93c-2.24,3.52-15.51,1.29-19,1.29-5.28,0-5.76-3.84-7.52-8-5.43-12.79-10.71-25.59-16-38.22-7.19,11.51-6.87,16.95-6.87,30.7,0,16.63-1.44,15.52-17.91,15.52-11.2,0-5.6-46.38-5.6-54.86,0-6.23-3.68-61.56,3.52-61.56,12.47,0,20-3.52,20,10.23v33.1c3.35-6.39,17.43-43.33,24.46-43.33,2.56-1.28,23.35-1.44,20.31,4.15-4,7-8,14.24-12,21.43-2.88,5.12-11.83,15.67-12,21.59-.32,5,6.23,14.55,8.31,18.87,4.8,11.2,9.76,22.23,14.71,33.26,1.12,2.56,7.68,12.64,5.6,15.83C73.84,340.73,74.8,339.3,74.32,339.93Z" />
                    <path d="M154.11,336.74c2.24,6.07-18.07,3.84-20.94,3.84-5.44,0-8.32-16.16-9.6-19.67-3.2-9.12-6.56-18.23-9.75-27.35-.32-1-6.56-1.44-6.56,1v42.06c0,7-15.35,4-20,4-7,0-3.36-95.63-3.36-107.15,0-4.16-1.12-9,4.48-9,9.12,0,18.23-.32,27.35,0,15,0,28.78,6.55,33.1,21.91,4.16,15.19,1.44,33.9-13.44,42.21C141.64,304.59,147.88,320.59,154.11,336.74ZM107.26,264.3c0,8.31-1.92,9.59,6.56,9.59,12,0,13.91-7.68,13.11-18.39-.8-11.51-10.4-11-19.67-10.87Z" />
                    <path d="M237,327.46c.64,2.24,4,9.6,2.08,12-2.08,2.55-21.91,2.55-22.71-1-4.16-4-.32-18.55-4.8-21.75-1.76-1.12-18.87-1.12-20.47,0-4.64,3.2-.8,17.75-5,21.75-.8,3.51-20.63,3.51-22.7,1-4.16-5.44,7.51-33.43,9-39.18q7.92-30.7,15.83-61.41c.48-2.4,1.12-10.08,3-12,.8-3.52,19.19-3.52,20,0C219.84,260.46,228.47,293.88,237,327.46Zm-35.82-56.93c-1.92,8.8-3.84,17.43-5.76,26.23h11.51Z" />
                    <path d="M303.63,232.63c16.95,16,12,55.65-11.35,63-3,1.12-20.79,1.12-20.79,3.36v39.34c0,4.63-9.12,2.88-11.84,2.88-12.31,0-11.83-1.6-11.83-13V237.11c0-9.91-1.28-13,9.91-13,15.19,0,33.91-2.88,45.9,8.47Zm-13.75,35.82c.8-10.07,2.08-24-11.52-24-8.79-.32-6.87,1.28-6.87,9.59v22.71c0,1.92,17.75.48,18.39-8.32C290,266.21,289.72,270.37,289.88,268.45Z" />
                    <path d="M444.3,334c0,12.79-20.47,10.23-24.47.48q-10.54-25.19-21.11-50.37v40.45c0,15.35,1.12,16.79-15.19,16.79-10.87,0-8.31-5.75-8.31-15V235.51c0-11.83,2.4-10.87,14.55-10.87,11.83,0,13,13.43,17,23,4.64,11.52,9.27,22.87,14.07,34.39v-43.5c0-2.24-1.92-13.91,2.56-13.91,3.36-2.08,14.23,0,18.23,0C447.18,224.64,444.3,323,444.3,334Z" />
                    <path d="M460.27,337.7c-12-6.88-12-9.12-2.24-16,9.6-6.71,7.68-1.27,18.55-1.27,12.63,0,9.6-18.07,9.6-26.23,0-7.52-3.68-69.24,3.35-69.24,10.56,0,19.83-3.68,19.83,8.47v78.2c0,23.83-29.42,37.58-49.09,26.07C456.27,335.46,464.43,340.1,460.27,337.7Z" />
                    <path d="M573.49,231.35c17.11,13.12,10.71,47.34,10.71,66,0,8.63,1.28,19-3,27-9.59,18.07-36.3,21.11-51.81,9.12-17.11-13.11-10.72-47.34-10.72-66.05,0-8.79-1.11-18.87,3-26.86,9.44-18.39,36.3-21.27,51.82-9.28C576.68,233.75,570.45,229,573.49,231.35Zm-31.67,22.39v16.79c0,12.16-3.2,29.11,0,40.78,0,11.51,19.19,11.35,19.19-.16V253.42C561,241.91,541.82,242.23,541.82,253.74Z" />
                    <path d="M662.88,334c0,12.79-20.47,10.23-24.47.48L617.3,284.13v40.45c0,15.35,1.12,16.79-15.19,16.79-10.88,0-8.32-5.75-8.32-15V235.51c0-11.83,2.4-10.87,14.56-10.87,11.83,0,12.95,13.43,16.95,23,4.64,11.52,9.27,22.87,14.07,34.39v-43.5c0-2.24-1.92-13.91,2.56-13.91,3.36-2.08,14.23,0,18.23,0C665.76,224.64,662.88,323,662.88,334Z" />
                    <path
                      className="group-hover:text-krapinjon-orange transition-colors ease-easeAlt2 duration-300"
                      d="M417.79,93.42c-4.38,3.4-13.85,10.72-19.71,11.41a1.56,1.56,0,0,1-1.67-1.24c-2-8.6,1.83-34,17.26-50.18a1.53,1.53,0,0,0-1.42-2.56c-10,2.12-31.53,7.44-39.29,15.6a1.57,1.57,0,0,1-2.66-.27c-6.08-10.4-35-56-80.53-66.1-1.74-.39-2.69.68-2.1,2.36,4.45,12.75,21.07,62.18,16.79,76a.94.94,0,0,1-1.49.43c-4.49-3.64-23.29-18.26-36.3-21.51-2-.49-3,.7-2.35,2.62,3.81,10.49,14.41,44.21,4.78,60.11-17.09,28.23-4.84,86.65,43,94.71a1.65,1.65,0,0,0,.47.05,2.16,2.16,0,0,0,1.62-3.4,95.07,95.07,0,0,0-6.35-7.82c-4.39-5-8.95-10.24-12.54-17.92a54.06,54.06,0,0,1-5.42-23.5,55.2,55.2,0,0,1,6.64-25.17l.07-.13a47.71,47.71,0,0,1,23.26-20.33,51.44,51.44,0,0,1,24.21-3.45,55.73,55.73,0,0,1,23.11,7.42,47.76,47.76,0,0,1,20.18,22.87,49.89,49.89,0,0,1-.11,38.65c-4,9.91-9.29,16.06-14.24,21.82a79.41,79.41,0,0,0-7.14,9.19c-.59.94.1,1.8,1.2,1.8a6.19,6.19,0,0,0,1.3-.1,14.64,14.64,0,0,0,2.13-.59C417.58,198.7,435.83,144,421,94.45A2,2,0,0,0,417.79,93.42Z"
                    />
                    <path d="M334.77,208.22a123.9,123.9,0,0,0,4-25.46c.22-4.64,1.79-15.63-3.36-18.19-1.75-.88-5.26-.21-5.74,2-1,4.65,7.28,8.16,10.65,8.87s10.76,1.75,13.56-1.28c2.39-2.58-.22-4.8-3-3.87-4.89,1.65-3.44,10.59-3.52,14.5-.14,8-.13,15.9-.09,23.85,0,.91,2.91.36,2.9-.78,0-8.4-.05-16.81.13-25.22,0-1.7.06-3.41.16-5.11,0-.84.1-1.67.2-2.5.37-.85.08-1.15-.88-.89-1.27-.7-5.91.1-7.73-.29a14.66,14.66,0,0,1-6.84-3.35c-.8-.72-3.65-3.11-2-3.7s2.29,4.27,2.47,5.5a62.71,62.71,0,0,1,0,12.63,124.88,124.88,0,0,1-3.91,23.61c-.28,1.06,2.64.65,2.9-.35Z" />
                  </svg>
                </a>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-1 justify-end md:justify-between max-w-xs visible pl-14"
            variants={animations.headerAnimation}
          >
            <Link href="/projekti" prefetch={false} passHref>
              <motion.a
                className="hidden md:block cursor-pointer font-display text-base text-white hover:text-krapinjon-orange transition ease-easeAlt2 duration-300"
                variants={animations.headerChildAnimation}
              >
                Projekti
              </motion.a>
            </Link>
            <Link href="/novosti" prefetch={false} passHref>
              <motion.a
                className="hidden md:block cursor-pointer font-display text-base text-white hover:text-krapinjon-orange transition ease-easeAlt2 duration-300"
                variants={animations.headerChildAnimation}
              >
                Novosti
              </motion.a>
            </Link>
            <Link href="/informacije" prefetch={false} passHref>
              <motion.a
                className="hidden md:block cursor-pointer font-display text-base text-white hover:text-krapinjon-orange transition ease-easeAlt2 duration-300"
                variants={animations.headerChildAnimation}
              >
                Informacije
              </motion.a>
            </Link>

            <motion.a
              onClick={openCloseMenu}
              className="block md:hidden cursor-pointer font-display text-base text-white hover:text-krapinjon-orange transition ease-easeAlt2 duration-300"
              variants={animations.headerChildAnimation}
            >
              {state.menuName}
            </motion.a>
          </motion.div>
        </motion.div>
      </header>

      <MobileMenu isVisible={state.open} openCloseMenu={openCloseMenu} />

      {children}

      <footer>
        <div
          variants={animations.footerAnimation}
          className="mx-auto w-9/12 max-w-screen-xl"
        >
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row md:justify-between pt-10 pb-10">
            <div className="flex-none w-full md:w-1/6 max-w-xs self-center md:self-top">
              <Link href="/" prefetch={false}>
                <a>
                  <Image
                    src={logo}
                    layout="responsive"
                    alt="Krapinjon"
                    sizes="384px"
                  />
                </a>
              </Link>
            </div>

            <div className="flex-none w-full md:w-2/6 lg:w-3/6 flex flex-col justify-between items-center mt-5 md:mt-0">
              <h2 className="w-2/3 text-center text-sm mt-3 md:mt-0 md:text-left font-semibold">
                Krapinska ulica 1, 49000 Krapina
              </h2>

              <div className="w-2/3 mt-3 md:mt-0 flex flex-col items-center md:items-start md:justify-items-start">
                <a
                  href="tel:+38591123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto text-white font-normal text-sm hover:text-krapinjon-orange cursor-pointer transition duration-200 ease-in-out"
                >
                  +385 91 123 456
                </a>
                <a
                  href="mailto:info@krapinjon.hr"
                  className="w-auto text-white font-normal text-sm hover:text-krapinjon-orange transition duration-200 ease-in-out"
                >
                  info@krapinjon.hr
                </a>
              </div>
            </div>

            <div className="flex-none w-full md:w-3/6 lg:w-2/6 mt-10 md:mt-0 flex flex-col justify-between self-center">
              <div className="w-full flex flex-row align-middle md:ali justify-evenly md:justify-between mb-10">
                <div className="flex flex-col">
                  <Link href="/" prefetch={false}>
                    <a className="text-white font-normal text-xs hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out">
                      Početna
                    </a>
                  </Link>
                  <Link href="/projekti" prefetch={false}>
                    <a className="text-white font-normal text-xs hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out">
                      Projekti
                    </a>
                  </Link>
                  <Link href="/novosti" prefetch={false}>
                    <a className="text-white font-normal text-xs hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out">
                      Novosti
                    </a>
                  </Link>
                  <Link href="/informacije" prefetch={false}>
                    <a className="text-white font-normal text-xs hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out">
                      Informacije
                    </a>
                  </Link>
                </div>

                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-white font-normal text-xs text-right md:text-left hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-white font-normal text-xs text-right md:text-left hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-white font-normal text-xs text-right md:text-left hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-white font-normal text-xs text-right md:text-left hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out"
                  >
                    Youtube
                  </a>
                </div>

                <div
                  className="hidden md:flex rounded-full h-10 w-10 items-center justify-center border border-krapinjon-orange hover:bg-krapinjon-orange cursor-pointer transition duration-200 ease-in-out"
                  onClick={() => scrollToTop()}
                >
                  <ChevronUpIcon className="h-5 w-5 text-white" />
                </div>
              </div>

              <span className="text-white font-normal text-xs self-center md:self-start">
                &copy; {now}. Udruga Krapinjon
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
