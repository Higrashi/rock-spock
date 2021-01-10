import React, { useState, useEffect } from 'react';
import {startConfetti, stopConfetti} from '../../confetti';
import Icon from '../icon/icon.component';
import {useWindowDimensions} from '../window-hook/window-dimension-hook'
import './results-container.styles.scss';

const ResultsContainer = ({winner,choices, playAgain, addScore, setLooseStyle}) => {

    const [timer, setTimer] = useState(false);

    useEffect(() => {

        setTimeout(function(){
            setTimer(true);
            addScore(winner);
            winner === 'player' && startConfetti();
            winner === 'computer' && setLooseStyle(true);
        },2000)
    },[]);

    const {width} = useWindowDimensions();
    
    const handleButton = () => {
        stopConfetti()
        playAgain()
        setLooseStyle(false)
    }
    console.log(choices)
    return (
    <div className='results'>

        {
            timer ?
            <div className="winner-container">
                {
                    winner === 'player' ? <h1>You Win!</h1> : winner === 'computer' ? <h1>You Loose!</h1> : <h1>It's a Tie!</h1> 
                }
                <button onClick={handleButton}>Play Again</button>
            </div> : null    
        }

        

       <div className={`block ${timer ? 'transform-up': ''}`} >
                <div className="gear"></div> 
                <h2>Calculating</h2>
            </div>  
        
       
        <div className='result-container'>
 
        <div className={`option-result ${timer ? 'transform-left': ''}`} style={{borderColor: choices.player.color}}>
        <span className='result-logo' style={{backgroundColor: choices.player.color}}>You</span>  
           <Icon type={choices.player.choice} size={width > 500 ? '3x' : '2x'}  color='black'/>
         
         </div>
  
          <span className={` ${timer ? 'transform-up': '' }`}> 
             <h1>VS</h1> 
              </span>
        
         <div className={`option-result ${timer ? 'transform-right': ''}`} style={{borderColor: choices.computer.color}}>
         <span className='result-logo' style={{backgroundColor: choices.computer.color}}>Computer</span>  
           <Icon type={choices.computer.choice} size={width > 500 ? '3x' : '2x'} color='black'/>
         </div>
        
         
        </div>
       
        </div>
    )
}

export default ResultsContainer;

