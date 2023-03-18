import { useDispatch, useSelector } from "react-redux";
import '../../css/result.css'
import {foodDummy} from '../../foodDummy';

function getFood(code) {
    const dummy = {...foodDummy}
    for(var ob in dummy) {
        if(ob == code) {
            return foodDummy[ob]
        }
    }
}
function Result() {
    const food = useSelector( store => store.foodReducer)
    const foodCode = food.byCountry + food.byKind + food.bySpicy + food.bySoup
    const foodArr = getFood(foodCode)
    const foodList = foodArr.map(item => {
        return (
            <div className="result-food-box jcce aice">   
                <img src="https://png.pngtree.com/png-clipart/20220124/ourmid/pngtree-jjajangmyeon-korean-food-illustration-png-image_4353965.png" width={130}></img>
                <div className="result-food-name aice jcce">{item.name}</div>
            </div>
        )
    })
    return (
        <div className="result-component jcce">
            {foodList}
        </div>
    );
}

export default Result;