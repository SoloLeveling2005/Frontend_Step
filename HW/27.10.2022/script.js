// localStorage.setItem('name', 'Asd');
// localStorage.setItem('surname', 'Vivi');

// // // localStorage.name = 'damir'

// // // console.log(localStorage.name);

// console.log(localStorage.getItem('name')); // Asd;
// console.log(localStorage.getItem('surname')); // Vivi;

// localStorage.clear();

// // localStorage.removeItem('name');

// console.log(localStorage.getItem('surname')); // 
// console.log(localStorage.getItem('name')); // 

// sessionStorage.setItem('full', 'Name');

// console.log(sessionStorage.getItem('full'));

// area.value = localStorage.getItem('area');
// area.oninput = () => {
//     localStorage.setItem('area', area.value);
// }

// Есть 2 инпута. в 1 инпуте имя во втором значение цвета. При нажатии кнопки должен создаваться блок див. При обновлении стр. цвет должен сохраняться.

for (let storage in sessionStorage){
    if (!sessionStorage.hasOwnProperty(storage)) {
        continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
    }
    let div = document.createElement('div')
    div.innerHTML = storage
    div.classList = "block"
    div.style = `background-color:#${sessionStorage.getItem(storage)};`
    document.body.append(div)

}

function create() {
    let name = document.querySelector("#name").value
    let color = document.querySelector("#color").value

    

    let div = document.createElement('div')
    div.innerHTML = name
    div.classList = "block"
    div.style = `background-color:#${color};`
    document.body.append(div)

    sessionStorage.setItem(name, color);
    
}