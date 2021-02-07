import React, { memo, useEffect, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { 
  getPlayListAction
 } from "../../store/actionCreator";
 
import HRSongCategory from '../song-category'
import { 
  TopHeader
 } from "./style";

export default memo(function HRTopHeader() {
  //state and props
  const [showCategory, setshowCategory] = useState(false);
  //redux hooks
  const dispatch = useDispatch();
  const { currentCategory } = useSelector(state => {
    return state.playlist;
  }, shallowEqual)
  //other hooks
  useEffect(() => {
    dispatch(getPlayListAction())
  }, [dispatch])

  return (
    <TopHeader onClick={e => { showCategory && setshowCategory(false)}}>
      <div className="left">
        <span className="title">{currentCategory}</span>
        <button className="btn sprite_button" onClick={e => setshowCategory(!showCategory)}>
          选择分类
          <i className="icon sprite_icon2"></i>
        </button>
        {showCategory && <HRSongCategory/>}
      </div>
      <div className="right">
        <button className="btn sprite_button2">热门</button>
      </div>
    </TopHeader>
  )
})
