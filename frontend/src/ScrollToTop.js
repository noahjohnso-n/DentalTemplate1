import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual"; // Prevents restoring scroll position
    window.scrollTo(0, 0); // Instantly moves to top
  }, [pathname]);

  return null;
};

export default ScrollToTop;