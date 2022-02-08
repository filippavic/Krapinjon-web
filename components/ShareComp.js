import { motion } from "framer-motion";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
} from "react-share";

export default function ShareComp(props) {
  return (
    <motion.div className="flex flex-row flex-wrap gap-2 mt-2">
      <FacebookShareButton url={props.url}>
        <FacebookIcon
          size={32}
          round
          bgStyle={{ fill: "#858585" }}
        ></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton url={props.url}>
        <TwitterIcon
          size={32}
          round
          bgStyle={{ fill: "#858585" }}
        ></TwitterIcon>
      </TwitterShareButton>
      <WhatsappShareButton url={props.url}>
        <WhatsappIcon
          size={32}
          round
          bgStyle={{ fill: "#858585" }}
        ></WhatsappIcon>
      </WhatsappShareButton>
      <TelegramShareButton url={props.url}>
        <TelegramIcon
          size={32}
          round
          bgStyle={{ fill: "#858585" }}
        ></TelegramIcon>
      </TelegramShareButton>
      <RedditShareButton url={props.url}>
        <RedditIcon size={32} round bgStyle={{ fill: "#858585" }}></RedditIcon>
      </RedditShareButton>
      <LinkedinShareButton url={props.url}>
        <LinkedinIcon
          size={32}
          round
          bgStyle={{ fill: "#858585" }}
        ></LinkedinIcon>
      </LinkedinShareButton>
    </motion.div>
  );
}
