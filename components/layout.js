import React, { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";

import krapinjonLogo from '../public/images/krapinjon_logo_potential.png'

import animations from "../utils/layoutAnimations"
import styles from "../styles/Layout.module.css"


export default function Layout({ children }) {

    // Header menu
    const [state, setState] = useState({
        initial: false,
        clicked: false,
        menuName: "IZBORNIK"
    })

    const openCloseMenu = () => {
        if (state.clicked === true) {
            setState({
                clicked: false,
                menuName: "IZBORNIK"
            })
        }
        else if (state.clicked === false) {
            setState({
                clicked: true,
                menuName: "ZATVORI"
            })
        }
    }


    return (
        <div>
            <header className={styles.header}>
                <motion.div className={styles['inner-header']}
                variants={animations.headerMainAnimation} initial="initial" animate="animate"
                >

                    <motion.div className={styles['header-logo']} variants={animations.headerChildAnimation}>
                        <motion.div className={styles['logo']} whileHover={{ scale: 1.05 }}>
                        <Link href="/">
                            <a>
                                <Image src={krapinjonLogo} unoptimized="true" alt="Krapinjon" />
                            </a>
                        </Link> 
                        </motion.div>    
                    </motion.div>

                    <motion.div className={styles['header-links']} variants={animations.headerAnimation}>
                        <Link href="/projekti">
                            <motion.a className={styles['header-link']} variants={animations.headerChildAnimation}>Projekti</motion.a>
                        </Link>
                        <Link href="/novosti">
                            <motion.a className={styles['header-link']} variants={animations.headerChildAnimation}>Novosti</motion.a>
                        </Link>
                        <Link href="/informacije">
                            <motion.a className={styles['header-link']} variants={animations.headerChildAnimation}>Informacije</motion.a>
                        </Link>
                    </motion.div>

                    <motion.div className={styles['header-menu']} variants={animations.headerChildAnimation}>
                        <motion.a onClick={openCloseMenu} className={styles['header-link']} variants={animations.headerChildAnimation}>{state.menuName}</motion.a>
                    </motion.div>
                </motion.div>
            </header>


            {children}

            <footer>
                <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row md:justify-between pt-10 pb-10">

                        <div className="flex-none w-1/6 self-center">
                            <Link href="/">
                                <a>
                                    <Image src={krapinjonLogo} alt="Krapinjon" />
                                </a>
                            </Link> 
                        </div>

                        <div className="flex-none w-full md:w-2/6 flex flex-col justify-between items-center">
                            <h2 className="w-2/3 text-center mt-3 md:mt-0 md:text-left font-semibold text-lg">
                                Krapinska ulica 1, 49000 Krapina
                            </h2>

                            <div className="w-2/3 mt-3 md:mt-0 flex flex-col items-center md:items-start md:justify-items-start">
                                <a href="tel:+38591123456" target="_blank" rel="noopener noreferrer" className="w-auto text-white font-normal text-md hover:text-krapinjon-orange cursor-pointer">+385 91 123 456</a>
                                <a href="mailto:info@krapinjon.hr" className="w-auto text-white font-normal text-md hover:text-krapinjon-orange">info@krapinjon.hr</a>
                            </div>
                        </div>

                        <div className="flex-none w-3/6 mt-5 md:mt-0 flex flex-col justify-between self-center">
                            <div className="w-full md:w-1/2 flex flex-row align-middle md:ali justify-between mb-10">
                                <div className="flex flex-col">
                                    <Link href="/">
                                        <a className="text-white font-normal text-sm hover:text-krapinjon-orange mb-1">Početna</a>
                                    </Link>
                                    <Link href="/projekti">
                                        <a className="text-white font-normal text-sm hover:text-krapinjon-orange mb-1">Projekti</a>
                                    </Link>
                                    <Link href="/novosti">
                                        <a className="text-white font-normal text-sm hover:text-krapinjon-orange mb-1">Novosti</a>
                                    </Link>
                                    <Link href="/informacije">
                                        <a className="text-white font-normal text-sm hover:text-krapinjon-orange mb-1">Informacije</a>
                                    </Link>
                                </div>

                                <div className="flex flex-col">
                                    <a href="#" className="text-white font-normal text-sm text-right md:text-left hover:text-krapinjon-orange mb-1">Facebook</a>
                                    <a href="#" className="text-white font-normal text-sm text-right md:text-left hover:text-krapinjon-orange mb-1">Instagram</a>
                                    <a href="#" className="text-white font-normal text-sm text-right md:text-left hover:text-krapinjon-orange mb-1">Twitter</a>
                                    <a href="#" className="text-white font-normal text-sm text-right md:text-left hover:text-krapinjon-orange mb-1">Youtube</a>
                                </div>
                            </div>

                            <span className="text-white font-normal text-sm self-center md:self-start">&copy; 2021. Udruga Krapinjon</span>
                        </div>

                        
                    </div>
                </div>
            </footer>
        </div>
    )
}