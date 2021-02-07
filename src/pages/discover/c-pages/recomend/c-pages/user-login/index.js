import React, { memo } from 'react'

import {
  UserLoginWrap
} from './style'

export default memo(function HRUserLogin() {
  return (
    <UserLoginWrap>
      <div className="user-login sprite_02">
        <span className="desc">
         登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
        </span>
        <button className="btn sprite_02">用户登录</button>
      </div>
    </UserLoginWrap>
  )
})
