import styled from 'styled-components';

export const TopRankingWrap = styled.div`
  padding-top:40px;
  background-color:#f9f9f9;
  .header {    
    padding: 0 10px 0 15px;
    font-size: 14px;
    color: #000;
  }
  .item {
    padding:10px 20px;
    display:flex;
    cursor: pointer;
    .info {
      margin-left:10px;
      display:flex;
      flex-direction:column;
      .name {
        color:#000
      }
      .update {
        font-size:12px;
        color:#999
      }
    }
    &:hover {
      background-color:#f4f2f2
    }
  }
  
  .active {
      background-color:#e6e6e6
    }
`