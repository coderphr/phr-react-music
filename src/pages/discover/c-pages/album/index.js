import React, { memo } from 'react'

import HRHotAlbum from './c-pages/hot-album';
import HRAllAlbum from './c-pages/all-album';
import { AblumWrap } from './style'

export default memo(function HRalbum() {
  return (
    <AblumWrap className="wrap-v2">
      <HRHotAlbum />
      <HRAllAlbum/>
    </AblumWrap>
  )
})
