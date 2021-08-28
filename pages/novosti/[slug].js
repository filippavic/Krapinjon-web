import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { createClient } from "contentful";
import dayjs from "dayjs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

import { getCloudinaryThumbLink } from "../../utils/helperFunctions";

import landscape from "../../public/images/krapinjon_landscape_bg.jpg";

import animations from "../../utils/otherAnimations";

// Lightbox customization
const LightboxOptions = {
  settings: {
    autoplaySpeed: 0,
    disableWheelControls: true,
    disablePanzoom: true,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: "easeInOut",
    slideAnimationType: "both",
    slideTransitionSpeed: 0.2,
    slideTransitionTimingFunction: "easeInOut",
    hideControlsAfter: 1500,
    overlayColor: "rgba(0,0,0,0.8)",
  },
  buttons: {
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: true,
    showThumbnailsButton: false,
    iconPadding: "14px",
    iconColor: "rgba(252,138,23,0.8)",
  },
  caption: {
    showCaption: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
  progressBar: {
    showProgressBar: true,
    backgroundColor: "#f2f2f2",
    fillColor: "#ffffff",
    height: "15px",
  },
};

// Rich text component customization
const Heading1 = ({ children }) => (
  <motion.h1 className="font-bold text-krapinjon-orange text-lg text-justify">
    {children}
  </motion.h1>
);

const Heading2 = ({ children }) => (
  <motion.h2 className="font-bold text-krapinjon-orange text-base text-justify">
    {children}
  </motion.h2>
);

const Heading3 = ({ children }) => (
  <motion.h3 className="font-semibold text-krapinjon-orange text-sm text-justify">
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

const textRenderOptions = {
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

// Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "news" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "news",
    "fields.slug": params.slug,
  });

  if (!items[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article: items[0] },
  };
}

export default function NewsArticle({ article }) {
  // Article data
  const { title, slug, thumbnail, tags, text, images, documents } =
    article.fields;
  const publishDate = dayjs(article.sys.createdAt).format("DD.MM.YYYY.");
  const publishTime = dayjs(article.sys.createdAt).format("DD.MM.YYYY. HH:mm");
  const updateTime = dayjs(article.sys.updatedAt).format("DD.MM.YYYY. HH:mm");

  let thumbLink = getCloudinaryThumbLink(thumbnail[0].original_secure_url);

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [1, 1.3]);

  return (
    <SimpleReactLightbox>
      <motion.div
        className="min-h-screen flex flex-col"
        exit={{
          opacity: 0,
          transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
        }}
      >
        <Head>
          <title>{title + " | Krapinjon - udruga mladih iz Krapine"}</title>

          <meta name="description" content="Udruga Krapinjon..." />
          <meta name="copyright" content="Filip Pavić/Udruga Krapinjon" />

          {/* Theme color */}
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-navbutton-color" content="#000000" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#000000"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={process.env.MAIN_URL + "/" + slug} />
          <meta
            property="og:title"
            content={title + " | Krapinjon - udruga mladih iz Krapine"}
          />
          <meta property="og:description" content="Udruga Krapinjon..." />
          <meta
            property="og:image"
            content={thumbnail[0].original_secure_url}
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:url"
            content={process.env.MAIN_URL + "/" + slug}
          />
          <meta
            name="twitter:title"
            content={title + " | Krapinjon - udruga mladih iz Krapine"}
          />
          <meta name="twitter:description" content="Udruga Krapinjon..." />
          <meta
            name="twitter:image"
            content={thumbnail[0].original_secure_url}
          />

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

        <motion.div
          className="bg-white self-center mt-0 mb-20 w-11/12 rounded-xl max-w-screen-2xl"
          variants={animations.cardAnimation}
          initial="start"
          animate="finish"
        >
          <motion.div className="flex relative justify-center w-full h-96 overflow-hidden rounded-t-xl">
            <div className="absolute h-full w-1/2 flex self-center text-center justify-center">
              <motion.h1
                className="absolute z-50 flex self-center justify-center text-4xl font-bold"
                initial={{ opacity: 0, y: 15, scale: 1.1 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 1,
                    ease: [0.6, 0.01, -0.05, 0.9],
                  },
                }}
              >
                {title}
              </motion.h1>
            </div>

            <div className="absolute z-20 w-full h-full bg-black bg-opacity-60"></div>

            <motion.div
              className="w-full h-full"
              initial={{ scale: 1.2 }}
              animate={{
                scale: 1,
                transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] },
              }}
              style={{ scale: y1 }}
            >
              <Image
                src={thumbnail[0].original_secure_url}
                blurDataURL={thumbLink}
                placeholder="blur"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt=""
                quality="70"
              />
            </motion.div>
          </motion.div>
          <div className="flex flex-row w-full h-auto justify-between items-center p-7">
            <motion.span
              className="text-xs md:text-sm lg:text-base font-bold text-black"
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
              {publishDate}
            </motion.span>
            <motion.div className="w-min flex flex-row md:pl-4 self-center">
              {tags.map((tag, index) => {
                return (
                  <motion.span
                    key={index}
                    className="text-xs font-bold text-black ml-2"
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
                    {tag}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
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
              {documentToReactComponents(text, textRenderOptions)}
            </motion.div>
          </div>
          {images !== undefined ? (
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
                Galerija slika
              </span>

              <SRLWrapper options={LightboxOptions}>
                <div className="grid grid-cols-repeat gap-4 mt-5">
                  {images.map((image, index) => {
                    return (
                      <div
                        className="relative max-w-sm h-32 w-full rounded-lg"
                        key={index}
                      >
                        <a href={image.original_secure_url}>
                          <Image
                            src={image.original_secure_url}
                            layout="fill"
                            sizes="384px"
                            objectFit="cover"
                            objectPosition="center"
                            alt=""
                            srl_gallery_image="true"
                            className="rounded-lg"
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </SRLWrapper>
            </motion.div>
          ) : (
            <></>
          )}
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
              <span className="text-gray-400 font-semibold">Prilozi</span>
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
                      {`${
                        document.fields.title
                      } (.${document.fields.file.fileName.split(".").pop()})`}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <></>
          )}
          <motion.div
            className="p-7 flex flex-col"
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
            <span className="text-gray-400 text-sm">
              Objavljeno: {publishTime}
            </span>
            <span className="text-gray-400 text-sm">Uređeno: {updateTime}</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </SimpleReactLightbox>
  );
}
