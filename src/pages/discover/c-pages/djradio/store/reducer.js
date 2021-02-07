import * as actionType from './constants';

const defaultState = {
  category:[],
  recomend:[],
  rank:[],
  currentId:0
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CATE_LIST:
      return {...state, category:action.res}
    case actionType.CHANGE_CURRENT_ID:
      return {...state, currentId:action.id}
    case actionType.CHANGE_RECOMEND:
      return {...state, recomend:action.res}
    case actionType.CHANGE_DJRADIOS:
      return {...state, rank:action.res}
    default:
      return state;
  }
}