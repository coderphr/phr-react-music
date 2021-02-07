import { getSongDetail, getLyric } from "@/services/player";

import { parseLyric } from '@/utils/parse-lyric';
import * as actionType from './constants'



export const changeSongDetailAction = (res) => ({
  type: actionType.CHANGE_SONG_DETAIL,
  song: res
})

export const changePlayListAction = (res) => ({
  type: actionType.CHANGE_PLAYER_LIST,
  playerList: res
})

export const changeCurrentSongIndexAction = (index) => ({
  type: actionType.CHANE_CURRENT_SONG_INDEX,
  index
})

const changeLyricListAction = (lyricList) => ({
  type: actionType.CHANGE_LYRIC_LIST,
  lyricList
})

export const changeCurrentLyricIndexACtion = (index) => ({
  type: actionType.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

export const changeSequenceAction = (index) => ({
  type: actionType.CHANGE_SEQUENCE,
  index
})


export function getSongDetailAction(ids) {
  return (dispatch, getState) => {
    const playerList = [...getState().playerbar.playerList];
    const songIndex = playerList.findIndex(item => item.id === ids);
    if (songIndex === -1) { // 没找到
      getSongDetail(ids).then(data => {
        console.log(data)
        playerList.push(data.songs[0]);
        dispatch(changePlayListAction(playerList));
        dispatch(changeSongDetailAction(data.songs[0]));
        dispatch(changeCurrentSongIndexAction(playerList.length - 1));
        dispatch(getLyricAction(ids))
      })
    } else { //找到了
      dispatch(changeSongDetailAction(playerList[songIndex]));
      dispatch(changeCurrentSongIndexAction(songIndex));
      dispatch(getLyricAction(playerList[songIndex].id))
    }

  }
}

export const changeCurrentSongIndexAndMusicAction = (tag) => {
  return (dispatch, getState) => {
    let currentIndex = getState().playerbar.currentSongIndex;
    const playlist = getState().playerbar.playerList;
    const sequence = getState().playerbar.sequence;
    if (sequence === 0) {
      currentIndex += tag;
    } else if (sequence === 1) {
      let newIndex = Math.floor(Math.random() * playlist.length)
      while (currentIndex === newIndex) {
        newIndex = Math.floor(Math.random() * playlist.length)
      }
      currentIndex = newIndex;
    }

    if (currentIndex >= playlist.length) {
      currentIndex = 0
    } else if (currentIndex < 0) {
      currentIndex = playlist.length - 1
    }
    dispatch(changeCurrentSongIndexAction(currentIndex));
    dispatch(changeSongDetailAction(playlist[currentIndex]));
    dispatch(getLyricAction(playlist[currentIndex].id))
  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(data => {
      const lyric = data.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricListAction(lyricList))
    })
  }
}

export const getAllMuiscAction = (playlist) => {
  return dispatch => {
    dispatch(changePlayListAction(playlist))
    dispatch(changeSongDetailAction(playlist[0]))
  }
}