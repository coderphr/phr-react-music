import React, { memo, useEffect, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  getDjRadiosAction
} from '../../store/actionCreator'

import HRRadioRankingCover from '@/components/radio-ranking-cover';
import HRThemHeaderNormal from '@/components/them-header-normal';
import HRPagination from '@/components/pagination';
import {
  RankWrap
} from './style'

export default memo(function HRRank() {
  //state and props
  const [currentPage, setcurrentPage] = useState(1)
  //redux hooks
  const dispatch = useDispatch();
  const { currentId, rank } = useSelector( state => {
    return state.djradio
  },shallowEqual)
  //other hooks
  useEffect(() => {
    dispatch(getDjRadiosAction(currentId, 0))
  },[dispatch, currentId])

  //other handle
  function onPageChange(page, pageSize) {
    setcurrentPage(page)
    dispatch(getDjRadiosAction(currentId, page * 30))
  }

  return (
    <RankWrap>
      <HRThemHeaderNormal title="电台排行榜" />
      <div className="rank-list">
        {
          rank.map(item => {
            return (<HRRadioRankingCover info={item} key={item.id}/>)
          })
        }
      </div>
      <HRPagination total={1000}
                    currentPage={currentPage}
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </RankWrap>
  )
})
