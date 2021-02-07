import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { discoverMenu } from "@/common/local-data";

import { 
  DiscoverWrap, 
  TopMenu
 } from "./style";

export default memo(function HRDiscover(props) {
  const { route } = props;
  return (
    <DiscoverWrap>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            discoverMenu.map(item => {
             return (
              <div className="menu" key={item.title}>
                <NavLink to={item.link} >{item.title}</NavLink>
              </div>
             )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrap>
  )
})
