import { useEffect } from "react";
import { useSelector } from "react-redux";

const {kakao} = window;

function KaKaoMap(){
    const foodKeyword = useSelector(store => store.foodSelectReducer)
    useEffect(() => {
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        var infowindow = new kakao.maps.InfoWindow({zIndex:1});

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };  

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 

        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places(); 

        const getCurrentCoordinate = async () => {
            return new Promise((res, rej) => {
              // HTML5의 geolocaiton으로 사용할 수 있는지 확인합니다.
              if (navigator.geolocation) {
                // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
                navigator.geolocation.getCurrentPosition(function (position) {
                  const lat = position.coords.latitude; // 위도
                  const lon = position.coords.longitude; // 경도
          
                  const coordinate = new kakao.maps.LatLng(lat, lon);
                  res(coordinate);
                });
              } else {
                rej(new Error("현재 위치를 불러올 수 없습니다."));
              }
            });
        };
        async function searchPlaces() {
            const currentCoordinate = await getCurrentCoordinate();
            var options = {
              location: currentCoordinate,
              radius: 20000,
              sort: kakao.maps.services.SortBy.DISTANCE,
            };
            
            // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
            ps.keywordSearch(foodKeyword, placesSearchCB, options);
          }
          searchPlaces()

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();

                for (var i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            } 
        }

        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {
            
            // 마커를 생성하고 지도에 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }
    }, [])
    return (
        <div className="jcce aice" style={{flexFlow : "column"}}>
            <div className="jcce aice" style={{marginBottom: '20px' ,backgroundColor: 'white', width: '250px', height: '50px', fontWeight: '700'}}>주변 {foodKeyword} 맛집</div>
            <div id="map"></div>
        </div>
    );
}

export default KaKaoMap;