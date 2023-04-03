async function init(){
    // fetch("http://localhost/backend/login.php").then((res) => res.json()).then((res) => console.log(res));
    const res = await fetch("http://localhost/backend/get_name.php");
    const conv = await res.json();
    if(conv["success"]==true){
        let title = document.getElementById("account");
        title.innerHTML = '<a href="http://localhost/logout.html" class="nav-list__link">' +  conv["name"] + '<\a>';
    }
}

window.addEventListener('DOMContentLoaded',init);

