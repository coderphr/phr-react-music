import { combineReducers } from 'redux'

import  recomendReducer  from "../pages/discover/c-pages/recomend/store";
import playerReducer from '../pages/player-bar/store';
import topListReducer from '../pages/discover/c-pages/toplist/store';
import playlistReducer from '../pages/discover/c-pages/playlist/store';
import djRadioReducer from '../pages/discover/c-pages/djradio/store';
import ablumReducer from '../pages/discover/c-pages/album/store';
import artistReducer from '../pages/discover/c-pages/artist/store';

const reducer = combineReducers({
  recomend:recomendReducer,
  playerbar:playerReducer,
  toplist:topListReducer,
  playlist:playlistReducer,
  djradio:djRadioReducer,
  album:ablumReducer,
  artist:artistReducer
})

export default reducer;