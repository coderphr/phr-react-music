import styled from "styled-components";

import sprite_table from '@/assets/img/sprite_table.png'

export const RankingList = styled.div`
  .list {
    width:670px;
    margin:0 auto;
    border-top:2px solid #c20c0c;
    font-size:10px;
    table {
      width:100%;
      border:1px solid #d9d9d9;
      th {
        height:38px;
        line-height:38px;
        background:url(${sprite_table});
        border: 1px solid #ddd;
        color:#666;
        border-width: 0 0 1px 1px;
        padding-left: 10px;
      }
      .ranking {
          width:78px;
          border-left: none;
        }

        .title {
          width:327px;
        }

        .duration {
          width:90px
        }

        .singer {
          width:173px;
        }
    }

    tbody {
        td {
          padding: 6px 10px;
        }

        tr:nth-child(2n) {
          background-color: #fff;
        }

        tr:nth-child(2n+1) {
          background-color: #f7f7f7;
        }

        .rank-num {
          display: flex;

          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }

          .new {
            width: 16px;
            height: 17px;
            margin-left: 12px;
            background-position: -67px -283px;
          }
        }

        .song-name {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }

          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
          }

          .name {
            margin-left: 10px;
          }
        }
      }
  }
`