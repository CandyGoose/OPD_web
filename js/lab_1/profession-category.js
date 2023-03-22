//Категории ПВК Верина реализация

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