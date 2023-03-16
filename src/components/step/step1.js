import React from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../css/step.css'

function Step1() {
    const dispatch = useDispatch();
    return (
        <div className="step-component">
            <div className="step-question-box jcce aice">어느 나라의 음식은?</div>
            <div className="step-answer-box">
                <button onClick={() => {dispatch({type:'step2'})}}>한식</button>
                <button onClick={() => {dispatch({type:'step2'})}}>중식</button>
                <button onClick={() => {dispatch({type:'step2'})}}>일식</button>
                <button onClick={() => {dispatch({type:'step2'})}}>양식</button>
            </div>
        </div>
    );
}

export default Step1;