import * as actionType from './constants';

import {
  getHotAlbum,
  getAllAlbum
} from '@/services/album'

const changeHotAlbumAction = res => ({
  type:actionType.CHANGE_HOT_ALBUM,
  res
})

const changeAllAlbumAction = res => ({
  type:actionType.CHANGE_ALL_ALBUM,
  res
})

const changeAlbumTotal = res => ({
  type:actionType.CHANGE_TOTAL,
  res
})

export const getHotAlbumAction = () => {
  return dispatch => {
    getHotAlbum().then(data =>{
      const res = data.weekData.slice(0,10);
      dispatch(changeHotAlbumAction(res))
    })
  }
}

export const getAllAlbumAction = (offset) => {
  return dispatch => {
    getAllAlbum(30,offset).then(data => {
      dispatch(changeAlbumTotal(data.total))
      dispatch(changeAllAlbumAction(data.albums))
    })
  }
}