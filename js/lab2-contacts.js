async function init(){
    const response = await fetch("./backend/get_contacts.php");
    const conv = await response.json();

    const block = document.getElementById("experts");
    for(const i in conv){
        gender = "Male";
        if(conv[i]['sex']==1){
            gender = "Female";
        }

        block.innerHTML += '<div style="border: 1px solid #ccc; padding: 10px; border-radius: 10px; margin-bottom: 10px;"><h2 style="margin-top: 0;">'+ conv[i]['fullname'] +'</h2><p style="margin-bottom: 5px;"><strong>Возраст:</strong> '+ conv[i]['age'] +'</p><p style="margin-bottom: 5px;"><strong>Пол:</strong> '+ gender +'</p><a href="https://t.me/'+ conv[i]['telegram'] +'" style="display: inline-block; background-color: #4da7de; color: #fff; padding: 10px 20px; border-radius: 10px; text-decoration: none; font-weight: bold; margin-top: 10px;">Написать в Telegram</a></div>';
    }
}

init();