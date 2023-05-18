async function init(){
    var $_GET = {},
    args = location.search.substr(1).split(/&/);
    for (var i=0; i<args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }
    const response =  await fetch("./backend/get_name_and_telegram_by_id.php?id="+$_GET['id']);
    const conv = await response.json();

    document.getElementById('name').innerHTML = '<a href="https://t.me/'+conv[0]['telegram']+'">'+conv[0]['fullname']+'</a>'
}

init();