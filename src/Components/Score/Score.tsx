import React from 'react'
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Score.scss'

interface Score {
    score: number,
}

const Score: React.FC<Score> = ({score}) => {
    return (
        <div className="score-system">
            <ArrowForwardIosIcon  />
            <Typography variant="h4">
                 {
                     score === 0 ? 'Score: 0' : `Score: ${score} `
                 }
            </Typography>
        </div>
    )
}

export default Score;