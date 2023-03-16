import React from "react";
import { useDispatch } from "react-redux";
import '../../css/step.css'

function Step2() {
    const dispatch = useDispatch();
    return (
        <div className="step-component">
            <div className="step-question-box jcce aice">주 메뉴의 종류는?</div>
            <div className="step-answer-box">
                <button onClick={() => {dispatch({type:'step3'})}}>밥</button>
                <button onClick={() => {dispatch({type:'step3'})}}>면</button>
                <button onClick={() => {dispatch({type:'step3'})}}>빵</button>
            </div>
        </div>
    );
}

export default Step2;