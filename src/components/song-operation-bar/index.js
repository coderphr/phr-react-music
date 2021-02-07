import React, { memo, useCallback } from 'react'

import { getAllMuiscAction } from "@/pages/player-bar/store/actionCreator";

import { SongOperationBar } from "./style";
import { useDispatch } from 'react-redux';

export default memo(function HRSongOperationBar(props) {
  //state and props
  const { playList,commentCount, shareCount, subscribedCount, downloadTitle } = props;
  //redux hook
  const dispatch = useDispatch()
  //other function
  const pushList = useCallback(() => {
    dispatch(getAllMuiscAction(playList));
  },[playList, dispatch])

  return (
    <SongOperationBar>
      <span className="play">
        <a href="/" onClick={e => { e.preventDefault(); pushList() }}
          className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span> 播放</span>
          </span>
        </a>
        <a href="/abc" className="add-icon sprite_button">+</a>
      </span>
      <a href="/abc" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{subscribedCount}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareCount}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentCount}</i>
      </a>
    </SongOperationBar>
  )
})
