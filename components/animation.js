export const pageAnimation = {
  hidden: {
    y: -30,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    y: -30,
    transition: {
      duration: 0.5,
    },
  },
};

export const stagger = {
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const buttonAnim = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
};

export const buttonAnim1 = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
};

export const shadowIcon = {
  hidden: { opacity: 0 },
  show: { opacity: 0.08 },
};

export const mainIcon = {
  hidden: { opacity: 0, scale: 1.1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 1.6 },
  },
};

export const paragraphAni = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1.6 },
  },
};

export const formanimation = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const socialAnim = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 0.8, when: "beforeChildren" },
  },
};

export const scrollScale = {
  hidden: {
    transform: "scale(1.02)",
    opacity: 0,
    transition: { duration: 0.8 },
  },
  show: {
    transform: "scale(1)",
    opacity: 1,
    transition: { duration: 0.8, when: "beforeChildren" },
  },
};

export const subTitleAnim = {
  hidden: {
    transform: "scale(1.08)",
    opacity: 0,
  },
  show: {
    opacity: 1,
    transform: "scale(1)",
    transition: { duration: 0.5, when: "beforeChildren" },
  },
};

export const cardFade = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export const smcardAnim = {
  hidden: {
    borderRadius: 20,
  },
  show: {
    borderRadius: 50,
    transition: { duration: 0.8 },
  },
};

export const animateList = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};
