// function loadDoc(){
//     console.log('test');
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function(){
//         document.getElementsByClassName('change')[0].innerHTML = this.responseText;
//         console.log('test');
//     }
//     xhttp.open('GET', 'ajax.txt');
//     xhttp.send();
// }

// let student = {
//     name: 'AAA',
//     age: 225,
//     courses: ['frontend', 'backend', 'design'],
//     hello(){
//         console.log('Hello');
//     },
//     future: undefined
// }

// console.log(student);

// let json = JSON.stringify(student);
// console.log(JSON.stringify(student));
// console.log(json);
// console.log(typeof json);

// json = JSON.parse(json);

// console.log(json);
// console.log(typeof json);

// let requestURL = 'https://jsonplaceholder.typicode.com/posts';
// let request = new XMLHttpRequest();

// request.open('GET', requestURL);
// // request.responseType = 'json';
// request.send();

// console.log(request.responseText);

// async function get(){
//     let url = 'https://jsonplaceholder.typicode.com/posts';
//     let obj = await(await fetch(url)).json;
//     console.log(obj);
// }
// get();

// let arr = "[1,2,3,4,5,6]";
// arr = JSON.parse(arr);
// console.log(arr);

// console.log(arr[3]);

// let userObjStr = '{"name":"One", "age":78}';
// userObjStr = JSON.parse(userObjStr);
// console.log(userObjStr);

// let request = new XMLHttpRequest();

// request.onload = function(){
//     let xmlReq = this.responseXML;
//     let tags = xmlReq.getElementsByTagName('COMPANY');
//     let text = "";
//     for(let i = 0; i < tags.length; i++) {
//         text = text + tags[i].childNodes[0].nodeValue + "<br>";
//     }
//     document.getElementById('change').innerHTML = text;
// }
// request.open('GET', 'catalog.xml');
// request.send();

function loadDoc(){
    let request = new XMLHttpRequest();
    request.onload = function(){
        readXml(this);
    }
    request.open('GET', 'catalog.xml');
    request.send();
}

function readXml(xml){
    let xmlDoc = xml.responseXML;
    let tags = xmlDoc.getElementsByTagName("CD");
    let table = "<tr><th>Artists</th><th>Title</th><th>Company</th><th>Price</th></tr>"
    for (let i = 0; i < tags.length; i++) {
        let color = "white"
        if (Number(i)%2==1) {
            color = "red"
        }
        
        table += `<tr style = 'background-color:${color}'><td>` + 
        tags[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + 
        "</td><td>" + 
        tags[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td><td>"+
        tags[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
        "</td><td>"+
        tags[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    document.getElementById("change").innerHTML = table;
}
// Добавить еще 2 столбца. COMPANY и PRICE