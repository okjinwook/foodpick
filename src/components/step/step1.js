import React from "react";
import { useDispatch } from "react-redux";
import '../../css/step.css'
import { setCountry } from "../../modules/reducer/foodReducer";
import { setNext } from "../../modules/reducer/stepReducer";

function Step1() {
    const dispatch = useDispatch();
    return (
        <div className="step-component aice">
            <div>
                <div className="step-question-box jcce aice">- 오땡나 -<br></br>오늘 땡기는 나라의 음식?</div>
                <div className="step-answer-box">
                    <button onClick={ () => {
                        dispatch(setNext())
                        dispatch(setCountry('0'))
                    } }>한식</button>
                    <button onClick={ () => {
                        dispatch(setNext())
                        dispatch(setCountry('1'))
                    } }>중식</button>
                    <button onClick={ () => {
                        dispatch(setNext())
                        dispatch(setCountry('3'))
                    } }>일식</button>
                    <button onClick={ () => {
                        dispatch(setNext())
                        dispatch(setCountry('4'))
                    } }>양식</button>
                </div>
            </div>
        </div>
    );
}

export default Step1;