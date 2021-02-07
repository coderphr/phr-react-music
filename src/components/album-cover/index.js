import React, { memo } from 'react'

import { getSizeImg } from '@/utils/format-utils'

import {
  AlbumCoverWrap
} from "./style";

export default memo(function HRAlbumCover(props) {
  const { info, size, width, bgImg, bgp } = props;
  return (
    <AlbumCoverWrap size={size} width={width} bgImg={bgImg} bgp={bgp}>
      <div className="ablum-image">
        <img src={getSizeImg(info.picUrl,140)} alt=""></img>
        <a href="todo" className="cover image_cover">{ info.name }</a>
      </div>
      <div className="ablum-info">
        <div className="name text-nowrap">
          <a href="todo">{info.name}</a>
        </div>
        <div className="artist text-nowrap">
          <a href="todo">{info.artists[0].name}</a>
        </div>
      </div>
    </AlbumCoverWrap>
  )
})
