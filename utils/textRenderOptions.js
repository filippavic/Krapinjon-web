import { motion } from "framer-motion";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

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

export default textRenderOptions;
