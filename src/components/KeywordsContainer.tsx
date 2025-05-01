import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface KeywordsContainerProps {
  keywords: string[];
  className?: string;
}

export default function KeywordsContainer({
  keywords,
  className = "",
}: KeywordsContainerProps) {
  const [keywordRef, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Déclencher l'animation uniquement quand les mots-clés deviennent visibles
    if (inView && !hasAnimated && containerRef.current) {
      // Vérifier si le défilement est nécessaire
      const hasOverflow =
        containerRef.current.scrollWidth > containerRef.current.clientWidth;

      if (hasOverflow) {
        // Attendre que l'animation du projet soit terminée
        setTimeout(() => {
          containerRef.current?.classList.add("scroll-hint-active");

          // Nettoyer après l'animation
          setTimeout(() => {
            containerRef.current?.classList.remove("scroll-hint-active");
            setHasAnimated(true);
          }, 3500); // Durée totale de l'animation
        }, 800); // Délai après que le conteneur soit visible
      }
    }
  }, [inView, hasAnimated]);

  return (
    <div
      ref={(node) => {
        // Combiner les refs
        keywordRef(node);
        if (containerRef) containerRef.current = node;
      }}
      className={`project-keywords-container ${className}`}
    >
      {keywords.map((keyword) => (
        <span key={keyword} className="keyword">
          {keyword}
        </span>
      ))}
    </div>
  );
}
