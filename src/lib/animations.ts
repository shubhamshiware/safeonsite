import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const revealOnScroll = (
  element: string | HTMLElement,
  vars?: gsap.TweenVars
) => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    ...vars,
  });
};

export const parallaxEffect = (
  element: string | HTMLElement,
  speed: number = 0.5
) => {
  return gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * speed,
    ease: "none",
  });
};
