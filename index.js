const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require('./lib/Intern');

const render = require('./src/renderHTML');

const teamArray= [];

const addManager = () => {
  inquirer.prompt([
  {
    message: "What is the team manager's name?",
    type: "input",
    name: "managerName"
  },
  {
    message: "Please enter the manager's ID.",
    type: "input",
    name: "managerID"
  },
  {
    message: "What is the manager's email?",
    type:"input",
    name: "managerEmail"
  },
  {
    message: "What is the office number of the manager?"
    type: "input"
  }

  
  ])
}