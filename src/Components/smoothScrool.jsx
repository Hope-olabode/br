export default function Scroll() {
  const smoothScrollTo = (targetY = 700, duration = 2000) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress; // easeInOutQuad

      window.scrollTo(0, startY + distance * ease);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return {
    smoothScrollTo,
  };
}
