import React from "react";
import { useDispatch } from "react-redux";
import '../../css/step.css'

function Step4() {
    const dispatch = useDispatch();
    return (
        <div className="step-component aice">
            <div>
                <div className="step-question-box jcce aice">- 오땡온 -<br></br>오늘 땡기는 온도는?</div>
                <div className="step-answer-box">
                    <button onClick={() => {dispatch({type:'next'})}}>뜨거운 음식</button>
                    <button onClick={() => {dispatch({type:'next'})}}>시원한 음식</button>
                </div>
            </div>
        </div>
    );
}

export default Step4;