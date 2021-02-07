import React, { memo, useEffect } from 'react'

import { useDispatch } from 'react-redux';

import { 
  getSongListAction
 } from "./store/actionCreator";

import HRTopHeader from "./c-pages/top-header";
import HRSongList from "./c-pages/song-list";
import { 
  PlayListWrap
 } from "./style";

export default memo(function HRplaylist() {
  //state and props

  //redux hooks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongListAction(0))
  },[dispatch])

  return (
    <PlayListWrap>
      <div className="content wrap-v2">
        <HRTopHeader/>
        <HRSongList/>
      </div>
    </PlayListWrap>
  )
})
