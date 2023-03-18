import '../../css/main.css';
import Step1 from '../step/step1'
import Step2 from '../step/step2'
import Step3 from '../step/step3'
import Step4 from '../step/step4'
import Result from '../step/result'
import { useDispatch, useSelector } from 'react-redux';
import { setNext } from '../../modules/reducer/stepReducer';


function Home() {
    const dispatch = useDispatch();
    return (
        <div className="main-content">
            <div className="main-content-title">오늘 땡기는 메뉴를 알아볼까요~?</div>
            <div className="main-button-box">
                <button className="main-choice-button" onClick={() => {dispatch(setNext())}}>메뉴 고르기 시작</button>
            </div>
        </div>
    );
}
function Main() {
    const mode = useSelector( store => store.stepReducer );
    
    var content = null;
    if(mode === 0) {
        content = <Home/>
    }
    else if(mode === 1) {
        content = <Step1/>
    }
    else if(mode === 2) {
        content = <Step2/>
    }
    else if(mode === 3) {
        content = <Step3/>
    }
    else if(mode === 4) {
        content = <Step4/>
    }
    else if(mode === 5) {
        content = <Result/>
    }
    return (
        <div className="main-component component jcce">
            {content}
        </div>
    );
}

export default Main;