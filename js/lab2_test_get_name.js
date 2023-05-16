async function init(){
    
    var $_GET = {},
    args = location.search.substr(1).split(/&/);
    for (var i=0; i<args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }
    const res = await fetch("/backend/get_test_name.php?id="+$_GET['id']);
    const conv = await res.json();

    const container = document.getElementById("test_name");
    
    // container.innerHTML = "";

    container.innerHTML += conv[0]['name'] + '"';
    // for(const prof in conv){
    //       
    //     let a = parseInt(conv[prof]['correct'])*20;
    //      '<tr><td>' + conv[prof]['result'] + '</td><td>'+ a +' %</td></tr>';
    // }
}

init();