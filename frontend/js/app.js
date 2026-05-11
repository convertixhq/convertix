document.querySelectorAll("button").forEach(button => {

button.addEventListener("click", () => {

const text = button.innerText.toLowerCase();

if(text.includes("free")){

window.location.href = "free.html";

}

else if(text.includes("priority")){

window.location.href = "priority.html";

}

else if(text.includes("book")){

window.location.href = "booking.html";

}

});

});
