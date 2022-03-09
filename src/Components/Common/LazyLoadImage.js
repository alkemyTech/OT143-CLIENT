import { useRef, useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';

const LazyLoadImage = ({ src }) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const root = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(onIntersection, { threshold: 0 });

    obs.observe(root.current);

    function onIntersection(entries) {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        obs.disconnect();
      }

      setIsInViewport(isIntersecting);
    }
  }, []);

  const onLoad = () => {
    setIsLoading((prev) => !prev);
  };

  const stylePlaceholder = {
    display: isLoading ? "block" : "none",
  };

  return (
    <div className="img-container" style={{ minHeight: "200px" }} ref={root}>
      <Spinner style={stylePlaceholder} animation="grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <img src={isInViewport ? src : null} onLoad={onLoad} />
    </div>
  );
};

export default LazyLoadImage;
