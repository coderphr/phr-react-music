import styled from 'styled-components';

export const SongClassify = styled.div`
  height:${props => props.height + "px"};
  display:flex;
  text-align:left;
  line-height:44px;
  align-items:center;
  .left {
    margin-left:20px;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    width:71px;
    .tite {
      display:inline-block;
    }
  }
  
  .right {
    display:flex;
    flex-wrap:wrap;
    padding-left:10px;
    width:640px;
    height:100%;
    border-left:1px solid #e6e6e6;
    font-size:12px;
    color:#333;
    .item {
      margin-bottom:-20px;
      a {
        white-space:nowrap;
      }
    }
    .slider {
      margin:0 10px;
      color:#dad8da;
    }
  }
`