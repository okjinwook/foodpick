import React from "react";
import { useDispatch } from "react-redux";
import '../../css/step.css'

function Step5() {
    const dispatch = useDispatch();
    return (
        <div className="step-component">
            <div className="step-question-box jcce aice"></div>
            <div className="step-answer-box">
                <button onClick={() => {dispatch({type:'step6'})}}>국물 음식</button>
                <button onClick={() => {dispatch({type:'step6'})}}>국물 없는 음식</button>
            </div>
        </div>
    );
}

export default Step5;