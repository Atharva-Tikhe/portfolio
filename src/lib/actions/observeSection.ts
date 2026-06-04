import { navigation } from '$lib/state/navigation.svelte';

export function observeSection(node: HTMLElement) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        navigation.activeSection = node.id;
      }
    },
    {
      threshold: 0.3
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}