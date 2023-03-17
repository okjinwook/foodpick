import React from "react";
import { useDispatch } from "react-redux";
import '../../css/result.css'

function Result() {
    const item = <div className="result-food-box jcce aice">   
                    <img src="https://png.pngtree.com/png-clipart/20220124/ourmid/pngtree-jjajangmyeon-korean-food-illustration-png-image_4353965.png" width={130}></img>
                    <div className="result-food-name aice jcce">짜장면</div>
                 </div>
    return (
        <div className="result-component jcce">
            {item}{item}{item}{item}{item}
            {item}{item}{item}{item}{item}
        </div>
    );
}

export default Result;