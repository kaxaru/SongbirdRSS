import React, {useState, useEffect}  from 'react'
import Player from 'react-modular-audio-player';
import {IStore} from '../IApp'

interface AudioPlayer {
    bird: null | IStore,
    stage: string,
    immutable?: boolean,
    isQuestionCard?: boolean
}

const AudioPlayer:React.FC<AudioPlayer> = ({bird, stage, immutable, isQuestionCard}) => {
  const [isPlay, setPlay] = useState(true)
  const audio = []; 

  useEffect(() => {
    if(immutable) {
      setPlay(false)
    } else {
      setPlay(true)
    }
  }, [immutable])

  useEffect(() => {
    if(!isPlay) {
      const audioPlayer = document.querySelectorAll('.audio-player audio')[0] as HTMLAudioElement;
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      audioPlayer.src = '';
      const buttonPlay = document.querySelectorAll('.audio-player #play-icon')[0] as HTMLImageElement;
      buttonPlay.click()
    } 
  })

  const getTitle = () => {
    if(bird === null) {
      return 'unknown bird'
    }

    if (isQuestionCard) {
      if (!immutable) {
        return 'unknown bird'
      } else {
        return bird.name
      }
    } 

    return bird.name;
  }

  const getPath = () => {
    if(bird === null) {
      return 'unknown'
    }
    return bird.audio.default
  }

    audio.push({
      src: (() => getPath())(),
      title: getTitle(),
      artist: `stage ${stage}`
    })

  return (
    <Player audioFiles={audio} />
)}


export default AudioPlayer