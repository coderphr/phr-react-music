import React, { memo } from 'react'

import {
  ThemHeaderWrap
} from "./style";

export default memo(function HRThemHeader(props) {
  const { title, keyword = [] } = props;
  return (
    <ThemHeaderWrap className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {
            keyword.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </ThemHeaderWrap>
  )
})
