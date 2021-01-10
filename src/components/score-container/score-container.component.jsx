import React from 'react';
import Icon from '../icon/icon.component';
import {stopConfetti} from '../../confetti';
import './score-container.styles.scss'

const ScoreContainer = ({score, resetGame, setLooseStyle}) => {

    const handleClick = () => {
        setLooseStyle(false);
        resetGame();
        stopConfetti();
    }

    return (
        <div className='score-container'>
            <h2>Score:</h2>

            <span > You: {score.player} </span>
            <span > Computer: {score.computer} </span>

            <Icon
            type='refresh'
            size='2x'
            color='white'
            pointer={true}
            className='refresh-icon'
            onClick={handleClick}/>
        
        </div>
    )
}


export default ScoreContainer;