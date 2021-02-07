import * as actionType from './constants'

const defaultState = {
  hotAlbum:[],
  allAlbum:[],
  total:0,
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_HOT_ALBUM:
      return {...state, hotAlbum:action.res}
    case actionType.CHANGE_ALL_ALBUM:
      return {...state, allAlbum:action.res}
    case actionType.CHANGE_TOTAL:
      return {...state, total:action.res}
    default:
      return state
  }
}