document.querySelectorAll("button").forEach(button => {

button.addEventListener("click", () => {

const text = button.innerText.toLowerCase();

if(text.includes("free")){

window.location.href = "demo/success-free.html";

}

else if(text.includes("priority")){

window.location.href = "demo/success-priority.html";

}

else if(text.includes("book")){

window.location.href = "demo/success-booking.html";

}

});

});
