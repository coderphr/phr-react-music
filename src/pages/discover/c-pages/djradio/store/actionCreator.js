import * as actionType from './constants';

import {
  getDjRadioCateList,
  getDjradioRecomend,
  getDjradios
} from '@/services/djradio'

const changeCateListAction = (res) => ({
  type:actionType.CHANGE_CATE_LIST,
  res
})

const changeRecomendAction = res => ({
  type:actionType.CHANGE_RECOMEND,
  res
})

const changeDjRadiosAction = res => ({
  type:actionType.CHANGE_DJRADIOS,
  res
})

export const changeCurrentId = (id) => {
  return {
    type:actionType.CHANGE_CURRENT_ID,
    id
  }
}

export const getCateListAction = () => {
  return dispatch => {
    getDjRadioCateList().then(data => {
      dispatch(changeCateListAction(data.categories))
      const currentId = data.categories[0].id;
      dispatch(changeCurrentId(currentId))
    })
  }
}

export const getDjradioRecomendAction = type => {
  return dispatch => {
    getDjradioRecomend(type).then(data => {
      dispatch(changeRecomendAction(data.djRadios))
    })
  }
}

export const getDjRadiosAction = (curId, offset) => {
  return dispatch => {
    getDjradios(curId, 30, offset).then(data =>{
      dispatch(changeDjRadiosAction(data.djRadios))
    })
  }
}