import React from "react";

function SearchMap(){
    return(
        <div className="map-wrap">
        <h1>오시는 길</h1>
        <div className="map">
            <iframe
                src="https://place.map.kakao.com/1348181359" 
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="회사 위치"
            ></iframe>

        </div>
        <h1> 편안한 시간되세요 </h1>
        <div className="video">
            <iframe width="600" height="450" src="https://www.youtube.com/embed/oYspbdbH20c?si=tQkGpHBgDYWKkn15"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    );
}

export default SearchMap;