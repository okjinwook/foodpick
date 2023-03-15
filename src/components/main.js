import React, {useState} from 'react';
import '../css/main.css';

function Home() {
    return (
        <div className="main-content">
            <div className="main-content-title">오늘 땡기는 메뉴를 알아볼까요~?</div>
            <div className="main-button-box">
                <button className="main-choice-button">좁혀가는 메뉴 고르기</button>
                <button className="main-random-button">룰렛 메뉴 고르기</button>
            </div>
        </div>
    );
}
// test commit
function Main() {
    const [mode, setContent] = useState('home')
    var content = null
    if(mode === 'home') {
        content = <Home/>
    }
    else if(mode === 'step1') {
        // content = <Step1/>
    }
    return (
        <div className="main-component component jcce">
            {content}
        </div>
    );
}

export default Main;