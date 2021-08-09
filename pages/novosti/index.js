import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { createClient } from "contentful";

import NewsCard from "../../components/NewsCard";

import landscape from "../../public/images/krapinjon_landscape_bg.jpg";

import animations from "../../utils/otherAnimations";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "news",
    select:
      "fields.slug,fields.title,fields.tags,fields.thumbnail,sys.contentType,sys.createdAt",
  });

  return {
    props: {
      news: res.items,
    },
  };
}

export default function Novosti({ news }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      exit={{
        opacity: 0,
        transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
      }}
    >
      <Head>
        <title>Novosti | Krapinjon - udruga mladih iz Krapine</title>

        <meta name="description" content="Udruga Krapinjon..." />
        <meta name="copyright" content="Filip Pavić/Udruga Krapinjon" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krapinjon.hr" />
        <meta
          property="og:title"
          content="Krapinjon - udruga mladih iz Krapine"
        />
        <meta property="og:description" content="Udruga Krapinjon..." />
        {/* <meta property="og:image" content={require('../images/web_preview.jpg')} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://krapinjon.hr" />
        <meta
          name="twitter:title"
          content="Krapinjon - udruga mladih iz Krapine"
        />
        <meta name="twitter:description" content="Udruga Krapinjon..." />
        {/* <meta name="twitter:image" content={require('../images/web_preview.jpg')} /> */}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full">
        <div className="w-full flex justify-center">
          <motion.h1
            className="absolute z-50 flex self-center justify-center font-display text-6xl"
            variants={animations.titleAnimation}
            initial="initial"
            animate="animate"
          >
            Novosti
          </motion.h1>

          <motion.div
            className="w-screen relative"
            style={{ height: "500px" }}
            variants={animations.backgroundAnimation}
            initial="initial"
            animate="animate"
          >
            <Image
              src={landscape}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              unoptimized="true"
              alt=""
            />
          </motion.div>
        </div>
      </div>

      <div className="self-center mt-0 mb-20 w-11/12 md:w-9/12 lg:w-7/12 max-w-screen-lg">
        <div className="justify-items-center">
          {news.map((article, index) => {
            return <NewsCard key={index} article={article} index={index} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}
