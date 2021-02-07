import styled from 'styled-components';

export const RankingHeader = styled.div`
  padding:50px 40px;
  width:740px;
  height:238px;
  display:flex;

  .left {
    position:relative;
    width:158px;
    height:158px;
    border:1px solid #cccccc;
    .cover {
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%)
    }
  }

  .right {
    margin-left:20px;
    display:flex;
    flex-direction:column;

    .title {
      margin-top:10px;
      font-size:20px;
      font-weight:normal;
    }

    .time {
      display:flex;
      align-items:center;
      margin-top:10px;
      .lock {
        margin-right:5px;
        width:13px;
        height:13px;
        background-position:-18px -682px;
      }
    }

    .operation {
      margin-top:30px;
    }
  }

`