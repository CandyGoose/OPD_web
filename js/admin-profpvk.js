async function init(){

    var $_GET = {},
    args = location.search.substr(1).split(/&/);
    for (var i=0; i<args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }
    const response = await fetch ("http://localhost:8888/backend/get_prof_on_tests_by_id.php?id=" + $_GET['id']);
    const conv = await response.json();

    const test_container = document.getElementById("professions");
    test_container.innerHTML = "";

    for(const pvk in conv) {
        test_container.innerHTML += '<li class="profession"><div class="card"><h1>'+conv[pvk]['name']+'</h1></div></li>';
    }
}

init();