import React, { memo } from 'react'

import { getCount, getSizeImg } from "@/utils/format-utils";

import {
  CoverImage
} from './styled'

export default memo(function HRCoverImage(props) {
  const { info } = props;
  const picUrl = info.picUrl || info.coverImgUrl || ""
  return (
    <CoverImage>
      <div className="cover-top">
        <img src={getSizeImg(picUrl, 140)} alt=""></img>
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap">
        by {info.copywriter || info.creator.nickname}
      </div>
    </CoverImage>
  )
})
