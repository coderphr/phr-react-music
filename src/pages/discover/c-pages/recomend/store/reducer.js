import * as Recomend from "./constants";


const defaultState = {
  topBanner: [],
  hotRecomend: [],
  albums: [],
  upranks: [],
  newranks: [],
  originranks: [],
  singers:[]
}

const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case Recomend.CHANGE_BANNER:
      return { ...state, topBanner: action.banner }
    case Recomend.CHANGE_HOT_RECOMEND:
      return { ...state, hotRecomend: action.recomend }
    case Recomend.CHANGE_NEW_ALBUM:
      return { ...state, albums: action.albums }
    case Recomend.CHANGE_UP_RANK:
      return { ...state, upranks: action.upranks }
    case Recomend.CHANGE_NEW_RANK:
      return { ...state, newranks: action.newranks }
    case Recomend.CHANGE_ORIGIN_RANK:
      return { ...state, originranks: action.originranks }
    case Recomend.CHANGE_HOME_SINGERS:
      return {...state,singers:action.singers}
    default:
      return state
  }
}
export default reducer