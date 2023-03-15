async function init(){
    const res = await fetch("http://172.28.22.160:8888/backend/get_professions.php");
    const conv = await res.json();

    const container = document.getElementById("professions");
    container.innerHTML = "";
    for(const prof in conv){
        console.log(prof)
        container.innerHTML += '<li class="profession"><a href="http://172.28.22.160:8888/admin-prof-page.php?id='+conv[prof]['id']+'"><img src="http://172.28.22.160:8888/img/professions/prof1.jpeg" alt="Profession img" class="profession__img"><h3 class="profession__title">'+conv[prof]['name']+'</h3></a></li>'
    }
}

window.addEventListener('DOMContentLoaded',init);