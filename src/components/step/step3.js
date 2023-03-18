import { useDispatch } from "react-redux";
import '../../css/step.css'
import { setSpicy } from "../../modules/reducer/foodReducer";
import { setNext } from "../../modules/reducer/stepReducer";

function Step3() {
    const dispatch = useDispatch();
    return (
        <div className="step-component aice">
            <div>
                <div className="step-question-box jcce aice">- 오땡자 -<br></br>오늘 땡기는 자극 정도는?</div>
                <div className="step-answer-box">
                    <button onClick={ () => {
                        dispatch(setNext())
                        dispatch(setSpicy('0'))
                    } }>매운 음식</button>
                    <button onClick={ () => {
                        dispatch(setNext())
                        dispatch(setSpicy('1'))
                    } }>순한 음식</button>
                </div>
            </div>
        </div>
    );
}

export default Step3;