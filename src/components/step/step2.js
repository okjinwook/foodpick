import React from "react";
import { useDispatch } from "react-redux";
import '../../css/step.css'

function Step2() {
    const dispatch = useDispatch();
    return (
        <div className="step-component aice">
            <div>
                <div className="step-question-box jcce aice">- 오땡식 -<br></br>오늘 땡기는 식사 종류는?</div>
                <div className="step-answer-box">
                    <button onClick={() => {dispatch({type:'next'})}}>밥</button>
                    <button onClick={() => {dispatch({type:'next'})}}>면</button>
                </div>
            </div>
        </div>
    );
}

export default Step2;