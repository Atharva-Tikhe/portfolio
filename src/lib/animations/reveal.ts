import { gsap } from 'gsap';

export function reveal(node: HTMLElement) {
  gsap.from(node, {
    opacity: 0,
    y: 20,
    duration: 0.6
  });
}