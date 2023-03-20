import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../css/result.css'
import {foodDummy} from '../../foodDummy';
import { setNext } from "../../modules/reducer/stepReducer";

function FoodList(props) {
    const dispatch = useDispatch();
    const dummy = {...foodDummy}
    var list = null;
    for(var dummyCode in dummy) {
        if(dummyCode === props.code) {
            list = foodDummy[dummyCode]
        }
    }
    return list.map(item => {
        return (
            <div className="result-food-item jcce aice" key={item.id}>   
                <img src="https://png.pngtree.com/png-clipart/20220124/ourmid/pngtree-jjajangmyeon-korean-food-illustration-png-image_4353965.png" width={130}></img>
                <div className="result-food-name aice jcce">{item.name}</div>
                <button className="result-restaurant-button" onClick={ () => { dispatch(setNext()) } }>주변 맛집 찾기</button>
            </div>
        )
    })
}
function Result() {
    const food = useSelector( store => store.foodReducer);
    const foodCode = food.byCountry + food.byKind + food.bySpicy + food.bySoup;
    return (
        <div className="result-component">
            <div className="result-foodList-box jcce">
                <FoodList code={foodCode}></FoodList>
            </div>
        </div>
    );
}

export default Result;