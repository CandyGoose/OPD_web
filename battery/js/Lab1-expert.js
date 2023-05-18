async function init(){
    var $_GET = {},
    args = location.search.substr(1).split(/&/);
    for (var i=0; i<args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }
    const prof = await fetch("http://localhost:8888/backend/get_profession.php?id=" + $_GET['id']);
    console.log("http://localhost:8888/backend/get_profession.php?id=" + $_GET['id']);
    const prof_conv = await prof.json();
    // TODO: do error for no profession
    console.log(prof_conv['success'])
    if (prof_conv['success'] == true){
        window.location.replace("http://localhost:8888/error.php");
    }
    const title = document.querySelector(".header__text");

    title.setAttribute("id", prof_conv["id"]);
    title.innerText += ` ${prof_conv.name}.`;

    const res = await fetch("http://localhost:8888/backend/get_categories.php");
    const conv = await res.json();
    const internals = document.getElementById("internals");

    internals.innerHTML = "";

    for (const cat in conv) {
        let current_internals = '<h3 class="category__title">' + conv[cat]['name'] + '</h3> <ul class="job_lists">';
        let cur = (parseInt(cat)+1).toString();
        //console.log("http://localhost:8888/backend/get_internals_by_category.php?category="+cur);
        const iternals = await fetch("http://localhost:8888/backend/get_internals_by_category.php?category="+cur);
        const iternals_conv = await iternals.json();
        for(const iter in iternals_conv){
            console.log("hello");
            current_internals += `<li class="single_jobs"><div class="jobs_left"><div class="jobs_conetent"><h4>${iternals_conv[iter]['name']}</h4></div></div><div class="jobs_right"><div class="apply_now"><a id=${iternals_conv[iter]['id']} class="heart_mark" href="#"></a></div></div></li>`;
        }
        current_internals += '</ul>';
        internals.innerHTML = internals.innerHTML+current_internals;
    }
}

window.addEventListener('DOMContentLoaded',init);

