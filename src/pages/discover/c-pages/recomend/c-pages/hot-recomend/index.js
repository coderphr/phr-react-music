import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotRecomendAction } from '../../store/actionCreator'

import {
  HotRecomendWrap
} from "./styled";
import HRThemHeader from '@/components/them-header';
import HRCoverImage from "@/components/cover-image";

export default memo(function HRHotRecomend() {
  //state

  //redux相关hooks
  const { hotRecomend } = useSelector(state => {
    return state.recomend;
  }, shallowEqual);
  //其他hooks
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecomendAction(8))
  }, [dispatch])

  return (
    <div>
      <HotRecomendWrap>
        <HRThemHeader title="热门推荐" keyword={['华语', '流行', '摇滚', '民谣', '电子']}></HRThemHeader>
        <div className="recomend-list">
          {
            hotRecomend.map(item => {
              return (
                <HRCoverImage key={item.id} info={item} />
              )
            })
          }
        </div>
      </HotRecomendWrap>
    </div>
  )
})
