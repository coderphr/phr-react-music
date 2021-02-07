import styled from "styled-components";

export const TopHeader = styled.div`
position:relative;
display:flex;
justify-content:space-between;
align-items:center;
border-bottom:2px solid #c20c0c;
  .left {
    display:flex;
    align-items:center;

    .title {
      font-size:24px;
    }

    .btn {
      width:91px;
      height:31px;
      margin-left:10px;
      font-size:12px;
      cursor: pointer;
      color:#0c73cd;
      background-color:#fbfbfb;
      border:1px solid #e1e0e0;
      border-radius:5px;
      box-shadow:1px 1px 1px .5;
      .icon {
        margin-left:2px;
        display:inline-block;
        width:8px;
        height:5px;
        background-position:-70px -543px;
      }
    }
  }
  .right {
    .btn {
      width:46px;
      height:29px;
      color:#fff;
      border-radius:5px;
      background-position:0 0;
    }
  }
`