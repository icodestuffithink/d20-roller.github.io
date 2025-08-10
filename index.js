const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');

const randomDice = () => {
  // Random number from 1–6
  const random = Math.floor(Math.random() * 6) + 1;
  rollDice(random);
};

const rollDice = (random) => {
  // Restart animation every time
  dice.style.animation = 'none';
  dice.offsetHeight; // Force reflow
  dice.style.animation = 'rolling 4s';

  setTimeout(() => {
    switch (random) {
      case 1:
        dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
        break;
      case 6:
        dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
        break;
      case 2:
        dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
        break;
      case 5:
        dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
        break;
      case 3:
        dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
        break;
      case 4:
        dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
        break;
    }
  }, 4050); // Wait until animation ends
};

rollBtn.addEventListener('click', randomDice);
