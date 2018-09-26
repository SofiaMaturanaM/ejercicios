const boton = document.getElementById("btn");

boton.addEventListener("click", () => {
    let comments = document.getElementById("comment").value;
    document.getElementById("comment").value = "";
    const cont = document.getElementById("cont");
    const newComment = document.createElement("div");
    const chck = document.createElement("input");
    chck.type = "checkbox";
    const heart = document.createElement("i");
    heart.classList.add("fa", "fa-heart", "heart");
    const trash = document.createElement("i");
    trash.classList.add("fa", "fa-trash", "trash");
    const contComment = document.createElement("p");
    let textNewComment = document.createTextNode(comments);
    contComment.appendChild(textNewComment);
    newComment.appendChild(chck);
    newComment.appendChild(heart);
    newComment.appendChild(trash);
    newComment.appendChild(contComment);
    cont.appendChild(newComment);

    heart.addEventListener("click", () => {
        heart.classList.toggle("red");
    })

    trash.addEventListener("click", () => {
        cont.removeChild(newComment);
    })

    chck.addEventListener("click", () => {
        contComment.classList.toggle("strike-out");
    })

})