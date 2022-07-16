import { useEffect, useState } from "react";

const useKakao = (mapContainer: HTMLDivElement | null) => {
  const [kakao, setKakao] = useState<any>(null);
  const [map, setMap] = useState<any>(null);
  const [services, setServices] = useState<any>(null);

  const putMarker = (lat: number, long: number, handleClock: () => void) => {
    if (!map || !kakao) return;
    const markerPosition = new kakao.maps.LatLng(lat, long);
    const marker = new kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);
    kakao.maps.event.addListener(marker, "click", () => {
      // 마커 위에 인포윈도우를 표시합니다
      handleClock();
      console.log("너 나 클릭했음..");
      //
    });
  };

  useEffect(() => {
    if (!mapContainer) return;
    window.kakao?.maps.load(() => {
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      setMap(new window.kakao.maps.Map(mapContainer, mapOption));
      setKakao(window.kakao);
      setServices(window.kakao.maps.services);
    });
  }, [mapContainer]);

  return { kakao, map, services, putMarker };
};

export default useKakao;
