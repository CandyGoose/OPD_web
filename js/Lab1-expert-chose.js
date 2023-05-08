async function init(){
    // fetch("http://localhost:8888/backend/login.php").then((res) => res.json()).then((res) => console.log(res));
    const res = await fetch("http://localhost:8888/backend/get_professions.php");
    const conv = await res.json();

    const container = document.getElementById("professions");
    container.innerHTML = "";
    for(const prof in conv){
        console.log(prof)
        container.innerHTML += '<li class="profession"><a href="http://localhost:8888/expert_prof.php?id='+conv[prof]['id']+'"><img src="./img/professions/prof1.jpeg" alt="Profession img" class="profession__img"><h3 class="profession__title">'+conv[prof]['name']+'</h3></a></li>'
    }
}

window.addEventListener('DOMContentLoaded',init);