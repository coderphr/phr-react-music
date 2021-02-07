import React, { memo } from 'react'

import HRTopBanner from './c-pages/top-banner'
import HRHotRecomend from "./c-pages/hot-recomend";
import HRNewAlbum from "./c-pages/new-album";
import HRRecomendRanking from "./c-pages/red-rankimg";
import HRUserLogin from "./c-pages/user-login";
import HRSettleSinger from "./c-pages/settle-singer";
import {
  RecomendWrap,
  Content,
  RecomendLeft,
  RecomendRight
} from './style'

export default memo(function HRrecomend(props) {
  return (
    <RecomendWrap>
      <HRTopBanner></HRTopBanner>
      <Content className="wrap-v2">
       <RecomendLeft>
       <HRHotRecomend />
       <HRNewAlbum />
       <HRRecomendRanking />
       </RecomendLeft>
       <RecomendRight>
        <HRUserLogin />
        <HRSettleSinger />
       </RecomendRight>
      </Content>
    </RecomendWrap>
  )
})



