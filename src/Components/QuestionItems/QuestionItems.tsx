import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import List from '@material-ui/core/List';
import { IStore } from '../IApp'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import True from '../../assets/audio/true.mp3'
import False from '../../assets/audio/false.mp3'

import './QuestionItems.scss'

interface QuestionCard {
    store: IStore [][],
    stage: number,
    immutable: boolean
    checkAnswer: (id:number) => boolean
}

enum stain {
    Arrow = 0,
    Wrong,
    Right,
}

const QuestionItems:React.FC<QuestionCard> = ({store, stage, checkAnswer, immutable}) => {
    const [activeEl, setActiveEl] = useState<null | string>(null)
    const [iconEl, setIconEl] = useState<null | Array<stain>>(null)
    const audio = useRef<HTMLAudioElement>(null)
    useEffect(() => {
        if(iconEl !== null) {
            setIconEl(null)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stage])

   useEffect(() => {
        if(iconEl === null) {
            const newStain: Array<stain> = [];
            store[stage].map(() => {
                newStain.push(stain.Arrow)
            })
            setIconEl(newStain)
        }
   }, [iconEl, stage, store])

    const onClick = (e:React.SyntheticEvent) => {
            const el = (e.currentTarget as HTMLButtonElement)
            const isRight:boolean = checkAnswer(+el.id);
            const name = el.getAttribute('data-name');
          if (!immutable && iconEl !== null) { 
            const newIconEl = iconEl.slice(0);
            newIconEl[(+el.id) - 1] = isRight ? stain.Right : stain.Wrong
            setIconEl(newIconEl)
            if (!immutable && audio.current !== null) {
                const audioEl = audio.current;
                audioEl.src = isRight ? True : False
                const asyncPlay: () => void = async () => await audioEl.play()
                asyncPlay()
            }
          }
           setActiveEl(name);
    }

    const getIcon = (idx: number) => {
        if (iconEl === null) {
            return null
        }
        return iconEl[idx] === 0 ? <ArrowRightIcon /> : iconEl[idx] === 1 ? <CloseIcon /> : <DoneIcon />
    }

    const buildListQuestionItems = () => {
        return store[stage].map((el: IStore, idx: number) => {
            return (
            <div key={el.id * (++idx)}>
            <ListItem button 
            id={el.id.toString()}
            data-name={el.name}
            onClick={onClick}
            className={activeEl === el.name ? 'active' : ''}
            >
                <ListItemIcon>
                   {getIcon(idx - 1)}
            </ListItemIcon>
                    <ListItemText 
                    >
                        {el.name}
                    </ListItemText>
            </ListItem>
            </div>
            )
        })
    }

    return (
        <>
        <List className="questionlist">
            {buildListQuestionItems()}
        </List>
        <audio ref={audio} src="" >
            <track kind="captions" />
        </audio>    
        </>
    )
}


export default QuestionItems;
