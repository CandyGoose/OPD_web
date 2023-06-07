async function init(){
    var $_GET = {},
    args = location.search.substr(1).split(/&/);
    for (var i=0; i<args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }
    const response = await fetch ("http://localhost:8888/backend/get_tests.php");
    const conv = await response.json();

    const test_container = document.getElementById("tests");

    test_container.innerHTML = "";

    for (const i in conv){
        test_container.innerHTML += '<li class="profession"> <a href="Admin-test-result.php?user_id='+ $_GET['id'] + '&test_id='+ conv[i]['id'] +'"><img src="./img/blue.jpeg" alt="Test img" class="img"><h3 class="profession__title">'+ conv[i]['name'] +'</h3></a></li>';
    }
}

init();