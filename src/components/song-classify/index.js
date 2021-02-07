import React, { memo } from 'react'

import {
  SongClassify
} from './style'

export default memo(function HRSongClassify(props) {
  const { title, info, height } = props;
  return (
    <SongClassify height={height}>
      <div className="left">
        <span className="tite">{title}</span>
      </div>
      <div className="right">
        {
          info.map(item => {
            return (
              <div className="item" key={item.name}>
                <a href="todo">{item.name}</a>
                <span className="slider">|</span>
              </div>
            )
          })
        }
      </div>
    </SongClassify>
  )
})
