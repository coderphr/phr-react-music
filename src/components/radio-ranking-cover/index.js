import React, { memo } from 'react'

import { getSizeImg } from '@/utils/format-utils';

import {
  RadioRankinCover
} from './style'

export default memo(function HRRadioRankingCover(props) {
  //state and props 
  const { info } = props;
  return (
    <RadioRankinCover className="rank-item">
      <img src={getSizeImg(info.picUrl, 120)} alt=""></img>
      <div className="info">
        <h2 className="name">{info.name}</h2>
        <div className="nickname">
          <i className="sprite_icon2 left"></i>
          <span>{info.dj.nickname}</span>
        </div>
        <div className="count">
          <span className="phase">共{info.programCount}期</span>
          <span className="subscribe">订阅{info.subCount}次</span>
        </div>
      </div>
    </RadioRankinCover>
  )
})
