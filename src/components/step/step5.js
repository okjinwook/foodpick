import React from "react";
import { useDispatch } from "react-redux";
import '../../css/step.css'

function Step5() {
    const dispatch = useDispatch();
    return (
        <div className="step-component aice">
            <div>
                <div className="step-question-box jcce aice">- ★오땡최음★ -<br></br>오늘 땡기는 최종적인 음식 종류는?</div>
                <div className="step-answer-box">
                    <button onClick={() => {dispatch({type:'next'})}}>국물 있게</button>
                    <button onClick={() => {dispatch({type:'next'})}}>국물 없게</button>
                </div>
            </div>
        </div>
    );
}

export default Step5;