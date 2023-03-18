import { useDispatch } from "react-redux";
import '../../css/step.css'
import { setSoup } from "../../modules/reducer/foodReducer";
import { setNext } from "../../modules/reducer/stepReducer";

function Step5() {
    const dispatch = useDispatch();
    return (
        <div className="step-component aice">
            <div>
                <div className="step-question-box jcce aice">- ★오땡최음★ -<br></br>오늘 땡기는 최종적인 음식 종류는?</div>
                <div className="step-answer-box">
                    <button onClick={ () => {
                        dispatch(setNext())
                        dispatch(setSoup('0'))
                    } }>국물 O</button>
                    <button onClick={ () => {
                        dispatch(setNext())
                        dispatch(setSoup('1'))
                    } }>국물 X</button>
                </div>
            </div>
        </div>
    );
}

export default Step5;