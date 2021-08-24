import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { createClient } from "contentful";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import landscape from "../public/images/krapinjon_landscape_bg.jpg";

import animations from "../utils/otherAnimations";

// Rich text component customization
const Heading1 = ({ children }) => (
  <motion.h1 className="font-bold text-krapinjon-orange text-lg">
    {children}
  </motion.h1>
);

const Heading2 = ({ children }) => (
  <motion.h2 className="font-bold text-krapinjon-orange text-base">
    {children}
  </motion.h2>
);

const Heading3 = ({ children }) => (
  <motion.h3 className="font-semibold text-krapinjon-orange text-sm">
    {children}
  </motion.h3>
);

const Bold = ({ children }) => (
  <span className="font-semibold text-krapinjon-orange">{children}</span>
);

const Text = ({ children }) => (
  <motion.p className="align-center text-justify text-black py-3 font-normal">
    {children}
  </motion.p>
);

const Quote = ({ children }) => (
  <motion.blockquote className="py-5 px-5 align-center text-justify">
    {children}
  </motion.blockquote>
);

const options = {
  renderMark: {
    [MARKS.BOLD]: function BoldText(text) {
      return <Bold>{text}</Bold>;
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: function Paragraph(node, children) {
      return <Text>{children}</Text>;
    },
    [BLOCKS.HEADING_1]: function H1(node, children) {
      return <Heading1>{children}</Heading1>;
    },
    [BLOCKS.HEADING_2]: function H2(node, children) {
      return <Heading2>{children}</Heading2>;
    },
    [BLOCKS.HEADING_3]: function H3(node, children) {
      return <Heading3>{children}</Heading3>;
    },
    [BLOCKS.QUOTE]: function Q(node, children) {
      return <Quote>{children}</Quote>;
    },
    [INLINES.HYPERLINK]: function Hyperlink({ data }, children) {
      return (
        <a
          className="text-krapinjon-orange underline"
          href={data.uri}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    [BLOCKS.UL_LIST]: function UlList(node, children) {
      return <ul className="list-disc list-outside pl-12">{children}</ul>;
    },
    [BLOCKS.OL_LIST]: function OlList(node, children) {
      return <ul className="list-decimal list-outside pl-12">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: function ListItem(node, children) {
      return (
        <li className="list-item text-krapinjon-orange leading-none">
          {children}
        </li>
      );
    },
  },
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: "about",
    select:
      "fields.information,fields.documents,fields.financialReports,fields.reports,fields.sponsors,sys.contentType",
    limit: 1,
  });

  return {
    props: {
      info: res.items[0],
    },
  };
}

export default function Informacije({ info }) {
  // Info page data
  const { information, documents, financialReports, reports, sponsors } =
    info.fields;

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      exit={{
        opacity: 0,
        transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
      }}
    >
      <Head>
        <title>Informacije | Krapinjon - udruga mladih iz Krapine</title>

        <meta name="description" content="Udruga Krapinjon..." />
        <meta name="copyright" content="Filip Pavić/Udruga Krapinjon" />

        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={process.env.MAIN_URL + "/informacije"}
        />
        <meta
          property="og:title"
          content="Informacije | Krapinjon - udruga mladih iz Krapine"
        />
        <meta property="og:description" content="Udruga Krapinjon..." />
        {/* <meta property="og:image" content={thumbnail[0].original_secure_url} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={process.env.MAIN_URL + "/informacije"}
        />
        <meta
          name="twitter:title"
          content="Informacije | Krapinjon - udruga mladih iz Krapine"
        />
        <meta name="twitter:description" content="Udruga Krapinjon..." />
        {/* <meta name="twitter:image" content={thumbnail[0].original_secure_url} /> */}

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
            Informacije
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

      <motion.div
        className="bg-white self-center mt-0 mb-20 w-11/12 rounded-xl max-w-screen-2xl"
        variants={animations.cardAnimation}
        initial="start"
        animate="finish"
      >
        <div className="justify-items-center p-7">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.9],
              },
            }}
          >
            {documentToReactComponents(information, options)}
          </motion.div>
        </div>

        {documents !== undefined ? (
          <motion.div
            className="p-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.9],
              },
            }}
          >
            <span className="text-gray-400 font-semibold">Dokumenti</span>
            <div className="mt-5">
              {documents.map((document, index) => {
                return (
                  <a
                    className="text-krapinjon-orange font-semibold"
                    href={"https:" + document.fields.file.url}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`${document.fields.title} (.${document.fields.file.fileName
                      .split(".")
                      .pop()})`}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <></>
        )}

        {financialReports !== undefined ? (
          <motion.div
            className="p-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.9],
              },
            }}
          >
            <span className="text-gray-400 font-semibold">
              Financijska izvješća
            </span>
            <div className="mt-5">
              {financialReports.map((document, index) => {
                return (
                  <a
                    className="text-krapinjon-orange font-semibold"
                    href={"https:" + document.fields.file.url}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`${document.fields.title} (.${document.fields.file.fileName
                      .split(".")
                      .pop()})`}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <></>
        )}

        {reports !== undefined ? (
          <motion.div
            className="p-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.9],
              },
            }}
          >
            <span className="text-gray-400 font-semibold">Izvješća</span>
            <div className="mt-5">
              {reports.map((document, index) => {
                return (
                  <a
                    className="text-krapinjon-orange font-semibold"
                    href={"https:" + document.fields.file.url}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`${document.fields.title} (.${document.fields.file.fileName
                      .split(".")
                      .pop()})`}
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <></>
        )}

        {sponsors !== undefined ? (
          <motion.div
            className="p-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.9],
              },
            }}
          >
            <span className="text-gray-400 font-semibold">Podržavatelji</span>

            <div className="grid grid-cols-repeat gap-4 mt-5">
              {sponsors.map((image, index) => {
                return (
                  <div
                    className="relative max-w-sm h-32 w-full rounded-lg"
                    key={index}
                  >
                    <Image
                      src={image.original_secure_url}
                      layout="fill"
                      sizes="384px"
                      objectFit="contain"
                      objectPosition="center"
                      alt=""
                      className="rounded-lg"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </motion.div>
    </motion.div>
  );
}
