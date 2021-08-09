import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { ChevronUpIcon } from "@heroicons/react/solid";

import krapinjonLogo from "../public/images/Krapinjon_logo.png";

import animations from "../utils/layoutAnimations";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  // Header menu
  const [state, setState] = useState({
    initial: false,
    clicked: false,
    menuName: "IZBORNIK",
  });

  const openCloseMenu = () => {
    if (state.clicked === true) {
      setState({
        clicked: false,
        menuName: "IZBORNIK",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: true,
        menuName: "ZATVORI",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <header className={styles.header}>
        <motion.div
          className={styles["inner-header"]}
          variants={animations.headerMainAnimation}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className={styles["header-logo"]}
            variants={animations.headerChildAnimation}
          >
            <motion.div className={styles["logo"]}>
              <Link href="/">
                <a>
                  <Image
                    src={krapinjonLogo}
                    priority={true}
                    layout="responsive"
                    alt="Krapinjon"
                  />
                </a>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles["header-links"]}
            variants={animations.headerAnimation}
          >
            <Link href="/projekti">
              <motion.a
                className={styles["header-link"]}
                variants={animations.headerChildAnimation}
              >
                Projekti
              </motion.a>
            </Link>
            <Link href="/novosti">
              <motion.a
                className={styles["header-link"]}
                variants={animations.headerChildAnimation}
              >
                Novosti
              </motion.a>
            </Link>
            <Link href="/informacije">
              <motion.a
                className={styles["header-link"]}
                variants={animations.headerChildAnimation}
              >
                Informacije
              </motion.a>
            </Link>

            <motion.a
              onClick={openCloseMenu}
              className={styles["header-link"]}
              variants={animations.headerChildAnimation}
            >
              {state.menuName}
            </motion.a>
          </motion.div>

          {/* <motion.div
            className={styles["header-menu"]}
            variants={animations.headerChildAnimation}
          >
            <motion.a
              onClick={openCloseMenu}
              className={styles["header-link"]}
              variants={animations.headerChildAnimation}
            >
              {state.menuName}
            </motion.a>
          </motion.div> */}
        </motion.div>
      </header>

      {children}

      <footer>
        <div
          variants={animations.footerAnimation}
          className="mx-auto w-9/12 max-w-screen-xl"
        >
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row md:justify-between pt-10 pb-10">
            <div className="flex-none w-full md:w-1/6 max-w-xs self-center md:self-top">
              <Link href="/">
                <a>
                  <Image
                    src={krapinjonLogo}
                    layout="responsive"
                    alt="Krapinjon"
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
                  <Link href="/">
                    <a className="text-white font-normal text-xs hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out">
                      Početna
                    </a>
                  </Link>
                  <Link href="/projekti">
                    <a className="text-white font-normal text-xs hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out">
                      Projekti
                    </a>
                  </Link>
                  <Link href="/novosti">
                    <a className="text-white font-normal text-xs hover:text-krapinjon-orange mb-1 transition duration-200 ease-in-out">
                      Novosti
                    </a>
                  </Link>
                  <Link href="/informacije">
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
                &copy; 2021. Udruga Krapinjon
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
