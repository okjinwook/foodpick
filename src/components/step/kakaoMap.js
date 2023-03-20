import { useEffect } from "react";

const {kakao} = window;

function KaKaoMap(){
    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };  
    
        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption); 
    }, [])
    return (
        <div className="jcce aice" style={{flexFlow : "column"}}>
            <div>근처 "짜장면" 식당</div>
            <div id="map" style={{width:'350px', height: '350px' }}></div>
        </div>
    );
}

export default KaKaoMap;