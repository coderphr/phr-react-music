import * as actionType from './constants'

const defaultState = {
  category:[],
  currentCategory:"全部",
  categorySongs:{}
}


export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_CATEGORY:
      return {...state, category:action.res};
    case actionType.CHANGE_CATEGORY_SONGS:
      return {...state, categorySongs:action.res}
    case actionType.CHANGE_CURRENT_CATEGORY:
      return {...state, currentCategory:action.res}
    default:
      return state
  }
}