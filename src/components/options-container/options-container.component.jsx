import React from 'react';
import Option from '../option/option.component';
import ResultsContainer from '../results-container/results-container.component';
import './options-container.styles.scss';

const OptionsContainer = ({handleOptionClick, playAgain, winner, choices, addScore, looseStyle, setLooseStyle}) => {

   return (
        <div className={`options-container ${ winner ? 'positioned': ''} ${looseStyle && 'loose-style'}`}>
             {
                 winner ?
                 <ResultsContainer winner={winner} choices={choices} playAgain={playAgain} addScore={addScore} setLooseStyle={setLooseStyle}/>
                 :
                  <>
                  <div className="row" onClick={handleOptionClick}>
                        <Option type='rock' winner={winner} size='2x' border='green'/>
                        <Option type='scissors' id='scissors' size='2x' border='red'/>
                    </div>

                    <div className="row centered" onClick={handleOptionClick}>
                    <Option type='spock' id='spock' size='2x' border='blue'/>
                    </div>

                    <div className="row" onClick={handleOptionClick}>
                    <Option type='paper' id='paper' size='2x' border='yellow'/>
                    <Option type='lizard' id='lizard' size='2x' border='purple'/>
                    </div>
                 </>
             }
            
        </div> 

      
    )
}

export default OptionsContainer;