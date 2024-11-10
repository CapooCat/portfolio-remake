import { AnimationControls } from "framer-motion";

interface IFramerEffectProps {
  effect:
    | "fadeIn"
    | "slideUp"
    | "blinking"
    | "spin"
    | "zoom"
    | "slideInFromLeft"
    | "rotateSlide"
    | "welcome"
    | "zoomIn";
  options?: { stagger: boolean };
}

const animation = {
  welcome: {
    hidden: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  },
  fadeIn: {
    hidden: {
      opacity: 0,
    },

    remove: {
      opacity: 0,
      y: 20,
    },

    animate: {
      opacity: 1,
    },
  },

  zoomIn: {
    hidden: {
      scale: 0,
      opacity: 0,
    },

    remove: {
      scale: 0,
      opacity: 0,
    },

    animate: {
      scale: 1,
      opacity: 1,
    },
  },

  slideUp: {
    hidden: {
      opacity: 0,
      y: 40,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  },

  blinking: {
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 1],
    },
  },

  spin: {
    animate: {
      rotate: 360,
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: 2,
      },
    },
  },

  zoom: {
    animate: {
      scale: 1.2,
      filter: "brightness(0.8)",
    },
  },

  slideInFromLeft: {
    animate: {
      x: 0,
      transition: {
        ease: "linear",
      },
    },

    hidden: {
      x: "125%",
      transition: {
        ease: "linear",
      },
    },
  },

  rotateSlide: {
    animate: {
      rotate: 360,
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: 20,
      },
    },

    child: {
      animate: {
        rotate: -360,
        transition: {
          ease: "linear",
          repeat: Infinity,
          duration: 20,
        },
      },
    },
  },
};

const useFramerEffect = ({ effect, options }: IFramerEffectProps) => {
  let value: any = animation[effect];

  if (options?.stagger) {
    let animate: any = value.animate;
    animate.transition = { ...(animate.transition ?? {}), staggerChildren: 0.15, when: "beforeChildren" };
    value.animate = animate;
  }

  return value;
};

export default useFramerEffect;
