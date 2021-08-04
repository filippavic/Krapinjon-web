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
      delayChildren: 1,
      duration: 1,
      delay: 0,
      ease: [0.6, 0.05, -0.01, 0.9],
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
      ease: [0.6, 0.05, -0.01, 0.9],
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
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export default {
  backgroundAnimation,
  cardAnimation,
  elementAnimation,
  titleAnimation,
};
