async function init(){
    
    // fetch("http://localhost:8888/backend/login.php").then((res) => res.json()).then((res) => console.log(res));
    const res = await fetch("http://localhost:8888/backend/get_users.php");
    const conv = await res.json();

    const container = document.getElementById("users");
    container.innerHTML = "";
    for(const prof in conv){
        // console.log(prof)
        let gender = "Male";
        if(conv[prof]['sex']==1){
            gender = "Female";
        }
        container.innerHTML += '<li style="background-color: #F9F9F9; border-radius: 10px; padding: 20px;"><div style="display: flex; align-items: center; margin-bottom: 10px;"><div><h3 style="font-size: 20px; margin: 0;">'+ conv[prof]['fullname'] +'</h3><p style="font-size: 16px; margin: 0 0 5px;">'+ conv[prof]['age'] +'</p><p style="font-size: 16px; margin: 0 0 5px;">'+ gender +'</p><a href="https://t.me/'+ conv[prof]['telegram'] +'" style="display: inline-block; background-color: #4FC3F7; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Telegram</a><a href="./Admin-tests.php?id='+ conv[prof]['id'] +'" style="display: inline-block; background-color: #00CC66; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Посмотреть результаты</a></div></div></li>'
    }
}

window.addEventListener('DOMContentLoaded',init);
