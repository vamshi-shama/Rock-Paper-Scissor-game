const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');

const computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const options = ['rock', 'paper', 'scissors'];
    return options[randomIndex];
};

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return 'Tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') || 
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
};

const game = (userChoice) => {
    const compChoice = computerChoice();
    const resultMessage = determineWinner(userChoice, compChoice);
    result.innerHTML = `
        <p>You choose ${userChoice}.</p>
        <p>The computer choose ${compChoice}.</p>
        <p>${resultMessage}</p>
    `;
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        game(choice.id);
    });
});