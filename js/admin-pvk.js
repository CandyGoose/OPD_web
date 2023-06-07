async function init(){

    var $_GET = {},
    args = location.search.substr(1).split(/&/);
    for (var i=0; i<args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }
    const response = await fetch ("http://localhost:8888/backend/get_pvk_on_tests_by_id.php?id=" + $_GET['id']);
    const conv = await response.json();

    const test_container = document.getElementById("details");
    test_container.innerHTML = "";

    for(const pvk in conv) {
        test_container.innerHTML += '<li draggable="true"><div class="pvk">'+conv[pvk]['name']+". Совместимость: "+conv[pvk]['scoreforman']+"%.</div></li>";
    }
}

init();