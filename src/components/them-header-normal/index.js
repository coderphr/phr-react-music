import React, { memo } from 'react'

import {
  ThemHeaderNormal
} from './style'

export default memo(function HRThemHeaderNormal(props) {
  //state and props
  const { title } = props;
  return (
    <ThemHeaderNormal>
      <div className="title">{title}</div>
    </ThemHeaderNormal>
  )
})
