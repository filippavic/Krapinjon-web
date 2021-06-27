import React, { useState, useRef } from "react"
import Head from 'next/head'
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

import ReactCardCarousel from 'react-card-carousel';
import EventCard from "../components/EventCard";
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { ChevronRightIcon } from '@heroicons/react/solid'

import cave from '../public/images/krapinjon_cave_bg.jpg'

import animations from "../utils/landingAnimations"
import styles from '../styles/Home.module.css'

var classNames = require('classnames');

// placeholder events
var events = [
  {
    title: 'Koncert Elona Muska',
    time: '2.8.2021., 20:00',
    image: 'http://localhost:3000/images/event_1.jpg',
    location: 'Parkiralište Keramixa'
  },
  {
    title: 'Predavanje Jovane Jeremić',
    time: '19.8.2021., 18:30',
    image: 'http://localhost:3000/images/event_2.jpg',
    location: 'Podgora Krapinska'
  },
  {
    title: 'Radionica fotografije',
    time: '1.9.2021., 11:00',
    image: 'http://localhost:3000/images/event_3.jpg',
    location: 'Random lokacija'
  }
]


export default function Home() {

  // fire animation switch
  const [isSwitched, setIsSwitched] = useState(false);

  // event carousel ref
  const carouselRef = useRef(null);

  // main title
  const titleLine = "Zapali svoju vatru";

  // fire animation toggle
  const toggleSwitch = () => {
    setIsSwitched(!isSwitched);
  }

  
  var eventControls = [];

  for (var i = 0; i < 3; ++i) {
      eventControls[i] = useAnimation()
  }


  const handleCardChange = (cardIndex) => {
    let currentIndex = carouselRef.current.getCurrentIndex();

    let previousIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;

    if (previousIndex >= eventControls.length) previousIndex = 0;
    if (previousIndex < 0) previousIndex = eventControls.length - 1;

    if (nextIndex >= eventControls.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = eventControls.length - 1;

    eventControls[previousIndex].start("outOfFocus")

    eventControls[nextIndex].start("outOfFocus")

    eventControls[currentIndex].start("inFocus")
  }


  return (
    <motion.div className={styles.container}>
      <Head>
        <title>Krapinjon | Početna</title>

        <meta name="description" content="Udruga Krapinjon..." />
        <meta name="copyright" content="Filip Pavić/Udruga Krapinjon" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krapinjon.hr" />
        <meta property="og:title" content="Krapinjon - udruga mladih iz Krapine" />
        <meta property="og:description" content="Udruga Krapinjon..." />
        {/* <meta property="og:image" content={require('../images/web_preview.jpg')} /> */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://krapinjon.hr" />
        <meta property="twitter:title" content="Krapinjon - udruga mladih iz Krapine" />
        <meta property="twitter:description" content="Udruga Krapinjon..." />
        {/* <meta property="twitter:image" content={require('../images/web_preview.jpg')} /> */}
   
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <motion.div className={styles['landing-content']}>
          <motion.h1 className={styles.title} variants={animations.sentenceAnimation} initial="initial" animate="animate">
            {/* Zapali svoju vatru */}
            {titleLine.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={animations.letterAnimation}>
                  {char}
                </motion.span>
              )
            })}
          </motion.h1>
        </motion.div>

        <motion.div className={styles['landing-animation']} variants={animations.contentAnimation} initial="initial" animate="animate">
          <div className={ classNames(styles['smoke'], isSwitched && styles['switched-smoke']) }>
            <span className={styles['smoke-0']}></span>
            <span className={styles['smoke-1']}></span>
            <span className={styles['smoke-2']}></span>
            <span className={styles['smoke-3']}></span>
            <span className={styles['smoke-4']}></span>
            <span className={styles['smoke-5']}></span>
            <span className={styles['smoke-6']}></span>
            <span className={styles['smoke-7']}></span>
            <span className={styles['smoke-8']}></span>
            <span className={styles['smoke-9']}></span>
          </div>

          <div className={ classNames(styles['fire'], isSwitched && styles['switched-fire']) }>
            <div className={styles['fire-left']}>
              <div className={styles['main-fire']}></div>
              <div className={ classNames(styles['particle-fire'], !isSwitched && styles['particle-off']) }></div>
            </div>
            <div className={styles['fire-main']}>
              <div className={styles['main-fire']}></div>
              <div className={ classNames(styles['particle-fire'], !isSwitched && styles['particle-off']) }></div>
            </div>
            <div className={styles['fire-right']}>
              <div className={styles['main-fire']}></div>
              <div className={ classNames(styles['particle-fire'], !isSwitched && styles['particle-off']) }></div>
            </div>
            <div className={styles['fire-bottom']}>
              <div className={styles['main-fire']}></div>
            </div>
          </div>

        </motion.div>

        <motion.div className={styles['switch-container']} variants={animations.backgroundAnimation} initial="initial" animate="animate">
          <div onClick={toggleSwitch} className={ classNames(styles['switch'], isSwitched && styles['switched']) }>
            <div className={ classNames(styles['switch-circle'], isSwitched && styles['switched-circle']) }></div>
          </div>
        </motion.div>
        
        <motion.div className={styles['landing-background']} variants={animations.backgroundAnimation} initial="initial" animate="animate">
          <motion.div className={styles['cave']}>
            <Image src={cave} layout="fill" objectFit="cover" objectPosition="top" unoptimized="true" alt="Cave at night" />
          </motion.div>
        </motion.div>

      </div>

      <motion.div className={styles['about-content']}>
          <InView threshold={0.75}>
            {({ ref, inView }) => (
              <motion.h1 ref={ref} className={styles['about-title']} variants={animations.elementAnimation} initial="initial" animate={inView ? "animate" : "initial"}>
                Udruga Krapinjon
              </motion.h1>
            )}
          </InView>

          <InView threshold={0.75}>
            {({ ref, inView }) => (
              <motion.p ref={ref} className={styles['about-text']} variants={animations.elementAnimation} initial="initial" animate={inView ? "animate" : "initial"}>
                Aliquam erat volutpat. In bibendum sagittis urna. Donec tincidunt libero sed augue vestibulum sollicitudin. Vestibulum maximus eu mi sit amet ultricies. Nam in dolor sed nibh convallis iaculis eget in nisl.
              </motion.p>
            )}
          </InView>

        </motion.div>

      <motion.div className={styles['event-content']}>
        <InView threshold={0.75}>
          {({ ref, inView }) => (
            <motion.h1 ref={ref} className={styles['about-title']} variants={animations.elementAnimation} initial="initial" animate={inView ? "animate" : "initial"}>
              Uskoro
            </motion.h1>
          )}
        </InView>

        <div className={styles['event-carousel-navigation']}>
          <InView threshold={0.75}>
            {({ ref, inView }) => (
              <motion.div
              ref={ref} variants={animations.elementAnimation} initial="initial" animate={inView ? "animate" : "initial"}
              className="rounded-full h-10 w-10 flex items-center justify-center border border-krapinjon-orange hover:bg-krapinjon-orange cursor-pointer transition duration-200 ease-in-out"
              onClick={() => carouselRef.current.prev()}
              >
                <ChevronLeftIcon className="h-5 w-5 text-white"/>
              </motion.div>
            )}
          </InView>
          
          <InView threshold={0.75}>
            {({ ref, inView }) => (
              <motion.div
              ref={ref} variants={animations.elementAnimation} initial="initial" animate={inView ? "animate" : "initial"}
              className="rounded-full h-10 w-10 flex items-center justify-center border border-krapinjon-orange hover:bg-krapinjon-orange cursor-pointer transition duration-200 ease-in-out"
              onClick={() => carouselRef.current.next()}
              >
                <ChevronRightIcon className="h-5 w-5 text-white"/>
              </motion.div>
            )}
          </InView>
        </div>

        <div className={styles['event-carousel']}>
            
            <ReactCardCarousel autoplay={ false } autoplay_speed={ 5000 } spread="wide" afterChange={(cardIndex) => handleCardChange(cardIndex)} ref={carouselRef}>

              {events.map((event, index) => {
                return (
                  <EventCard key={index} event={event} animate={eventControls[index]} initial={(index == 0) ? "inFocus" : "outOfFocus"}/>
                )
              })}

            </ReactCardCarousel>
        </div>
        

      </motion.div>

    </motion.div>
  )
}
