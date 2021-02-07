import * as actionType from "./constants";

import { changePlayListAction } from '@/pages/player-bar/store/actionCreator'

import {
  getAllTopList,
  getListDetail
} from '@/services/topList.js';


const changeTopListAction = (res) => ({
  type:actionType.CHANGE_TOP_LIST,
  topList:res
})

const changeListDetailsAction = res => ({
  type:actionType.CHANGE_LIST_DETAILS,
  listDetail:res
})

export const getAllTopListAction = () => {
  return dispatch => {
    getAllTopList().then(data => {
      dispatch(changeTopListAction(data.list))
    })
  }
}

export const getListDetailAction = (id) => {
  return (dispatch, getState) => {
    getListDetail(id).then(data => {
      const playList = getState().playerbar.playerList;
      dispatch(changeListDetailsAction(data.playlist));
      if(playList.length === 0) {
        dispatch(changePlayListAction(data.playlist.tracks))
      } 
    })
  }
}