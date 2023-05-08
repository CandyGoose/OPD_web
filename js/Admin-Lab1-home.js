async function init(){
    const res = await fetch("http://localhost:8888/backend/get_professions.php");
    const conv = await res.json();

    const container = document.getElementById("professions");
    container.innerHTML = "";
    for(const prof in conv){
        console.log(prof)
        container.innerHTML += '<li class="profession"><a href="http://localhost:8888/Admin-Lab1-prof_page.php?id='+conv[prof]['id']+'"><img src="http://localhost:8888/img/professions/prof1.jpeg" alt="Profession img" class="profession__img"><h3 class="profession__title">'+conv[prof]['name']+'</h3></a></li>'
    }
}

window.addEventListener('DOMContentLoaded',init);