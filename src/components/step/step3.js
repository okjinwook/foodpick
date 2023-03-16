import React from "react";
import { useDispatch } from "react-redux";
import '../../css/step.css'

function Step3() {
    const dispatch = useDispatch();
    return (
        <div className="step-component">
            <div className="step-question-box jcce aice">자극적인게 원하는가?</div>
            <div className="step-answer-box">
                <button onClick={() => {dispatch({type:'step4'})}}>매운 음식</button>
                <button onClick={() => {dispatch({type:'step4'})}}>순한 음식</button>
            </div>
        </div>
    );
}

export default Step3;