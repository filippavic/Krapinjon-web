import Layout from "../components/layout";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "auto" });
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
