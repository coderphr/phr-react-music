import * as actionType from './constants'

import { handleSongCategory } from "@/utils/handle-data";

import {
  getPlayList,
  getSongList
} from '@/services/playlist'


const changeCategoryAction = (res) => ({
  type: actionType.CHANGE_CATEGORY,
  res
})

const changeSongListAction = (res) => ({
  type:actionType.CHANGE_CATEGORY_SONGS,
  res
})

export const changeCurrentCategoryAction = name => ({
  type:actionType.CHANGE_CURRENT_CATEGORY,
  res:name
})

export const getPlayListAction = () => {
  return dispatch => {
    getPlayList().then(data => {
      const categoryData =  handleSongCategory(data);
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

export const getSongListAction = (page) => {
  return (dispatch, getState) => {
    const name = getState().playlist.currentCategory;
    getSongList(name, page * 35).then(data => {
      dispatch(changeSongListAction(data))
    })
  }
}