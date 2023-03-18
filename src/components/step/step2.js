import { useDispatch } from "react-redux";
import '../../css/step.css'
import { setKind } from "../../modules/reducer/foodReducer";
import { setNext } from "../../modules/reducer/stepReducer";

function Step2() {
    const dispatch = useDispatch();
    return (
        <div className="step-component aice">
            <div>
                <div className="step-question-box jcce aice">- 오땡식 -<br></br>오늘 땡기는 식사 종류는?</div>
                <div className="step-answer-box">
                    <button onClick={ () => {
                        dispatch(setNext())
                        dispatch(setKind('0'))
                    } }>밥</button>
                    <button onClick={ () => {
                        dispatch(setNext())
                        dispatch(setKind('1'))
                    } }>면</button>
                </div>
            </div>
        </div>
    );
}

export default Step2;