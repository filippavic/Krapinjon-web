const backgroundAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1.3,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const contentAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 2,
      delay: 1.3,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const sentenceAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const letterAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    ease: [0.6, 0.05, -0.01, 0.9],
  },
};

const eventAnimation = {
  outOfFocus: { opacity: 0.6 },
  inFocus: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
      duration: 0.7,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const eventDetailsAnimation = {
  outOfFocus: { opacity: 0, y: 10, scale: 1.2 },
  inFocus: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const eventButtonAnimation = {
  outOfFocus: { opacity: 0, y: 10, scale: 1.1 },
  inFocus: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.9,
      duration: 0.3,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const elementAnimation = {
  initial: { opacity: 0, scale: 1.1 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export default {
  backgroundAnimation,
  contentAnimation,
  sentenceAnimation,
  letterAnimation,
  eventAnimation,
  eventDetailsAnimation,
  eventButtonAnimation,
  elementAnimation,
};
