import React, { memo, useEffect, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSizeImg, formatDate } from '@/utils/format-utils'
import { getListDetailAction } from '../../store/actionCreator';

import HRSongOperationBar from '@/components/song-operation-bar'
import {
  RankingHeader
} from './style'

export default memo(function HRRankingHeader() {
  //props and state
  const [updateFrequency, setupdateFrequency] = useState("")
  //redux hook
  const dispatch = useDispatch();
  const { listDetail, topList } = useSelector(state => {
    return state.toplist;
  }, shallowEqual)

  //other hook 
  useEffect(() => {
    dispatch(getListDetailAction(19723756))
  }, [dispatch])

  useEffect(() => {
    const result = topList && listDetail && topList.find(item => item.id === listDetail.id);
    if (result) {
      setupdateFrequency(result.updateFrequency)
    }
  }, [listDetail, topList])

  return (
    <RankingHeader>
      <div className="left">
        <div className="cover">
          <img src={getSizeImg(listDetail.coverImgUrl, 150)} alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="title">{listDetail.name}</div>
        <div className="time">
          <div className="lock sprite_icon2"></div>
          <div className="update">最近更新：{formatDate(listDetail.updateTime, "MM月dd日")}（{updateFrequency}）</div>
        </div>
        <div className="operation">
          <HRSongOperationBar subscribedCount={listDetail.subscribedCount}
            shareCount={listDetail.shareCount}
            commentCount={listDetail.commentCount}
            downloadTitle="下载"
            playList= {listDetail.tracks}
            trackCount = {listDetail.trackCount}/>
        </div>
      </div>
    </RankingHeader>
  )
})
