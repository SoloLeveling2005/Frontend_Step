// Создание нового элемента
let element_num = 1
function newElement(){
    // let li = document.createElement('li'); // ищу элементы с тегом li
    // let inputValue = document.getElementById('myInput').value; // получаю знаечние нашего input
    // let t = document.createTextNode(inputValue); // записываю в текст значение input
    // li.append(t); // добавляю это значение внутрь li
    // if (inputValue === ''){ // создаю проверку на пустоту значения
    //     alert('Please enter something!');
    // }else{
    //     document.getElementById('myUl').append(li); // если значение не пустое то добавляю li внутрь ul
    // }
    // document.getElementById('myInput').value = ""; // Обнуляю значение input
    
    // let span = document.createElement('span'); // создаю элемент span
    // let txt = document.createTextNode("\u00D7"); // создаю текст
    // span.className = "close"; // присваиваю span класс close
    // span.append(txt); // добавляю текст в span
    // li.append(span); // добавляю span в li

    // for(let i = 0; i < close.length; i++){ // создаю функцию закрытия, удаления
    //     close[i].onclick = function(){
    //         let div = this.parentElement; 
    //         div.style.display = "none";
    //     }
    // }

    let title_new_product = document.getElementById('title_new_product').value;
    let description_new_product = document.getElementById('description_new_product').value;
    let price_new_product = document.getElementById('price_new_product').value;


    let product = document.createElement('div');
    product.className = "product";

    if (title_new_product === ''){ // создаю проверку на пустоту значения
        alert('Заполните поля!');
        return
    }else{
        document.getElementById('content').append(product); // если значение не пустое то добавляю li внутрь ul
    }

    document.getElementById('title_new_product').value = "";
    document.getElementById('description_new_product').value = "";
    document.getElementById('price_new_product').value = "";

    // Создаем элементы
    let left_content = document.createElement('div');
    let title_product = document.createElement('p');
    let description_product = document.createElement('p');
    let price_product = document.createElement('p');
    let right_content = document.createElement('div');
    let do_element = document.createElement('div');
    let delete_element = document.createElement('div');
    let material_symbols_outlined1 = document.createElement('span');
    let material_symbols_outlined2 = document.createElement('span');


    // Присваиваем классы
    left_content.className = "left_content";
    title_product.className = "title_product";
    description_product.className = "description_product";
    price_product.className = "price_product";
    right_content.className = "right_content";
    do_element.className = "do";
    delete_element.className = "delete";
    material_symbols_outlined1.className = "material-symbols-outlined";
    material_symbols_outlined2.className = "material-symbols-outlined";
    

    // Вкладываем блоки в блоки
    product.append(left_content)
    product.append(right_content)
    left_content.append(title_product)
    left_content.append(description_product)
    left_content.append(price_product)
    right_content.append(do_element)
    right_content.append(delete_element)
    do_element.append(material_symbols_outlined1)
    delete_element.append(material_symbols_outlined2)


    // Запись значение в блоки
    title_product.innerHTML = title_new_product;
    description_product.innerHTML = description_new_product;
    price_product.innerHTML = `Цена: ${price_new_product}`;
    material_symbols_outlined1.innerHTML = "done"
    material_symbols_outlined2.innerHTML = "close"

    element_num+=1
    product.id = `product_${element_num}`;
    delete_element.id = `delete_element_${element_num}`;
    do_element.id = `do_element_${element_num}`;
    document.getElementById(`delete_element_${element_num}`).onclick = function() {
        delete_product(`product_${element_num}`)
    };
    document.getElementById(`do_element_${element_num}`).onclick = function() {
        do_product(`product_${element_num}`)
    };
}


function delete_product(clicked_id) {
    document.getElementById(clicked_id).remove();
}

function do_product(clicked_id) {
    document.getElementById(clicked_id).style = "text-decoration: line-through;"
}