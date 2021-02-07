import React, { memo } from 'react';

import HRArtistCategory from './c-pages/artist-category';
import HRArtistList from './c-pages/artist-list';
import { HRArtistWrapper } from './style';

export default memo(function HRArtist() {
  return (
    <HRArtistWrapper>
      <div className="content wrap-v2">
        <HRArtistCategory/>
        <HRArtistList/>
      </div>
    </HRArtistWrapper>
  )
})
