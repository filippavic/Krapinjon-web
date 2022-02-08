import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import ContentfulHelper from "../../../utils/contentfulHelper";

import NewsCard from "../../../components/NewsCard";
import Pagination from "../../../components/Pagination";

import landscape from "../../../public/images/krapinjon_landscape_bg.jpg";

import animations from "../../../utils/otherAnimations";
import { Config } from "../../../utils/config";

export async function getStaticPaths() {
  const totalArticles = await ContentfulHelper.getTotalArticlesNumber();
  const totalPages = Math.ceil(totalArticles / Config.pagination.pageSize);

  const paths = [];

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const res = await ContentfulHelper.getArticlePage(params.page);

  const totalPages = Math.ceil(res.totalCount / Config.pagination.pageSize);

  if (params.page <= 0 || params.page > totalPages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news: res.articles,
      totalPages,
      currentPage: params.page,
    },
  };
}

export default function Novosti({ news, totalPages, currentPage }) {
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

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
        <meta property="og:url" content={"https://www.krapinjon.hr/novosti"} />
        <meta
          property="og:title"
          content="Novosti | Krapinjon - udruga mladih iz Krapine"
        />
        <meta property="og:description" content="Udruga Krapinjon..." />
        {/* <meta property="og:image" content={require('../images/web_preview.jpg')} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={"https://www.krapinjon.hr/novosti"} />
        <meta
          name="twitter:title"
          content="Novosti | Krapinjon - udruga mladih iz Krapine"
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

      <div className="self-center mt-0 mb-20 w-11/12 md:w-9/12 lg:w-7/12 max-w-screen-lg">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          nextDisabled={nextDisabled}
          prevDisabled={prevDisabled}
        />
      </div>
    </motion.div>
  );
}
