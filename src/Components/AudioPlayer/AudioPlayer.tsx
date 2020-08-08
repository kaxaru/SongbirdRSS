import React from 'react'
import Player from 'react-modular-audio-player';
import {IStore} from '../IApp'

interface AudioPlayer {
    bird: null | IStore,
    stage: string,
}

const AudioPlayer:React.FC<AudioPlayer> = ({bird, stage}) => {
  const audio = []; 

    audio.push({
      src: (() => bird === null ? 'unknown' : bird?.audio)(),
      title: 'unknown bird',
      artist: `stage ${stage}`
    })

  return (
    <Player audioFiles={audio} />
)}


export default AudioPlayer