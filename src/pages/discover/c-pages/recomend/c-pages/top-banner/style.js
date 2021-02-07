import styled from 'styled-components'

import DLImg from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'
export const BannerWrap = styled.div`
  background:url(${ props => props.bgImg }) center center/6000px;
  .banner {
    position:relative;
    height:270px;

    display:flex;
  }
`

export const BannerLeft = styled.div`
  width:730px;

  .banner-item {
    .img {
      overflow:hidden;
      width:100%;
    }
  }
`
export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${DLImg});
`

export const BannerControl = styled.div`
  position:absolute;
  left:0%;
  right:0%;
  top:50%;
  transform:translateY(-50%);
  button {
    position:absolute;
    width:37px;
    height:63px;
    background:url(${banner_sprite});
    background-color:transparent;
  }

  button:hover {
    background:rgba(0,0,0, .1);
  }

  .pre {
    left:-68px;
    background-position:0 -360px;
  }

  .next {
    right:-68px;
    background-position:0 -508px;
  }
`