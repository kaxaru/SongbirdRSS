import React from 'react'
import './FinalContainer.scss'
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player/youtube'

interface IFinalContainer {
    isBestResult: () => boolean,
    maxScore: number,
    userScore: number,
    play: () => void
}

const FinalContainer:React.FC<IFinalContainer> = ({isBestResult, maxScore, userScore, play}) => {

    const playAgain = () => {
        play()
    }

    return (
        <section className="finalContext">
            {!isBestResult() ? (
                <>
                <div className="finalContext-header">
                <span>Поздравляем</span>
                <span>Вы прошли викторину и набрали {userScore} из {maxScore} возможных баллов</span>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={playAgain}
              className="playAgain"
          >
              Начать заново?
            </Button>
                </>
            ): (
                <>
                <div className="finalContext-header">
                <span>Поздравляем!</span>
                <span>Вы набрали максимальное количество баллов</span>
                <div className="player-wrapper">
                    <ReactPlayer className='reactPlayer' url="https://youtu.be/6iFbuIpe68k" playing={true}></ReactPlayer>
                </div>
            </div>
                </>
            )}
        </section>
    )
}

export default FinalContainer