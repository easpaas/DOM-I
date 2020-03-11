// You will be making a timer that:
//   * Counts up to 10 seconds
//   * Increments every 10 ms
//   * Has digits change to red when it gets to 10 seconds
//   * Should not count past 10 seconds

// TODO create a button for start and reset
const startButton = document.createElement('button');
const startText = document.createTextNode('Start');
startButton.appendChild(startText);
const resetButton = document.createElement('button');
const resetText = document.createTextNode('Reset');
resetButton.appendChild(resetText);

// div for start and reset buttons
const buttonDiv = document.createElement('DIV');
buttonDiv.appendChild(startButton);
buttonDiv.appendChild(resetButton);

// TODO add buttonDiv after digits div

