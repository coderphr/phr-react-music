import React, { memo } from 'react'

import HRCategory from './c-pages/category'
import HRRadioStation from './c-pages/radio-station'
import HRRank from './c-pages/rank'


import { 
  Djradio
 } from "./style";

export default memo(function HRdjradio() {
  return (
    <Djradio className="wrap-v2">
      <HRCategory/>
      <HRRadioStation/>
      <HRRank />
    </Djradio>
  )
})
