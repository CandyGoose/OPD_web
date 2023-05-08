function intersection(setA, setB) {
    const _intersection = new Set();
    for (const elem of setB) {
      if (setA.has(elem)) {
        _intersection.add(elem);
      }
    }
    return _intersection;
  }


async function init(){
    var $_GET = {},
    args = location.search.substr(1).split(/&/);
    for (var i=0; i<args.length; ++i) {
        var tmp = args[i].split(/=/);
        if (tmp[0] != "") {
            $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
        }
    }
    const prof = await fetch("http://localhost:8888/backend/get_profession_info.php?id="+$_GET['id']);
    const prof_conv = await prof.json();
    document.getElementById("name_prof").innerText = prof_conv['name'];
    document.getElementById("desc").innerText = prof_conv["description"];

    const ratings = await fetch("http://localhost:8888/backend/get_ratings.php?id="+$_GET['id']);
    const ratings_conv = await ratings.json();
    if (ratings_conv.length==0){
        document.getElementById("internals").innerHTML="Эксперты еще не оценили ПВК этой профессии.";
    }
    const arr = new Array();
    for (const cat in ratings_conv) {
        const tempSet = new Set();
        tempSet.add(ratings_conv[cat]['k0']);
        tempSet.add(ratings_conv[cat]['k1']);
        tempSet.add(ratings_conv[cat]['k2']);
        tempSet.add(ratings_conv[cat]['k3']);
        tempSet.add(ratings_conv[cat]['k4']);
        tempSet.add(ratings_conv[cat]['k5']);
        tempSet.add(ratings_conv[cat]['k6']);
        arr.push(tempSet);
    }
    let main = arr[0];
    for (const i in arr){
        if(i==0){
            continue;
        }
        main=intersection(main,arr[i]);
    }
    if(main.size==0){
        document.getElementById("desc").innerHTML = document.getElementById("desc").innerHTML + "<br> Эти ПВК недостоверны, так как очень маленькая согласованность.";
    }else{
        document.getElementById("desc").innerHTML = document.getElementById("desc").innerHTML + "<br> Согласованность экспертов: " + main.size/7*100 + "%.";
    }
    console.log(main.size);
    if(main.size < 7){
        for (const i in arr){
            for(const item of arr[i].values()){
                main.add(item);
                if(main.size == 7){
                    break;
                }
            }
            if(main.size == 7){
                break;
            }
        }
    }
    const ht = document.getElementById("internals");
    ht.innerHTML="";
    for(const item of main.values()){
        const internal = await fetch("http://localhost:8888/backend/get_internal.php?id="+item);
        const internal_conv = await internal.json();
        ht.innerHTML+='<li class="single_jobs"><div class="jobs_left"><div class="jobs_conetent"><h4>'+internal_conv['name']+'</h4></div></div></li>';
    }
}

window.addEventListener('DOMContentLoaded',init);