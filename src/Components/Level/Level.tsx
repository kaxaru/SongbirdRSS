import React from 'react';
import './Level.scss';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import level from './LevelGameOstType'

interface Level {
    levelType: string;
}

const Level:React.FC<Level> = ({levelType}) => {
    return (
        <List component='nav' className="leveltype">
            {
                Object.keys(level).map((l: string) => {
                    return <ListItemText 
                    className={levelType === level[l as keyof typeof level] ? 'active' : ''}
                    primary={level[l as keyof typeof level]} 
                    key={l}>
                </ListItemText>
                })
            }
        </List>
    )
}

export default Level