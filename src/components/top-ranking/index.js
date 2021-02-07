import React, { memo,useCallback, } from 'react'

import { useDispatch } from "react-redux";

import {
  getSongDetailAction
} from '@/pages/player-bar/store/actionCreator';

import { 
  TopRankingWrap
 } from "./style";

export default memo(function HRTopRanking(props) {
  //staet and props
  const { info }  = props;

  //redux hook
   const dispatch = useDispatch();

  //other hooks
  const playMusic =  useCallback((index) =>{
    dispatch(getSongDetailAction(index))
  },[dispatch])

  //handler function

  const tracks = info.tracks || []
  return (
    <TopRankingWrap>
      <div className="header">
        <div className="image">
          <img src={info.coverImgUrl} alt=""></img>
          <a href="/todo" className="cover image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="todo" className="name">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0,10).map((item, index) => {
            return (
              <div className="list_item" key={item.id}>
                <span className="rank">{index + 1}</span>
                <div className="list_info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="opera">
                    <button className="btn play sprite_02" 
                            onClick={e => {playMusic(item.id)}}></button>
                    <button className="btn addto sprite_icon2"></button>
                    <button className="btn favor sprite_02">+</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="todo" className="more">查看全部></a>
      </div>
    </TopRankingWrap>
  )
})
