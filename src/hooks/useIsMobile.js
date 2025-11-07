import { useEffect, useState } from "react";

// Simple hook to detect mobile-sized screens using a max-width breakpoint
export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleChange = (e) => setIsMobile(e.matches);

    // Set initial value and subscribe to changes
    handleChange(mql);
    mql.addEventListener ? mql.addEventListener("change", handleChange) : mql.addListener(handleChange);

    return () => {
      mql.removeEventListener ? mql.removeEventListener("change", handleChange) : mql.removeListener(handleChange);
    };
  }, [breakpoint]);

  return isMobile;
}

