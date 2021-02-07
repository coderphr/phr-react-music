import styled from "styled-components";

export const DiscoverWrap = styled.div`
  .top {
    height:30px;
    background-color:#c20c0c;
  }
`

export const TopMenu = styled.div`
  display:flex;
  padding-left:183px;
  .menu {
    margin:3px 26px 0;
    a {
      color:#ffffff;
      text-decoration:none;
      z-index:1
    }

    .active {
      position:relative;
      &::before {
        content:'';
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        display:block;
        width:180%;
        height:24px;
        background-color:#9b0909;
        border-radius:20px;
        z-index:-1
      }
      }
  }
`