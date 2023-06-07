<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expert</title>
    <link rel="stylesheet" href="http://localhost:8888/./css/main.css">
    <link rel='stylesheet' href="http://localhost:8888/resources/font-awesome.min.css">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"> -->
</head>
<body>
    <?php 
    session_start();
    if(!isset($_SESSION['login'])){
        $_SESSION['error'] = "[RIGHTS] Вам запрещен доступ на эту страницу!";
        header('Location: '. 'http://localhost:8888/error.php');
        exit();
    }
    ?>
<?php
    include "menu.php";
?>

    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title" style="color: #000; border-bottom: 1px solid #000000;">
                Skills
            </h1>
            <div class="header__text">
                Выберете 7 качеств для профессии  
            </div>
        </div>
    </header>

    <!-- job_listing_area_start  -->
    <main class="section">

        <div class="container" id="internals">
            <h3 class="category__title">Категория 1</h3>
                <ul class="job_lists">
                    <li class="single_jobs">
                        <div class="jobs_left">
                            <div class="jobs_conetent">
                                <h4>Качество бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла</h4>
                            </div>
                        </div>
                        <div class="jobs_right">
                            <div class="apply_now">
                                <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            </div>
                        </div>
                    </li>
                    <li class="single_jobs">
                        <div class="jobs_left">
                            <div class="jobs_conetent">
                                <h4>Качество</h4>
                            </div>
                        </div>
                        <div class="jobs_right">
                            <div class="apply_now">
                                <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            </div>
                        </div>
                    </li>
                    <li class="single_jobs"><div class="jobs_left"><div class="jobs_conetent"><h4>Качество</h4></div></div><div class="jobs_right"><div class="apply_now"><a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a></div></div></li>
                    <li class="single_jobs">
                        <div class="jobs_left">
                            <div class="jobs_conetent">
                                <h4>Качество</h4>
                            </div>
                        </div>
                        <div class="jobs_right">
                            <div class="apply_now">
                                <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            </div>
                        </div>
                    </li>
                </ul>
            <h3 class="category__title">Категория 2</h3>
                <ul class="job_lists">
                    <li class="single_jobs">
                        <div class="jobs_left">
                            <div class="jobs_conetent">
                                <h4>Качество</h4>
                            </div>
                        </div>
                        <div class="jobs_right">
                            <div class="apply_now">
                                <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            </div>
                        </div>
                    </li>
                    <li class="single_jobs">
                        <div class="jobs_left">
                            <div class="jobs_conetent">
                                <h4>Качество</h4></a>
                            </div>
                        </div>
                        <div class="jobs_right">
                            <div class="apply_now">
                                <a class="heart_mark" href="#"> <i class="fa fa-heart"></i> </a>
                            </div>
                        </div>
                    </li>
                </ul>
        </div>
    </main>
    
    <button id="continueButton" class="btn btn-outline-primary">Продолжить</button>

    <div id="hiddenFragment" style="display: none;">
        <div class="header__text" style="text-align: center">Распределение ПВК по важности</div>
        <div class="header__text" style="text-align: center">Перетащите каждое название ПВК на соответствующее место по важности:</div>
        <ol>
            <li draggable="true" id="1">Название 1</li>
            <li draggable="true" id="2">Название 2</li>
            <li draggable="true" id="3">Название 3</li>
            <li draggable="true" id="4">Название 4</li>
            <li draggable="true" id="5">Название 5</li>
            <li draggable="true" id="6">Название 6</li>
            <li draggable="true" id="7">Название 7</li>
        </ol>
        <div style="text-align: center;">
            <button class="submit btn btn-outline-success" disabled>Отправить</button>
        </div>
    </div>


    <script>
        const continueButton = document.getElementById('continueButton');
        const hiddenFragment = document.getElementById('hiddenFragment');


        async function init(){
        var $_GET = {},
        args = location.search.substr(1).split(/&/);
        for (var i=0; i<args.length; ++i) {
            var tmp = args[i].split(/=/);
            if (tmp[0] != "") {
                $_GET[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp.slice(1).join("").replace("+", " "));
            }
        }
        const prof = await fetch("http://localhost:8888/backend/get_profession.php?id=" + $_GET['id']);
        console.log("http://localhost:8888/backend/get_profession.php?id=" + $_GET['id']);
        const prof_conv = await prof.json();
        // TODO: do error for no profession
        console.log(prof_conv['success'])
        if (prof_conv['success'] == true){
            window.location.replace("http://localhost:8888/error.php");
        }
        const title = document.querySelector(".header__text");

        title.setAttribute("id", prof_conv["id"]);
        title.innerText += ` ${prof_conv.name}.`;

        const res = await fetch("http://localhost:8888/backend/get_categories.php");
        const conv = await res.json();
        const internals = document.getElementById("internals");

        internals.innerHTML = "";

        for (const cat in conv) {
            let current_internals = '<h3 class="category__title">' + conv[cat]['name'] + '</h3> <ul class="job_lists">';
            let cur = (parseInt(cat)+1).toString();
            //console.log("http://localhost:8888/backend/get_internals_by_category.php?category="+cur);
            const iternals = await fetch("http://localhost:8888/backend/get_internals_by_category.php?category="+cur);
            const iternals_conv = await iternals.json();
            for(const iter in iternals_conv){
                console.log("hello");
                current_internals += `<li class="single_jobs"><div class="jobs_left"><div class="jobs_conetent"><h4>${iternals_conv[iter]['name']}</h4></div></div><div class="jobs_right"><div class="apply_now"><a id=${iternals_conv[iter]['id']} class="heart_mark" href="#"></a></div></div></li>`;
            }
            current_internals += '</ul>';
            internals.innerHTML = internals.innerHTML+current_internals;
        }
    }

    window.addEventListener('DOMContentLoaded',init);


    //---------------------------------------------------------
        function post(path, params, method='post') {

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

        if (checkedElements.length === 7) {
            continueButton.addEventListener('click', function() {
            hiddenFragment.style.display = 'block';
        });
            document.querySelector(".submit").disabled = false;

            const listItems = document.querySelectorAll("ol li");
            const globalArray = [...globalSet]; // Преобразовать Set в массив
            let i = 0;

            listItems.forEach((item) => {
                let id = item.getAttribute("id");
                
                if (!checkedElements.includes(id)) {
                    (async function(index) {
                    let internalResponse = await fetch("http://localhost:8888/backend/get_internal.php?id=" + globalArray[index]);
                    let internal = await internalResponse.json();
                    item.innerText = internal['name'];
                    })(i);
                    
                    i++;
                }
            });

            } else {
                document.querySelector(".submit").disabled = true;
            }
            };


        const toggleCheckbox = (e) => {
  const buttonHome = e.target.closest("a");

  e.preventDefault();

  const a = e.target.closest("a");
  const checkedCheckboxes = getCheckedItems();

  if (!a || !a.classList.contains("heart_mark") || (!((checkedCheckboxes.includes(a.id) && checkedCheckboxes.length >= 7) || checkedCheckboxes.length < 7))) {
    return;
  }

  if (a.classList.contains("checked")) {
    a.classList.remove("checked");
    globalSet.delete(a.id);
  } else {
    a.classList.add("checked");
    globalSet.add(a.id);
  }

  toggleDisabledButton();
};

        const submitHandler = async () => {
        const professionId = document.querySelector(".header__text").id;

            body: JSON.stringify(Object.assign(getGlobalSetInObject(), {
                prof_id: professionId,
            })),

        post('/backend/rate.php',Object.assign(getGlobalSetInObject(), {prof_id: professionId,}));
        };

        document.querySelector(".submit").addEventListener("click", submitHandler);
        document.addEventListener("click", toggleCheckbox);

        //-------------------------------------------------
		const items = document.querySelectorAll('li');

		let draggedItem = null;

		for (let i = 0; i < items.length; i++) {
			const item = items[i];

			item.addEventListener('dragstart', function() {
				draggedItem = item;
				setTimeout(function() {
					item.style.display = 'none';
				}, 0);
			});

			item.addEventListener('dragend', function() {
				setTimeout(function() {
					draggedItem.style.display = 'block';
					draggedItem = null;
				}, 0);
			});

			for (let j = 0; j < items.length; j++) {
				const dropzone = items[j];

				dropzone.addEventListener('dragover', function(e) {
					e.preventDefault();
				});

				dropzone.addEventListener('dragenter', function(e) {
					e.preventDefault();
					this.style.backgroundColor = '#e0e0e0';
				});

				dropzone.addEventListener('dragleave', function() {
					this.style.backgroundColor = '#ffffff';
				});

				dropzone.addEventListener('drop', function() {
					if (this.nextSibling === draggedItem) {
						this.parentNode.insertBefore(draggedItem, this.nextSibling.nextSibling);
					} else {
						this.parentNode.insertBefore(draggedItem, this.nextSibling);
					}
					this.style.backgroundColor = '#ffffff';
				});
			}
		}
	</script>
    <!-- job_listing_area_end  dsddfdds-->
    <script src="http://localhost:8888/./js/app.js"></script>
    <!-- <script src="http://localhost:8888/./js/Lab1-expert.js"></script> -->
    <!-- <script src="http://localhost:8888/./js/Lab1-expertcheckbox.js"></script> -->
    <script src="./js/menu.js"></script>
</body>
</html>
