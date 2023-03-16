import React from "react";
import { useDispatch } from "react-redux";
import '../../css/step.css'

function Step4() {
    const dispatch = useDispatch();
    return (
        <div className="step-component">
            <div className="step-question-box jcce aice">뜨끈뜨끈 vs 시원시원</div>
            <div className="step-answer-box">
                <button onClick={() => {dispatch({type:'step5'})}}>뜨거운 음식</button>
                <button onClick={() => {dispatch({type:'step5'})}}>시원한 음식</button>
            </div>
        </div>
    );
}

export default Step4;