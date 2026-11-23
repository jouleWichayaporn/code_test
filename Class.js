
let subjects = [];

function Add() {
    let area = document.getElementById("inputArea");

    let input = document.createElement("input");
    input.type = "text";
    input.className = "subject";
    area.appendChild(input);
}

function ShowSubject() {
    subjects = [];

    let inputs = document.getElementsByClassName("subject");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() != "") {
            subjects.push(inputs[i].value);
        }
    }

    let result = document.getElementById("result");

    result.innerHTML = "";

    for (let i = 0; i < subjects.length; i++) {
        result.innerHTML += "<li>" + subjects[i] + "</li>";
    }
}
