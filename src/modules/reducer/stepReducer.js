// 액션
const SET_NEXT = 'stepReducer/SET_NEXT'
const SET_PREV = 'stepReducer/SET_PREV'

// 액션 생성 함수
export const setNext = () => { return {type : SET_NEXT }};
export const setPrev = () => { return {type : SET_PREV }};

const mode = 0;


function stepReducer(state = mode, action) {
    if(action.type === SET_PREV) {
      if(state === 0) {
        return state;
      }
      else {
        return state - 1;
      }
    }
    else if(action.type === SET_NEXT) {
      if(state === 5) {
        return state;
      }
      else {
        return state + 1;
      }
    }
    else {
      return state;
    }
}

export default stepReducer;