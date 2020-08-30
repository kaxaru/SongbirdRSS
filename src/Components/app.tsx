import * as React from 'react';
import { useState, useEffect } from 'react';
import Logo from './Logo/Logo'
import Score from './Score/Score'
import Level from './Level/Level'
import LevelTypeGameOst from './Level/LevelGameOstType'
import QuestionCard from './QuestionCard/QuestionCard'
import QuestionItem from './QuestionItems/QuestionItems'
import FinalContainer from './FinalContainer/FinalContainer'
import {IOption, IUserOption, IStore} from './IApp'

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import store from '../Store/games'
import {getLevel, getLevelFromId} from './utils/getLevel'

import './fonts.scss'
import './app.scss';

const defOption: IOption = {
  stage: LevelTypeGameOst.Indie,
  answer: null,
  answerName: '',
  isAnswered: false,
}

const defUserOption: IUserOption = {
  score: 0,
  id: -1,
  isBirdClick: false
}

const App: React.FC = () => {
  const [option, setOption] = useState(defOption)
  const [userOption, setUserOption] = useState(defUserOption);
  const [stageEls, setStageEls] = useState<IStore [] | null>(null);
  const [userAnswerEls, setUserAnswerEls] = useState<IStore [] | null>(null)
  const [isFinal, setFinal] = useState(false);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    if(maxScore === 0) {
      const maxScore = store.map((el) => el.length-1).reduce((a, b) => a+b)
      setMaxScore(maxScore);
    }
  }, [maxScore])

  useEffect(() => {
    if (option.answer === null) {
      const answer = Math.floor(1 + Math.random() * store[getLevel(option.stage)].length)
      const answerName = store[getLevel(option.stage)][answer - 1].name
      const newOption = {...option, answer, answerName};
      setOption(newOption)
    }
  }, [option])

  useEffect(() => {
    if (stageEls === null) {
      const newStageEls = store[getLevel(option.stage)]
      setStageEls(newStageEls);
    }
  }, [option.stage, stageEls])

  useEffect(() => {
    if(userAnswerEls === null && stageEls !== null && !option.isAnswered) {
      const newAnswerEls = stageEls.slice(0);
      setUserAnswerEls(newAnswerEls)
    }
  }, [stageEls, userAnswerEls, option])

  useEffect(() => {
    if (option.isAnswered && userAnswerEls !== null) {
      const newUserOption = {
        ...userOption,
        score: userOption.score + userAnswerEls.length - 1
      }
      setUserOption(newUserOption)
      setUserAnswerEls(null)
    }
  }, [option.isAnswered, userAnswerEls, userOption])


  const isRightAnswer = (id = -1) => {
    const changeCard = () => {
      if (id >= 0 && id !== userOption.id) {
        setUserOption({...userOption, isBirdClick: true, id})
      }
    }

    if (option.answer === null || stageEls === null || userAnswerEls === null) {
      if(option.isAnswered) {
        changeCard()
        return true
      }
      return false
    }
    const check = id === option.answer
    if (!(option.isAnswered || check)) {
      const userIdx = userAnswerEls?.findIndex(el => el.id === id)
      if(userIdx !== undefined && userIdx >= 0) {
        const newStageEls = [...userAnswerEls.slice(0, userIdx), ...userAnswerEls.slice(userIdx + 1, userAnswerEls.length)]
        setUserAnswerEls(newStageEls)
      }
    }
    changeCard()

    if (check) {
      if (!option.isAnswered) {
        const newOption = {
          ...option,
          isAnswered: true,
        }
        setOption(newOption)
      }
      return true;
    }
    return false
  }

  const isNextStage = () => {
      const stageMax = Math.min(store.length, getLevel(option.stage) + 1)
      if (stageMax <= store.length - 1) {
        const cLevel = getLevelFromId(stageMax) 
        const newOption = {
          isAnswered: false,
          answer: null,
          answerName: '',
          stage: LevelTypeGameOst[cLevel]
        }
        setOption(newOption)
        const newUserOption = {
          ...userOption,
          id: -1,
          isBirdClick: false,
        }
        setUserOption(newUserOption)

      } else {
        setFinal(true);
      }
  }

  const isBestResult = () => {
    return userOption.score === maxScore
  }

  const newGame = () => {
    setOption(defOption)
    setUserOption(defUserOption)
    setStageEls(null)
    setUserAnswerEls(null)
    setFinal(false)
  }


    if(!isFinal) {
      return (
        <>
        <div className="header">
        <Logo />
        <Score score={userOption.score}/>
        </div>
        <Level levelType={(option.stage).toString()}/>
        <div className="content">
          <QuestionCard option={option} store={store}/>
          <div className="squeze">
            <QuestionItem 
            store={store} 
            stage={getLevel(option.stage) }
            immutable={option.isAnswered} 
            checkAnswer={isRightAnswer}
            />
            <QuestionCard user={userOption} option={option} store={store}></QuestionCard>
          </div>
        </div>
        <Button
              variant="contained"
              color="primary"
              disabled={!isRightAnswer(userOption.id)}
              onClick={isNextStage}
              endIcon={<Icon>send</Icon>}
              className="nextStage"
          >
              {store.length - 1 === getLevel(option.stage) ? 'Результаты' : 'Следующий уровень'}
        </Button>
      
      </>
      )
    } else {
      return (
        <>
         <div className="header">
        <Logo />
        <Score score={userOption.score}/>
        </div>
        <Level levelType={option.stage}></Level>
         <FinalContainer 
          play={newGame} 
          isBestResult={isBestResult} 
          maxScore={maxScore} 
          userScore={userOption.score
         } ></FinalContainer>
        </>
      )
    }


};

export default App;
