/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["A clown", "My cat", "A bear", "Naruto"];
  let action = ["destroyed", "burned", "ate", "jump on"];
  let what = ["my car", "my ps5", "my bed", "my pc"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);

  return who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex];
};
