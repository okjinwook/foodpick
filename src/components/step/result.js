import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../../css/result.css'
import {foodDummy} from '../../foodDummy';
import { setFood } from "../../modules/reducer/foodSelectReducer";
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
                <img src={item.img} width={140}></img>
                <div className="result-food-name aice jcce">{item.name}</div>
                <button className="result-restaurant-button" onClick={ () => { 
                    dispatch(setNext()) 
                    dispatch(setFood(item.name))
                    } }>주변 맛집 찾기</button>
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