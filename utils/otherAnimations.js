const curve = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

const backgroundAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const cardAnimation = {
  start: { opacity: 0, scale: 1 },
  finish: {
    opacity: 1,
    scale: 1,
    transition: {
      ...curve,
      delayChildren: 0.6,
      staggerChildren: 0.1,
      duration: 1,
      delay: 0,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      ...curve,
      delay: 0,
      delayChildren: 0,
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      ...curve,
      delay: 0,
      delayChildren: 0,
      duration: 0.3,
    },
  },
};

const titleAnimation = {
  initial: { opacity: 0, scale: 1.1 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const elementAnimation = {
  start: { opacity: 0, scale: 1.1 },
  finish: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export default {
  backgroundAnimation,
  cardAnimation,
  elementAnimation,
  titleAnimation,
};
