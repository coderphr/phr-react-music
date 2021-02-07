import React, { memo, useCallback } from 'react'

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getSizeImg, formatDate } from '@/utils/format-utils';
import { getSongDetailAction } from "@/pages/player-bar/store/actionCreator";

import HRThemHeaderSong from "@/components/them-header-ranking-song";
import { RankingList } from "./style";

export default memo(function HRRankingList() {
  //state and props

  //redux hook
  const dispatch = useDispatch();
  const { listDetail } = useSelector(state => {
    return state.toplist;
  }, shallowEqual)

  //other handler
  const trackIds = listDetail.trackIds && listDetail.trackIds.length;
  const tracks = listDetail.tracks || [];

  const handlePlay = useCallback((index) => {
    const id = listDetail.tracks[index].id;
    dispatch(getSongDetailAction(id))
  }, [dispatch, listDetail])

  return (
    <RankingList>
      <HRThemHeaderSong songCount={trackIds}
        playCount={listDetail.playCount} />
      <div className="list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item, index) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span>{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            <img src={getSizeImg(item.al.picUrl, 50)} alt="" /> : null
                        }
                        <span className="play sprite_table" 
                              onClick={e => {handlePlay(index)}}></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>
                    <td>{formatDate(item.dt,"mm:ss")}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingList>
  )
})
