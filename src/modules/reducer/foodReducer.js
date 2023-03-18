// 액션
const SET_COUNTRY = 'foodReducer/SET_COUNTRY'
const SET_KIND = 'foodReducer/SET_KIND'
const SET_SPICY = 'foodReducer/SET_SPICY'
const SET_SOUP = 'foodReducer/SET_SOUP'

// 액션 생성 함수
export const setCountry = data => ({ type : SET_COUNTRY, payload: data });
export const setKind = data => ({ type : SET_KIND, payload: data });
export const setSpicy = data => ({ type : SET_SPICY, payload: data });
export const setSoup = data => ({ type : SET_SOUP, payload: data });

const food = {
    byCountry : '',
    byKind : '',
    bySpicy : '',
    bySoup : '',
}
function foodReducer(state = food, action) {
    if(action.type === SET_COUNTRY) {
        return {
            ...state,
            byCountry : action.payload,
        };
    }
    else if(action.type === SET_KIND) {
        return {
            ...state,
            byKind : action.payload,
        };
    }
    else if(action.type === SET_SPICY) {
        return {
            ...state,
            bySpicy : action.payload,
        };
    }
    else if(action.type === SET_SOUP) {
        return {
            ...state,
            bySoup : action.payload,
        };
    }
    else {
        return state;
    }
}

export default foodReducer;