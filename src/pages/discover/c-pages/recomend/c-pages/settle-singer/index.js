import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getHomeSongersAction } from "../../store/actionCreator";
import { getSizeImg } from '@/utils/format-utils';

import {
  SettleSingerWrap
} from "./style";

export default memo(function HRSettleSinger() {

  const { singers } = useSelector(state => {
    return state.recomend
  }, shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeSongersAction(5))
  }, [dispatch])

  return (
    <SettleSingerWrap>
      <div className="singer">
        <div className="header">
          <div className="left">热门歌手</div>
          <div className="right">查看全部></div>
        </div>
        <div className="singer-list">
        {
          singers.map(item => {
            return (
              <div className="list-item" key={item.id}>
                <img src={getSizeImg(item.picUrl, 140)}></img>
                <div className="name">{item.name}</div>
              </div>
            )
          })
        }
        </div>
      </div>
    </SettleSingerWrap>
  )
})