import React, {useState} from 'react';
import '../css/main.css';
import Step1 from './step/step1'
import Step2 from './step/step2'
import Step3 from './step/step3'
import Step4 from './step/step4'
import Step5 from './step/step5'
import { useDispatch, useSelector } from 'react-redux';


function Home() {
    const dispatch = useDispatch();
    return (
        <div className="main-content">
            <div className="main-content-title">오늘 땡기는 메뉴를 알아볼까요~?</div>
            <div className="main-button-box">
                <button className="main-choice-button" onClick={() => {dispatch({type:'step1'})}}>좁혀가는 메뉴 고르기</button>
                <button className="main-random-button">룰렛 메뉴 고르기</button>
            </div>
        </div>
    );
}
function Main() {
    const mode = useSelector( (state) => state );
    
    var content = null;
    if(mode === 'home') {
        content = <Home/>
    }
    else if(mode === 'step1') {
        content = <Step1/>
    }
    else if(mode === 'step2') {
        content = <Step2/>
    }
    else if(mode === 'step3') {
        content = <Step3/>
    }
    else if(mode === 'step4') {
        content = <Step4/>
    }
    else if(mode === 'step5') {
        content = <Step5/>
    }
    return (
        <div className="main-component component jcce">
            {content}
        </div>
    );
}

export default Main;