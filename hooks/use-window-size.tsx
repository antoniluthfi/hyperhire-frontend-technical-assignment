import { useEffect, useState } from "react";

type Breakpoints = { sm: number; md: number; lg: number };

type WindowSize = {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  breakpoint: "mobile" | "tablet" | "desktop";
};

export function useWindowSize(
  breakpoints: Breakpoints = { sm: 640, md: 768, lg: 1024 },
): WindowSize {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    let rafId: number | null = null;
    const onResize = () => {
      if (rafId != null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        update();
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  const width = size.width;
  const height = size.height;
  const isMobile = width < breakpoints.sm;
  const isTablet = width >= breakpoints.sm && width < breakpoints.lg;
  const isDesktop = width >= breakpoints.lg;
  const breakpoint = isMobile ? "mobile" : isTablet ? "tablet" : "desktop";

  return { width, height, isMobile, isTablet, isDesktop, breakpoint };
}
