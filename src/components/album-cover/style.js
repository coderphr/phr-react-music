import styled from "styled-components";

export const AlbumCoverWrap = styled.div`
  margin-left: 10px;
  .ablum-image {
    position:relative;
    width:${props => props.width + "px"};
    height:${props => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;

    img {
      width:${props => props.bgImg + "px"};
      height:100%;
    }

    .cover {
      position:absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position:0 ${props => props.bgp};
      text-indent: -9999px;
    }
  }

  .ablum-info {
    width:${props => props.width + "px"};
    font-size:12px;
    .name {
      color:#000;
    }
    .artist {
      color:#333;
    }
  }
`