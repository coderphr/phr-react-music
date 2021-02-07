import * as actionType from './constants'

const defaultState = {
  song:{},
  playerList:[],
  currentSongIndex:0,
  sequence:0, // 0循环   1随机  2单曲
  lyricList:[],
  currentLyricIndex:0
 }

function reducer( state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_SONG_DETAIL:
      return {...state, song:action.song};
    case actionType.CHANGE_PLAYER_LIST:
      return {...state, playerList:action.playerList}
    case actionType.CHANE_CURRENT_SONG_INDEX:
      return {...state, currentSongIndex:action.index}
    case actionType.CHANGE_SEQUENCE:
      return {...state, sequence:action.index}
    case actionType.CHANGE_LYRIC_LIST:
      return {...state, lyricList:action.lyricList}
    case actionType.CHANGE_CURRENT_LYRIC_INDEX:
      return {...state, currentLyricIndex:action.index}
    default:
      return state
  }
}


export default reducer;