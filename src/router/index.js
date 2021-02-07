import React from "react";
import { Redirect } from 'react-router-dom'
 


const HRDiscover  = React.lazy( _ => import("@/pages/discover"))
const HRFriend  = React.lazy(_ => import("@/pages/friend"))
const HRMine  = React.lazy(_ => import("@/pages/mine"))
const HRrecomend  = React.lazy(_ => import("@/pages/discover/c-pages/recomend"))
const HRtoplist  = React.lazy(_ => import("@/pages/discover/c-pages/toplist"))
const HRplaylist  = React.lazy(_ => import("@/pages/discover/c-pages/playlist"))
const HRdjradio  = React.lazy(_ => import("@/pages/discover/c-pages/djradio"))
const HRartist  = React.lazy(_ => import("@/pages/discover/c-pages/artist"))
const HRalbum  = React.lazy(_ => import("@/pages/discover/c-pages/album"))

// import HRDiscover from "@/pages/discover";
// import HRrecomend from "@/pages/discover/c-pages/recomend";
// import HRtoplist from "@/pages/discover/c-pages/toplist";
// import HRplaylist from "@/pages/discover/c-pages/playlist";
// import HRdjradio from "@/pages/discover/c-pages/djradio";
// import HRartist from "@/pages/discover/c-pages/artist";
// import HRalbum from "@/pages/discover/c-pages/album";
// import HRFriend from "@/pages/friend";
// import HRMine from "@/pages/mine";

const routes = [
  {
    path:'/',
    exact:true,
    render:() => (
      <Redirect to="/discover" />
    )
  },
  {
    path:'/discover', 
    component:HRDiscover,
    routes:[
      {
        path:'/discover',
        exact:true,
        render:() => (
          <Redirect to="/discover/recomend" />
        )
      },
      {
        path:'/discover/recomend',
        component:HRrecomend
      },
      {
        path:'/discover/toplist',
        component:HRtoplist
      },
      {
        path:'/discover/playlist',
        component:HRplaylist
      },
      {
        path:'/discover/djradio',
        component:HRdjradio
      },
      {
        path:'/discover/artist',
        component:HRartist
      },
      {
        path:'/discover/album',
        component:HRalbum
      },
    ]
  },
  {
    path:'/friend',
    component:HRFriend
  },
  {
    path:'/mine',
    component:HRMine
  }
]

export default routes