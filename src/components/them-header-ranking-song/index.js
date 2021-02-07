import React, { memo } from 'react'

import {
  ThemHeader
} from './style'

export default memo(function HRThemHeaderSong(props) {
  //state and props
  const {playCount, songCount} = props;

  return (
    <ThemHeader>
      <div className="left">
        <div className="title">歌曲列表</div>
        <div className="songcount">{songCount}首歌</div>
      </div>
      <div className="right">播放：<span className="playcount">{playCount}</span>次</div>
    </ThemHeader>
  )
})
