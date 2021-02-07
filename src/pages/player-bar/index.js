import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Slider, message } from 'antd';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeSequenceAction, changeCurrentSongIndexAndMusicAction, changeCurrentLyricIndexACtion } from "./store/actionCreator";
import {
  getSizeImg,
  formatDate,
  getPlaySong
} from '@/utils/format-utils';

import {
  PlayerBarWrap,
  Control,
  PlayInfo,
  Operator
} from "./style";

export default memo(function HRPlayerBar() {
  //state
  const [currentTime, setcurrentTime] = useState(0);
  const [currentValue, setcurrentValue] = useState(0);
  const [isPlay, setisPlay] = useState(false);
  const [isChangeing, setisChangeing] = useState(false);
  const [isClock, setisClock] = useState(false)
  // //redux
  const dispatch = useDispatch();
  const { song, sequence, lyricList, currentLyricIndex } = useSelector(state => {
    return state.playerbar
  },shallowEqual)

  //other hooks

  useEffect(() => {
    if(song.id) {
      audioRef.current.src = getPlaySong(song.id);
      audioRef.current.play();
      setisPlay(true)
    }
  }, [song])

  const audioRef = useRef();

  const changeMusic = (tag) => {
    dispatch(changeCurrentSongIndexAndMusicAction(tag))
  }

  //other handle
  const al = song.al || {};
  const picUrl = al.picUrl || "";
  const singerName = (song.ar && song.ar[0].name)  || "未知歌手";

  //othet function

  const timeUpdate = useCallback(() => {
    const newTime = audioRef.current.currentTime;
    if(!isChangeing) {
      setcurrentTime((audioRef.current.currentTime * 1000));
      setcurrentValue(currentTime / song.dt * 100 );
    }

    let i = 0;
    for(; i < lyricList.length; i++) {
      if(newTime * 1000 < lyricList[i].time) {
        break;
      }
    }

    if(currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexACtion(i - 1));
      let content = lyricList[i - 1] && lyricList[i - 1].content;
      message.open({
        key:'lyric',
        content,
        duration:3,
        className:"lyric-class",
      })
    }

  }, [song, isChangeing, dispatch, currentLyricIndex, lyricList,currentTime])

  const sliderChange = useCallback((value) => {
    setisChangeing(true)
    setcurrentValue(value)
    setcurrentTime( value / 100 * song.dt )
  },[song])

  
  const playMuisc = useCallback(() => {
    isPlay ? audioRef.current.pause() : audioRef.current.play();
    setisPlay(!isPlay)
  }, [isPlay])

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * song.dt;
    audioRef.current.currentTime = currentTime / 1000;
    setcurrentTime(currentTime)
    setisChangeing(false)

    if(!isPlay) {
      playMuisc()
    }
  },[song, playMuisc, isPlay])

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if(currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence));
  }



  const handleMusicEnd = () => {
    if(sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play()
    }else {
      dispatch(changeCurrentSongIndexAndMusicAction(1))
    }
  }

  return (
    <PlayerBarWrap className="sprite_player" isClock={isClock}>
      <div className="mask sprite_player">
        <button className="btn sprite_player"
                onClick={e => setisClock(!isClock)}></button>
      </div>
      <div className="content wrap-v2">
        <Control isPlay={isPlay}>
          <button className="btn sprite_player prev"
                  onClick={e => changeMusic(-1)}></button>
          <button className="btn sprite_player play"
            onClick={e => playMuisc()}></button>
          <button className="btn sprite_player next"
                  onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="todo" className="mask sprite_player">
              <img src={getSizeImg(picUrl, 34)} alt=""></img></a>
          </div>
          <div className="info">
            <div className="song">
              <span className="name">{song.name}</span>
              <span className="artist">{singerName}</span>
            </div>
            <div className="progess">
              <Slider defaultValue={30}
                value={currentValue}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
                tipFormatter={null} />
              <div className="time">
                <span className="now-time">{formatDate(currentTime, "mm:ss")}</span>
                <span className="divider">/</span>
                <span className="duration">{formatDate(song.dt, "mm:ss")}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"
                    onClick={e => changeSequence() }></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate()} onEnded = {e => handleMusicEnd()}></audio>
    </PlayerBarWrap>
  )
})
