import styled from 'styled-components';

export const TopRankingWrap = styled.div`
  width:230px;
  height:472px;
  
  .header {
    height:120px;
    display:flex;
    justify-content:flex-start;
    align-items:center;

    .image {
      position:relative;
      width:80px;
      height:80px;
      margin-left:20px;

      img {
        width:100%;
      }

      .cover {
        position:absolute;
        width:80px;
        height:80px;
      }
    }
  }

  .info {
    width:116px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    margin-left:10px;
    font-weight:bold;

    .name {
      color:#000;
      font-size:16px;
      margin-top:-10px
    }

    .btn {
      padding:0;
      margin:10px 10px 0 0;
      width:22px;
      height:22px;
    }

    .play{
      background-position:-267px -205px;
    }

    .favor {
      background-position: -300px -205px;
    }
  }

  .list {
    .list_item {
      display:flex;
      align-items:center;
      margin-left:10px;
      width:100%;
      height:32px;
      .rank {
        display:inline-block;
        width:35px;
        height:32px;
        font-size:16px;
        line-height:32px;
        text-align:center;
      }

      :nth-child(-n+3) .rank{
        color:#c10d0c;
      }
      .list_info {
        color: #000;
        width:180px;
        display:flex;
        justify-content:space-between;

        .name {
          flex:1
        }

        .opera {
          display:flex;
          align-items:center;
          display:none;
          width: 82px;
          .btn {
            padding:0;
            width:17px;
            height:17px;
            margin-left:10px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }
          .addto {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }
          
        .favor {
            background-position: -297px -268px;}
         }
        }


      &:hover {
        .opera {
          display:block;
          display:flex;
          align-items:center;
          width: 82px;
        }
      }
    }
  }
  .footer {
    margin-right:20px;
    height:32px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    a {
    color:#000;
    }
  }
`