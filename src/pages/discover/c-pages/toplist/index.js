import React, { memo } from 'react';

import HRTopRaking from './c-pages/topraking';
import HRRankingHeader from "./c-pages/raking-header";
import HRRankingList from "./c-pages/raking-list";
import { 
  TopListWrap,
  TopListLeft,
  TopListRight
 } from "./style";

export default memo(function HRtoplist() {
  return (
    <TopListWrap className="wrap-v2">
      <TopListLeft>
        <HRTopRaking/>
      </TopListLeft>
      <TopListRight>
        <HRRankingHeader/>
        <HRRankingList/>
      </TopListRight>
    </TopListWrap>
  )
})
