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
    // document.getElementById("desc").innerText = prof_conv["description"];

    const ratings = await fetch("http://localhost:8888/backend/get_ratings.php?id="+$_GET['id']);
    const ratings_conv = await ratings.json();
    if (ratings_conv.length==0){
        document.getElementById("rates").innerHTML="Эксперты еще не оценили ПВК этой профессии.";
    }
    const rates = document.getElementById("rates");
    rates.innerHTML = "";
    for (const cat in ratings_conv) {
        // tempSet.add(ratings_conv[cat]['k0']);
        // tempSet.add(ratings_conv[cat]['k1']);
        // tempSet.add(ratings_conv[cat]['k2']);
        // tempSet.add(ratings_conv[cat]['k3']);
        // tempSet.add(ratings_conv[cat]['k4']);
        // tempSet.add(ratings_conv[cat]['k5']);
        // tempSet.add(ratings_conv[cat]['k6']);
        // arr.push(tempSet);
        rates.innerHTML+='<tr><td>'+ratings_conv[cat]['login']+'</td><td>'+(ratings_conv[cat]['first'])+'</td><td>'+(ratings_conv[cat]['second'])+'</td><td>'+(ratings_conv[cat]['third'])+'</td><td>'+(ratings_conv[cat]['fourth'])+'</td><td>'+(ratings_conv[cat]['fiveth'])+'</td><td>'+(ratings_conv[cat]['sixth'])+'</td><td>'+(ratings_conv[cat]['seventh'])+'</td></tr>';
    }
    // const main = arr[0];
    // for (const i in arr){
    //     if(i==0){
    //         continue;
    //     }
    //     main=intersection(main,arr[i]);
    // }
    // document.getElementById("desc").innerHTML = document.getElementById("desc").innerHTML + "<br> Согласованность экспертов: " + main.size/7*100 + "%.";
    // console.log(main.size);
    // if(main.size < 7){
    //     for (const i in arr){
    //         for(const item of arr[i].values()){
    //             main.add(item);
    //             if(main.size == 7){
    //                 break;
    //             }
    //         }
    //         if(main.size == 7){
    //             break;
    //         }
    //     }
    // }
    // const ht = document.getElementById("internals");
    // ht.innerHTML="";
    // for(const item of main.values()){
        // const internal = await fetch("http://localhost:8888/backend/get_internal.php?id="+item);
        // const internal_conv = await internal.json();
    //     ht.innerHTML+='<li class="single_jobs"><div class="jobs_left"><div class="jobs_conetent"><h4>'+internal_conv['name']+'</h4></div></div></li>';
    // }
}

window.addEventListener('DOMContentLoaded',init);