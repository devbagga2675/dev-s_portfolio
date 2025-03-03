import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLoco = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
        multiplier: 1.2,
        tablet: { smooth: true },
        smartphone: { smooth: true },
        getDirection: true,
        getSpeed: true,
        inertia: 0.8,
        scrollFromAnywhere: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return scrollRef;
};
