import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getRecomendRankingAction } from '../../store/actionCreator';

import HRTopRanking from "@/components/top-ranking";
import HRThemHeader  from "@/components/them-header";
import {
  RankingWrap
} from './style'

export default memo(function HRRecomendRanking() {

  //redux相关hooks
  const { upranks, newranks, originranks } = useSelector( state => {
    return state.recomend
  },shallowEqual)
  const dispatch = useDispatch();

  //其他hooks
  useEffect(() => {
    dispatch(getRecomendRankingAction(19723756));
    dispatch(getRecomendRankingAction(3779629));
    dispatch(getRecomendRankingAction(2884035));
  },[dispatch])

  return (
    <RankingWrap>
      <HRThemHeader title="榜单" />
      <div className="content">
        <HRTopRanking info={upranks} />
        <HRTopRanking info={newranks} />
        <HRTopRanking info={originranks} />
      </div>
    </RankingWrap>
  )
})
