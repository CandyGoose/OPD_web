async function init(){
    
    var $_GET = {},
    args = location.search.substr(1).split(/&/);
    for (var i=0; i<args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }
    const res = await fetch("/backend/get_test_result.php?id="+$_GET['id']);
    const conv = await res.json();

    const container = document.getElementById("results");
    
    // container.innerHTML = "";
    for(const prof in conv){
          
        let a = parseInt(conv[prof]['correct'])*20;
        container.innerHTML += '<tr><td>' + conv[prof]['result'] + '</td><td>'+ a +' %</td></tr>';
    }
}

init();