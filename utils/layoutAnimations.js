const headerMainAnimation = {
  initial: { y: -30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 1.5,
    },
  },
};

const headerAnimation = {
  initial: { y: -30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headerChildAnimation = {
  initial: { y: -10, opacity: 0, scale: 1.1 },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export default { headerMainAnimation, headerAnimation, headerChildAnimation };
