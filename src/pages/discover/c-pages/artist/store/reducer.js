import * as actionTypes from './constants';

const defaultState = {
  currentArea: 7,
  currentType: {
    name: "推荐歌手",
    type: 1
  },
  artistList: []
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_AREA:
      return {...state, currentArea:action.currentArea};
    case actionTypes.CHANGE_CURRENT_TYPE:
      return {...state, currentType:action.currentType};
    case actionTypes.CHANGE_ARTIST_LIST:
      return {...state, artistList:action.artistList};
    default:
      return state
  }
}

export default reducer;