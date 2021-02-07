import * as actionType from './constants';

const defaultState = {
  topList:[],
  listDetail:[]
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_LIST:
      return {...state, topList:action.topList}
    case actionType.CHANGE_LIST_DETAILS:
      return {...state, listDetail:action.listDetail}
    default:
      return state
  }
}

export default reducer