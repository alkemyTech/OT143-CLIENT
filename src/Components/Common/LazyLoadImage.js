import { useRef, useEffect, useState } from "react";

const LazyLoadImage = ({ src }) => {
  const [isInViewport, setIsInViewport] = useState(false);

  const root = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(onIntersection, { threshold: 0 });

    obs.observe(root.current);

    function onIntersection(entries) {
      const { isIntersecting }  = entries[0];

      if (isIntersecting) {
        obs.disconnect();
      }

      setIsInViewport(isIntersecting);
    }
  }, []);

  return (
    <div style={{ minHeight: "150px" }} ref={root}>
        <img src={isInViewport ? src : null}  />
    </div>
  );
};

export default LazyLoadImage;
