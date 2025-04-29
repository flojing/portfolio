import { useEffect, useState } from "react";
import "../styles/ScrollProgressBar.css";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollable > 0 ? (scrolled / scrollable) * 100 : 0;
      setScrollProgress(progress);
    };
    calculateScrollProgress();
    window.addEventListener("scroll", calculateScrollProgress);

    return () => {
      window.removeEventListener("scroll", calculateScrollProgress);
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
