import styled from 'styled-components'

import sprite_o1 from "@/assets/img/sprite_01.png";

export const HeaderContent = styled.div`
  height:75px;
  background-color:#242424;

  .content {
    height:70px;

    display:flex;
    justify-content:space-between;
  }

  .divider {
    height:5px;
    background-color:#c20c0c
  }
`

export const HeaderLeft = styled.div`
  display:flex;
  .logo {
    display:block;    
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }

  .selectList {
    display:flex;
    line-height:70px;
    .selectItem {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${sprite_o1});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display:flex;
  align-items:center;
  color:#787878;

  .input {
    width:158px;
    border-radius:32px;
    /* 修改placeholder样式 */
    input {
      &::placeholder  {
        font-size:12px;
      }
    }
  }
  
  .button {
      width:90px;
      height:32px;
      margin:0 19px 0 12px;
      border-radius:20px;
      color:#ccc;
      border:1px solid #cccccc;
      text-align:center;
      line-height:32px;
    }

`