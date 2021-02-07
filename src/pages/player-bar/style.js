import styled from "styled-components";

import progress_bar from "@/assets/img/progress_bar.png";
import sprite_icon from "@/assets/img/sprite_icon.png";

export const PlayerBarWrap = styled.div`
  width:100%;
  height:${props =>  props.isClock ? "53px" : "7px" };
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  background-position:0 0;
  background-repeat:repeat;
  transition: all .2s linear;
  
  &:hover {
    height:53px;
  }
  .mask {    
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 77px;
    background-position: 0 -380px;

    .btn {
      width:18px;
      height:18px;
      margin:6px 0 0 17px;
      background-position:${props => props.isClock ? "-100px -380px" : "-80px -380px"};
    }
  }

  .content {
    margin-top:6px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
  }
`

export const Control = styled.div`
  width:137px;
  height:42px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  .btn {
    width:28px;
    height:28px;
    margin-right:10px;
  }

  .prev {
    background-position:0 -130px;
  }
  
  .play {
    width:36px;
    height:36px;
    background-position:0 ${props =>  props.isPlay ? "-165px" : "-204px"};
  }

  .next {
    background-position:-80px -130px
  }
`

export const PlayInfo = styled.div`
  display:flex;
  justify-content:flex-start;
  .image {
    position:relative;
    width:34px;
    height:34px;
    .mask {    
      position: absolute;
      top: 0px;
      left: 0px;
      display: block;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }

    img {
      border-radius:5px;
    }
  }

  .info {
    display:flex;
    flex-direction:column;
    margin-left:15px;
    color:#e8e8e8;

    .artist {
      margin-left:15px;
      color:#9b9b9b;
    }

    .progess {
      margin-left:-5px;
      height:9px;
      display:flex;
      align-items:center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${progress_bar}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${progress_bar}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${sprite_icon}) 0 -250px;
        }
      }

      .time {

        .now-time {
          color:#a1a1a1
        }
        .divider {
          margin: 0 5px;
          color:#797979
        }

        .duration {
          color:#797979
        }
      }
    }
  }
`

export const Operator = styled.div`
  margin-left:10px;
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px"
          case 2:
            return "-66px -344px"
          default:
            return "-3px -344px"
        }
      }};
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;
    }

  }
`