import inquirer from "inquirer";
const input1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Kindly Enter your Height:"
});
const input2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Please Enter your weight in Kg"
});
let total = input2.num2 / (input1.num1 * input1.num1);
console.log(`Your BMI is ${total}`);
