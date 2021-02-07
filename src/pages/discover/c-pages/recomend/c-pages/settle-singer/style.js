import styled from 'styled-components';

export const SettleSingerWrap = styled.div`
  width:250px;
  padding:20px;
  .header {
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #cccccc;
    padding-bottom:5px;
    .left{
      color:#000
    }
    .right{
      color:#666
    }
  }

  .singer-list {
    .list-item {
      margin:20px 0;
      display:flex;
      align-items:center;
      width:210px;
      height:62px;

      img {
        width:62px;
        height:62px;
      }

      .name {
        padding-left:20px;
        width:148px;
        height:62px;
        border:1px solid #cccccc;
        background-color:#fafafa;
        border-left:none;
        line-height:62px;
        
      }

      .name:hover {
        background-color:#f4f4f4;
      }
    }
  }
`