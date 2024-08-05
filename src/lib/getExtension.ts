export const languages = [
  {
    name: 'JavaScript',
    icon: 'icons/javascript.svg',
  },
  {
    name: 'HTML',
    icon: 'icons/html.svg',
  },
  {
    name: 'CSS',
    icon: 'icons/css.svg',
  },
  {
    name: 'Python',
    icon: 'icons/python.svg',
  },
  {
    name: 'Java',
    icon: 'icons/java.svg',
  },
  {
    name: 'TypeScript',
    icon: 'icons/typescript.svg',
  },
];

export const getExtension = (language: string) => {
  switch (language) {
    case 'JavaScript':
      return '.js';
    case 'HTML':
      return '.html';
    case 'CSS':
      return '.css';
    case 'Python':
      return '.py';
    case 'Java':
      return '.java';
    case 'TypeScript':
      return '.ts';
    default:
      return '.js';
  }
};

export const initialCode = `function guessMyNumber() {
  const userGuess = prompt("Guess a number between 1 and 10:");
  const secretNumber = Math.ceil(Math.random() * 10);

  if (parseInt(userGuess) === secretNumber) {
    return "Wow, you must be a psychic!";
  } else {
    return \`Nope, the number was \${secretNumber}. Better luck next time!\`;
  }
}

console.log(guessMyNumber());`;
