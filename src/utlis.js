
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const choicesSetting = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'], color: '#1e8f40' },
    paper: { name: 'Paper', defeats: ['rock', 'spock'], color: '#b0bb14' },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'], color: '#a62121' },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'], color: '#7319b0' },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'], color: '#1230c5' },
  };
  

export const getComputerAnswer = () => {
    let randomNumber = Math.floor(Math.random() * (choices.length));
    const computerAnswer = {
        choice: choices[randomNumber],
        color: choicesSetting[choices[randomNumber]].color 
    }
    return computerAnswer 
}

export const getWinner = (player, computer) => {
    if(choicesSetting[player].defeats.indexOf(computer) != -1) {
        return 'player'
    } else if (player === computer) {
        return "It's even!"
    }
    return 'computer' 
}

