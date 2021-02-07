import styled from "styled-components";

export const Category = styled.div`
  width:900px;
  height:194px;
  display:flex;
  flex-wrap:wrap;

  .item {
    width:70px;
    height:72px;
    margin-right:20px;
    display:flex;
    flex-direction:column;
    align-items:center;

    &:hover {
      background-color:#eee;
    }

    &.active {
      border:2px solid #df6e6e;
      border-radius:2px;
      color:#df6e6e;
      .image {
        background-position:-48px 0;
      }
    }
  }


`

export const CateImgItem = styled.div`
width:48px;
height:48px;
background:url(${props => props.imgUrl})
`