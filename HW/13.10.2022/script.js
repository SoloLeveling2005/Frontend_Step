// let form = document.forms[1];

// let input = form.elements.first;

// alert(input.value);

// let form= document.forms[0];
// let el = form.elements.one;

// console.log(el);
// console.log(el[0]);

// input.oninput = function(){
//     result.innerHTML= input.value;
// }

// input.onblur = function(){
//     if(!input.value.includes('@')){
//         input.classList.add('wrong');
//         errors.innerHTML = 'Please enter a valid email address';
//     }
// }

// input.onfocus = function(){
//     if(this.classList.contains('wrong')){
//         this.classList.remove('wrong');
//         errors.innerHTML = "";
//     }
// }

// input.onblur = function(){
//     if(!input.value.includes('@')){
//         this.classList.add("wrong")
//         input.focus();
//     }
//     else{
//         this.classList.remove("wrong");
//     }
// }

// click - клик левой кнопки мыши
// contextmenu - клик правой кнопки мыши
// mouseover / mouseout - при том что мышь входит внутрь / выходит из элемента
// mousedown / mouseup - при нажатий кнопки мыши / когда кнопка мыши поднимается
// mousemove - когда курсор мыши двигается

// addEventListener
// function sayHello(){
//     console.log("Hi")
// }

// input.addEventListener("click", sayHello)




// 1) Форма в которой есть инпут. В данный инпут вы вводите значения в HEX (с хештегом и обознаечниеями от 00 до FF)
// После нажатиия кнопки submit backgroumd должен принимать значение которое записано внутрь input

// 2) При движении мыши background должен будет принимать ранодомное значение. 



input.oninput = function() {
    document.getElementById("body").style = `background-color: ${input.value};`
    // console.log(input.value)
};

body.addEventListener("mousemove", sayHello)

function sayHello(){
    let new_color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
    document.getElementById("body").style = `background-color: ${new_color};`
}