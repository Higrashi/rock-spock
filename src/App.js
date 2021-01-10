import { useState } from 'react';
import ScoreContainer from './components/score-container/score-container.component';
import OptionsContainer from './components/options-container/options-container.component';
import Modal from './components/modal/modal.component';
import Icon from './components/icon/icon.component';
import {getComputerAnswer, getWinner} from './utlis';
import './App.css';


function App() {

  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [winner, setWinner] = useState('');
  const [score, setScore] = useState({player: 0, computer: 0})
  const [looseStyle, setLooseStyle] = useState(false);
  const [modalState, setModalState] = useState(false)
  
  const handleOptionClick = (e) => {
      if(e.target.id) {
        const computerAnswer = getComputerAnswer();
       
        setPlayerChoice({
          choice: e.target.id,
          color: window.getComputedStyle(e.target).borderColor
        })
        setComputerChoice({
          choice: computerAnswer.choice,
          color: computerAnswer.color
        })
       
        setWinner(getWinner(e.target.id, computerAnswer.choice))
        
    }
 }

  const playAgain = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setWinner('');
  }
  
  const addScore = (winner) => {

    setScore(prevState => {
      return {
        ...prevState,
        [winner]: prevState[winner] +1 
      }
    })
  }

  const resetGame = () => {
    setScore({player: 0,computer: 0});
    playAgain();
  }

  const handleModal = () => {
    setModalState(!modalState)
  }

  

  return (
    <div className="App">
      {/* <div className='logo'>Rock Paper<br /> Scissors Lizard<br /> Spock</div>    */}
      <ScoreContainer score={score} resetGame={resetGame} setLooseStyle={setLooseStyle}/>
      
      <OptionsContainer
      handleOptionClick={handleOptionClick}
      playAgain={playAgain}
      winner={winner}
      choices={{player: playerChoice,computer: computerChoice}}
      addScore={addScore}
      looseStyle={looseStyle}
      setLooseStyle={setLooseStyle}
      />

      <button className='rules-btn' onClick={handleModal}>Rules</button>
      <Modal modalState={modalState} setModalState={setModalState}/>

     

      <div className='author'>Made by<br /> Anatoly Albov 
        <a href='http://www.anatolyalbov.ru/' target='_blank' className='link'><Icon type='globe' color='white' size='1x' /></a>
      </div>
    </div>
  
  );
}

export default App;
