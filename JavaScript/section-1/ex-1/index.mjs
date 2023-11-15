import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for their name
rl.question(chalk.yellow("Enter your name: "), (name) => {
  // Close the readline interface
  rl.close();

  // Use chalk to print a colorful message
  const coloredMessage = chalk.bold.green(`Hello, ${name}!`);
  console.log(coloredMessage);
});
