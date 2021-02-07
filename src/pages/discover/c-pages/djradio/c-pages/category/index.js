import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import  classname  from 'classnames';
import {
  getCateListAction,
  changeCurrentId
} from '../../store/actionCreator';

import {
  Category,
  CateImgItem
} from './style'

export default memo(function HRCategory() {
  //props and state
  //redux hook
  const dispatch = useDispatch();
  const { category, currentId } = useSelector( state => {
    return state.djradio;
  }, shallowEqual)
  //other hook
  useEffect(() => {
    dispatch(getCateListAction())
  },[dispatch])
  return (
    <Category>
      {
        category.map((item, index) => {
          return (
            <div key={item.id}
                 className={classname("item",{"active" : currentId === item.id})}
                 onClick={ e => dispatch(changeCurrentId(item.id)) }>
              <CateImgItem className="image" imgUrl={item.picWebUrl} />
              <span>{item.name}</span>
            </div>
          )
        })
      }
    </Category>
  )
})
