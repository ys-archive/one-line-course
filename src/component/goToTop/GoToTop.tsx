import React, { useEffect, useState } from "react";
import { getIcon } from "~/src/common";

import "./_GoToTop.scss";

const GoToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const listener = () => setIsVisible(window.pageYOffset > 200);

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  const onClickGoToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <div className="goToTop">
      {isVisible &&
        getIcon("GoToTop", onClickGoToTop, {
          fontSize: "2.8rem",
        })}
    </div>
  );
};

export default GoToTop;
