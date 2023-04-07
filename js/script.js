const data = document.querySelector("#data");

const date = new Date();
const formatter = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
});

function href(){
    window.location.href="#subscription-form";
    btnanime.style.animation = 'swing 5s infinite';
}

data.innerHTML = formatter.format(date);
