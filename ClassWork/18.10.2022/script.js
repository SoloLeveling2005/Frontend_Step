

// Задание 1

// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
// let time = 12
// let obed = 14
// let people_now = 1


// let giveParcel = (peopleWaiting,people_now) => {
//     alert(`${peopleWaiting[people_now-1]} не получил(а) посылку и ушел(ла) из очереди`)
//     peopleWaiting.splice(people_now-1,1)
    
// }
// let leaveQueueWithoutParcel  = (peopleWaiting,people_now) => {
//     alert(`${peopleWaiting[people_now-1]} получил(а) посылку. В очереди осталось ${peopleWaiting.length - 1} человек.`)
//         peopleWaiting.splice(people_now-1,1)
//         time+=1
// }


// while (true) {
//     if (time > obed) {
//         giveParcel(peopleWaiting,people_now)
//         if (peopleWaiting.length == 0) {
//             break
//         }
//     } else {
//         leaveQueueWithoutParcel(peopleWaiting,people_now)
//     }
// }









// Задание 2

// let getSumOfSequence = (number) => {
//     let start = 1
//     let end = number
//     let mass = []
//     for (number; number--;number<0) {
//         mass.unshift(number+1)
//     }
//     return [mass,start+end]
// }

// console.log(getSumOfSequence(5)[0])
// console.log(getSumOfSequence(5)[1])







// Задание 3

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// let coffeeName = prompt("Поиск кофе по названию:")

// let buy = false
// let checkAge = (i) => {    
//     if (i.toLowerCase() == coffeeName.toLowerCase()) {
//         alert(`Держите ваш любимый кофе ${i}. Он ${coffees.indexOf(i)+1}-й по популярности в нашей кофейне.`)
//         buy = true;
//     } else {
//         if (buy==false && coffees.indexOf(i)+1==coffees.length) {
//             alert(`К сожалению, такого вида кофе нет в наличии`)
//         }
//     }
// }
// coffees.findIndex(checkAge);







// Задание 4
// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];

// let updatedPrices = prices.map((i,index) => {
//     return (`${Number(prices[index])+Number(prices[index])*0.5}`);
// });
// console.log(updatedPrices)
// for (let i in updatedPrices) {
//     updatedPrices.unshift(Number(prices[i])+Number(prices[i])*0.5)
//     alert(`Кофе ${coffees[i]} сейчас стоит ${Number(prices[i])+Number(prices[i])*0.5} евро`)
// }











// Задание 5

// let clientsEstimations = []


// let askClientToGiveEstimation = (clientsEstimations) => {
//     let ochenka = +prompt("Как вы оцениваете нашу кофейню от 1 до 10?")
//     try{
//         if (ochenka<=10 && ochenka>=1) {
//             clientsEstimations.push(ochenka)
//         } else {
//             alert("Число слишком маленькое или большое)")
//             askClientToGiveEstimation(clientsEstimations)
//         }
//     }catch{
//         alert("Ввели не число")
//     }
        
// }


// askClientToGiveEstimation(clientsEstimations)
// askClientToGiveEstimation(clientsEstimations)
// askClientToGiveEstimation(clientsEstimations)
// askClientToGiveEstimation(clientsEstimations)


// let goodEstimations = clientsEstimations.filter(clientEstimate => clientEstimate > 5);
// let notGoodEstimations = clientsEstimations.filter(clientEstimate => clientEstimate <= 5);

// alert(`Всего положительных оценок: ${(goodEstimations.length)}; Всего отрицательных оценок: ${notGoodEstimations.length}`)