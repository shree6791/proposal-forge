import { useEffect, useRef, useState } from 'react';

interface IntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: IntersectionOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { freezeOnceVisible = false, ...observerOptions } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isElementVisible = entry.isIntersecting;
      setIsVisible(isElementVisible);

      if (freezeOnceVisible && isElementVisible && element) {
        observer.unobserve(element);
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [freezeOnceVisible, observerOptions]);

  return [elementRef, isVisible];
}