"use strict"; //Crea el uso del modo estricto

const d = document;

//Capturando los nodos de html con java script
const app = d.querySelector(".app");

const input_todo = d.getElementById("input-todo");
const btn_app = d.getElementById("btn-app");
const content_w = d.getElementById("content-wrapper");

const btn_background = d.querySelector(".btn-background");

//url para consumir api de prueba
const url = "http://localhost:3000/data";

const printTask = (task, id) => {
    let li = d.createElement("li");
    let p = d.createElement("p");
    let taskText = d.createTextNode(task);
    let div = d.createElement("div");

    const btn_1 =d.createElement("button");
    const btn_2 =d.createElement("button");
    let btn1Text = d.createTextNode("Editar");
    let btn2Text = d.createTextNode("Eliminar");

    btn_1.classList.add("btn-edit");
    btn_2.classList.add("btn-delete");

    btn_1.addEventListener("click", () => {
        console.log("Editando...");
    });
    btn_2.addEventListener("click", () => {
        console.log("Eliminando...");
    });

    p.appendChild(taskText);
    btn_1.appendChild(btn1Text);
    btn_2.appendChild(btn2Text);

    div.append(btn_1, btn_2);

    li.append(p, div);

    content_w.appendChild(li);

    return {
        id, 
        task,
    }

}

printTask("Ir a tocar al 55", "Man187202");

printTask("Terminar el proyecto del modulo 4", "Gab187202");

