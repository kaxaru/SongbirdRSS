import React, { useEffect, useState } from 'react'

import './Card.scss'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import {IOption, IUserOption, IStore} from '../IApp'

import EmptyBird from '../../assets/image/wtfbird.jpg'
import { getLevel } from '../utils/getLevel'


interface Card {
    user?: IUserOption,
    option: IOption,
    store: IStore [][],
}

const Card: React.FC<Card> = ({user, option, store}) => {
    const [curBird, setCurrentBird] = useState<IStore | null>(null)

    useEffect(() => {
        if (option.answer !== null) {
            const cLevel = getLevel(option.stage)   
            const newBird: IStore = store[cLevel][option.answer - 1]
            setCurrentBird(newBird)
        }
    }, [option, store])

    const getAnswerPic = (answer: boolean) => {
        if (!answer) {
            return EmptyBird;
        } 
        if (option?.answer !== null) {
            const curBird: IStore = store[getLevel(option.stage)][option.answer - 1]
            return curBird.image;
        }
        return EmptyBird
    }

    const getAnswerHeader = (answer: boolean) => {
        if(!answer) {
            return '********'
        }
        if (option?.answer !== null) {
            return store[getLevel(option.stage)][option.answer - 1].name
        }
        return  '********'
    }

    const template = () => {
        if(user === undefined) {
            return (
                <div className="item question-item">
                    <div className="item-image">
                        <img src={
                            getAnswerPic(option?.isAnswered)} alt="" />
                    </div>
                    <div className="item-content">
                        <div className="item-header">
                            {getAnswerHeader(option.isAnswered)}
                        </div>
                        <div className="item-description">
                            <AudioPlayer 
                            bird={curBird} 
                            stage={option.stage} 
                            immutable={option.isAnswered}
                            isQuestionCard={true}
                            ></AudioPlayer>
                        </div>   
                    </div>
                </div>
            )
        } else if (user !== undefined && option !== undefined && !user.isBirdClick) {
            return (
                <div className="item">
                    <div className="item-hint">Выберите птицу из списка</div>
                </div>
            )
        } else {
            return (
                <div className="item">
                    <div className="item-image">
                        <img src={store[getLevel(option.stage)][user.id - 1].image} alt="" />
                    </div>
                    <div className="item-content">
                        <div className="item-header">
                            {store[getLevel(option.stage)][user.id - 1].name}
                        </div>
                        <div className="item-meta">
                            {store[getLevel(option.stage)][user.id - 1].species}
                        </div>
                        <div className="item-meta">
                            <AudioPlayer 
                            stage={option.stage} 
                            bird={store[getLevel(option.stage)][user.id - 1]}>
                            </AudioPlayer>
                        </div>
                        <div className="item-description">
                        {store[getLevel(option.stage)][user.id - 1].description}
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            {template()}
        </>
    )
}

export default Card