function done() {
    let val
    val = document.getElementById("one_one").value
    if (val == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        if (Number(val)>=60) {
            val = "Вы пенсионер"
        } else if (Number(val)>=18) {
            val = "Вы взрослый"
        } else if (Number(val)>=12) {
            val = "Вы подросток"
        } else if (Number(val)>=0) {
            val = "Вы ребенок"
        }
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 2
    val = document.getElementById("one_two").value
    if (val == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        switch(val) {
            case '0':  // if (x === 'value1')
                val = "Ваш знак: )"
                break
          
            case '1':  // if (x === 'value2')
                val = "Ваш знак: !"
                break
            
            case '2':  // if (x === 'value2')
                val = "Ваш знак: @"
                break
            
            case '3':  // if (x === 'value1')
                val = "Ваш знак: #"
                break
          
            case '4':  // if (x === 'value2')
                val = "Ваш знак: $"
                break
            
            case '5':  // if (x === 'value2')
                val = "Ваш знак: %"
                break
            
            case '6':  // if (x === 'value2')
                val = "Ваш знак: ^"
                break
            
            case '7':  // if (x === 'value2')
                val = "Ваш знак: &"
                break
            
            case '8':  // if (x === 'value1')
                val = "Ваш знак: *"
                break
          
            case '9':  // if (x === 'value2')
                val = "Ваш знак: ("
                break
        
            default:
                val = "<span style='color:red;'>Число не существует</span>"
                break
          }
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 3
    val = document.getElementById("one_three").value
    if (val == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        let one_symbol = Number(val[0])
        let two_symbol = Number(val[1])
        let three_symbol = Number(val[2])
        if (one_symbol == two_symbol || one_symbol == three_symbol || two_symbol == three_symbol) {
            val = "Есть совпадения"
        } else {
            val = "Нет совпадений"
        }
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 4
    val = document.getElementById("one_four").value
    if (val == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        if (Number(val) % 400 == 0 || Number(val) % 4 == 0 && Number(val) % 100  != 0) {
            val = "Год весокосен"
        } else {
            val = "Год не весокосен"
        }
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 5
    val = document.getElementById("one_four").value
    if (val == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        val2 = val.split("").reverse().join("");
        if (val2 == val) {
            val = "Это палиндром"
        } else {
            val = "Это НЕ палиндром"
        }
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
}


document.getElementById("console").innerHTML += " >>> " + two + "<br><br>"
