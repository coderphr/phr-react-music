import React, { memo,Fragment } from 'react'

import { 
  HeaderFooter,
  FooterLeft,
  FooterRight
 } from "./style";
import {
  footerLinks,
  footerImages
} from '@/common/local-data'


export default memo(function HRAppFooter() {
  return (
    <HeaderFooter>
      <div className="content wrap-v2">
        <FooterLeft>
          <div className="link">
            {
              footerLinks.map((item) => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link}>{item.title}</a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="copyRight">
            <span className="span">网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png">浙网文[2018]3506-263号</a>
          </div>
          <div className="report">
            <span className="span">违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </div>
          <div className="address">
            <a href="https://beian.miit.gov.cn/#/Integrated/index">粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
          </div>
        </FooterLeft>
        <FooterRight>
          {
            footerImages.map((item) => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link}>{item.link}</a>
                  <span className="title"></span>
                </li>
              )
            })
          }
        </FooterRight>
      </div>
    </HeaderFooter>
  )
})
