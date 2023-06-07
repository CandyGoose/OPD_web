async function init(){
    // fetch("http://localhost:8888/backend/login.php").then((res) => res.json()).then((res) => console.log(res));
    const res = await fetch("http://localhost:8888/backend/get_professions.php");
    const conv = await res.json();

    const container = document.getElementById("professions");
    container.innerHTML = "";
    for(const prof in conv){
        console.log(prof)
        container.innerHTML += '<li class="profession"><div class="card"><h1>'+conv[prof]['name']+'</h1></div></li>'
    }
}

window.addEventListener('DOMContentLoaded',init);