import styled from "styled-components";

export const NewAlbumWrap = styled.div`
  margin-top:20px;

  .content {
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:20px;
    width:100%;
    height:186px;
    background-color:#f5f5f5;
    border:1px solid #d3d3d3;

    .arrow {
      width:17px;
      height:17px;
      cursor: pointer;
    }

    .arrow_left {
      background-position: -260px -75px;
    }

    .arrow_right {
      background-position: -300px -75px;
    }

    .album {
      width:645px;
      height:150px;

      .page {
        display:flex !important; 
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
