function post(path, params, method='post') {

    // The rest of this code assumes you are not using a library.
    // It can be made less verbose if you use one.
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
  
    document.body.appendChild(form);
    form.submit();
  }
  


let globalSet = new Set();

const getCheckedItems = () => {
    const checkedItems = document.querySelectorAll(".heart_mark.checked");

    return Array.from(checkedItems).map(({id}) => id);
};

const getGlobalSetInObject = () => Object.fromEntries([...globalSet].map((value, index) => [`k${index}`, value]));

const toggleDisabledButton = () => {
    const checkedElements = getCheckedItems();

    checkedElements.length === 7 
        ? document.querySelector(".submit").disabled = false 
        : document.querySelector(".submit").disabled = true;
};

const toggleCheckbox = (e) => {
    const buttonHome = e.target.closest("a");
    
    if (buttonHome.className == "nav-list__link") return;

    e.preventDefault();

    const a = e.target.closest("a");
    const checkedCheckboxes = getCheckedItems();
    if (!a || !a.classList.contains("heart_mark") || (!((checkedCheckboxes.includes(a.id) && checkedCheckboxes.length >= 7) || checkedCheckboxes.length < 7))) return;

    if (a.classList.contains("checked")) {
        a.classList.remove("checked");
        globalSet.delete(a.id);
    } else {
        a.classList.add("checked");
        globalSet.add(a.id);
    };

    console.log(Array.from(globalSet));
    //a.classList.toggle("checked");

    toggleDisabledButton();
};

const submitHandler = async () => {
    const professionId = document.querySelector(".header__text").id;
    // const settings = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
        body: JSON.stringify(Object.assign(getGlobalSetInObject(), {
            prof_id: professionId,
        })),
    // };
    // const response = await fetch("http://localhost:8888/backend/rate.php", settings);
    // response.ok ? console.log(response) : console.log(response.status);
    post('/backend/rate.php',Object.assign(getGlobalSetInObject(), {prof_id: professionId,}));
};

document.querySelector(".submit").addEventListener("click", submitHandler);
document.addEventListener("click", toggleCheckbox);

//TODO 1 vinesti peremennie const 
//2 delete listeners 
