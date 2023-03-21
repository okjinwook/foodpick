const SET_FOOD = 'foodSelectReducer/SET_FOOD';

export const setFood = data => ({ type : SET_FOOD, payload : data});

const selectFood = '';

function foodSelectReducer(state = selectFood, action) {
    if(action.type === SET_FOOD) {
        return action.payload;
    }
    else {
        return state;
    }
}
export default foodSelectReducer;