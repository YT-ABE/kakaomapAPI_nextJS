import type { NextPage } from "next";
import { useEffect, useState } from "react";
import useKakao from "../hooks/useKakao";

const Home: NextPage = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const { kakao, map, services, putMarker } = useKakao(container);

  useEffect(() => {
    if (!kakao || !map) return;

    putMarker(33.450701, 126.570667, () => {});
  }, [kakao, map]);
  return (
    <div>
      <div className="kakaomap__container" ref={setContainer}></div>
      hi world
    </div>
  );
};

export default Home;
