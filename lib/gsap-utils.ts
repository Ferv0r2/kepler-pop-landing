import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { SplitText } from "gsap/SplitText"
import { Flip } from "gsap/Flip"

export const initGSAP = () => {
  if (typeof window !== "undefined") {
    // Wait for GSAP and plugins to load
    const checkGSAP = () => {
      if (window.gsap && window.ScrollTrigger && window.ScrollSmoother && window.SplitText) {
        // Register plugins
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Flip)

        // Initialize ScrollSmoother
        const smoother = ScrollSmoother.create({
          smooth: 1.5,
          effects: true,
          normalizeScroll: true,
        })

        // Initialize text animations
        const headings = document.querySelectorAll(".animate-text")
        headings.forEach((heading) => {
          const split = new SplitText(heading, { type: "chars, words" })
          gsap.from(split.chars, {
            opacity: 0,
            y: 50,
            rotateX: -90,
            stagger: 0.02,
            duration: 0.5,
            ease: "back.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
            },
          })
        })

        // Floating elements
        gsap.utils.toArray(".gsap-float").forEach((element: any) => {
          gsap.to(element, {
            y: "20px",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          })
        })

        // Parallax elements
        gsap.utils.toArray(".gsap-parallax").forEach((element: any) => {
          const depth = element.dataset.depth || 0.2
          gsap.to(element, {
            y: () => -ScrollTrigger.maxScroll(window) * depth,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "max",
              invalidateOnRefresh: true,
              scrub: true,
            },
          })
        })

        // Reveal animations
        gsap.utils.toArray(".gsap-reveal").forEach((element: any) => {
          gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
            },
          })
        })

        // Stagger animations for lists
        gsap.utils.toArray(".gsap-stagger-container").forEach((container: any) => {
          const items = container.querySelectorAll(".gsap-stagger-item")
          gsap.from(items, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
            },
          })
        })
      } else {
        // If GSAP isn't loaded yet, check again in 100ms
        setTimeout(checkGSAP, 100)
      }
    }

    checkGSAP()
  }
}

// Types for global GSAP
declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
    ScrollSmoother: any
    SplitText: any
    Flip: any
  }
}
