import React from "react";
import { useDispatch } from "react-redux";
import '../../css/step.css'

function Step3() {
    const dispatch = useDispatch();
    return (
        <div className="step-component aice">
            <div>
                <div className="step-question-box jcce aice">- 오땡자 -<br></br>오늘 땡기는 자극 정도는?</div>
                <div className="step-answer-box">
                    <button onClick={() => {dispatch({type:'next'})}}>매운 음식</button>
                    <button onClick={() => {dispatch({type:'next'})}}>순한 음식</button>
                </div>
            </div>
        </div>
    );
}

export default Step3;