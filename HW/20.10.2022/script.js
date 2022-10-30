function done() {
    document.getElementById("console").innerHTML = ""
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
    val = document.getElementById("one_five").value
    if (val == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        let val2 = val.split("").reverse().join("");
        if (val2 == val) {
            val = "Это палиндром"
        } else {
            val = "Это НЕ палиндром"
        }
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 6
    val = document.getElementById("one_six").value
    if (val == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        let val_EUR = val * 1
        let val_UAN = val * 7.27
        let val_AZN = val * 1.7
        val = `${val} USD = ${val_EUR} EUR, ${val_UAN} UAN, ${val_AZN} AZN`
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 7
    val = document.getElementById("one_seven").value
    if (val == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        if (Number(val) >= 500) {
            val = Number(val) - Number(val)/100*7
        } else if (Number(val) <= 500 && Number(val) >= 300) {
            val = Number(val) - Number(val)/100*5
        } else if (Number(val) >= 200 && Number(val) <= 300) {
            val = Number(val) - Number(val)/100*3
        }
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 8
    let val_1 = document.getElementById("one_eight1").value
    let val_2 = document.getElementById("one_eight2").value
    if (val_1 == "" || val_2 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        let С = val_1
        let P = val_2
        let a = P/4
        let r = С / (2 * 3.14) 
        if (a>=r) {
            val = "Круг поместится в квадрат"
        } else {
            val = "Круг НЕ! поместится в квадрат"
        }
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 9
    val_1 = document.getElementById("one_nine1").value
    val_2 = document.getElementById("one_nine2").value
    let val_3 = document.getElementById("one_nine3").value
    if (val_1 == "" || val_2 == "" || val_3 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        val = 0
        if (Number(val_1) == 4){
            val += 2
        }
        if (Number(val_2) == 8) {
            val += 2
        }
        if (Number(val_3) == 3) {
            val += 2    
        }
        val = `Вы заработали ${val} очков.`
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 10
    val_1 = document.getElementById("one_ten1").value
    val_2 = document.getElementById("one_ten2").value
    val_3 = document.getElementById("one_ten3").value
    if (val_1 == "" || val_2 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        val_1 = Number(val_1) + 1
        val_2 = Number(val_2) - 1
        val_3 = Number(val_3)
        var today = new Date(val_3, val_2, val_1)
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today =  dd + '/' + mm + '/' + yyyy;
        val = `Завтра ${today}`
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // 
    // 
    // 
    // 
    // 
    //
    // 
    // 
    //
    // 
    // 
    //
    // Задание 1
    val_1 = document.getElementById("two_one1").value
    val_2 = document.getElementById("two_one2").value
    if (val_1 == "" || val_2 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        if (Number(val_1) < Number(val_2)) {
            val = -1
        } else if (Number(val_1) > Number(val_2)) {
            val = 1
        } else {
            val = 0
        }
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 2
    val_1 = document.getElementById("two_two").value
    if (val_1 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        let value = Number(val_1)
        val = 1
        while (true){
            if (value==1) {
                break
            } else {
                val *= value
                value-=1
            }
        }
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 3
    val_1 = document.getElementById("two_three1").value
    val_2 = document.getElementById("two_three2").value
    val_3 = document.getElementById("two_three3").value
    if (val_1 == "" || val_2 == "" || val_3 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        val = "" + val_1 + val_2 + val_3
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
    // Задание 4
    val_1 = document.getElementById("two_four1").value
    val_2 = document.getElementById("two_four2").value
    if (val_1 == "" || val_2 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        val = Number(val_1) * Number(val_2)
        val = `S = ${val}`
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }

    // Задание 5
    val_1 = document.getElementById("two_five").value
    if (val_1 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        val = 0
        let vall = val_1/2
        while (vall>=0) {
            if (val_1%vall==0){
                val+=vall
            }
            vall-=1
        }
        if (+val == +val_1) {
            val = "Число совершенное"
        } else {
            val = "Число НЕ совершенное"
        }

        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }

    // Задание 6                       НЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ ДОДЕЛАЛ 
    val_1 = document.getElementById("two_six1").value
    val_2 = document.getElementById("two_six2").value
    if (val_1 == "" || val_2 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        let val_global = ""
        while (true) {
            val = 0
            let vall = val_1/2
            while (vall>=0) {
                if (val_1%vall==0){
                    val+=vall
                }
                vall-=1
            }
            if (+val == +val_1) {
                val_global += `${val} `
            }
            if (+val_1 >= +val_2) {
                break
            }
            val_1 += 1
        }
        

        document.getElementById("console").innerHTML += " >>> " + val_global + "<br><br>"
    }
    // Задание 7
    val_1 = document.getElementById("two_seven1").value
    val_2 = document.getElementById("two_seven2").value
    val_3 = document.getElementById("two_seven3").value
    if (val_1 == "" || val_2 == "" || val_3 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        val = `${val_1}:${val_2}:${val_3}`
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }

    // Задание 8
    val_1 = document.getElementById("two_eight1").value
    val_2 = document.getElementById("two_eight2").value
    val_3 = document.getElementById("two_eight3").value
    if (val_1 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Часы не введены</span>" + "<br><br>"
    } else {
        if (val_2 == "") {
            val_2 = "00"
        }
        if (val_3 == "") {
            val_3 = "00"
        }
        val = `${val_1}:${val_2}:${val_3}`
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }

    // Задание 9
    val_1 = document.getElementById("two_nine1").value
    val_2 = document.getElementById("two_nine2").value
    val_3 = document.getElementById("two_nine3").value
    if (val_1 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Часы не введены</span>" + "<br><br>"
    } else {
        val_1 = Number(val_1) * 60 * 60
        val_2 = Number(val_2) * 60
        val = `${val_1}:${val_2}:${val_3}`
        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }

    // Задание 10
    val_1 = document.getElementById("two_ten").value
    if (val_1 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        let new_val = val_1
        hower = Math.floor(new_val/(60*60))
        new_val -= hower*60*60
        
        minute = Math.floor(new_val/(60))
        new_val -= minute*60
        second = val_1-(hower*60*60 + minute*60)

        val = `${hower}:${minute}:${second}`

        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }


    // Задание 11
    val_1 = document.getElementById("two_eleven1").value
    val_2 = document.getElementById("two_eleven2").value
    val_3 = document.getElementById("two_eleven3").value
    val_4 = document.getElementById("two_eleven4").value
    val_5 = document.getElementById("two_eleven5").value
    val_6 = document.getElementById("two_eleven6").value
    if (val_1 == "") {
        document.getElementById("console").innerHTML += " >>> " + "<span style='color:red;'>Вы ничего не ввели</span>" + "<br><br>"
    } else {
        let one_date = Number(val_1)*60*60 + Number(val_2)*60 + Number(val_3)
        let two_date = Number(val_4)*60*60 + Number(val_5)*60 + Number(val_6)
        let new_val = Number(two_date)-Number(one_date)
        let new_val_help = Number(two_date)-Number(one_date)
        hower = Math.floor(new_val_help/(60*60))
        new_val_help -= hower*60*60
        
        minute = Math.floor(new_val_help/(60))
        new_val_help -= minute*60
        second = new_val-(hower*60*60 + minute*60)

        val = `${hower}:${minute}:${second}`

        document.getElementById("console").innerHTML += " >>> " + val + "<br><br>"
    }
}


// document.getElementById("console").innerHTML += " >>> " + two + "<br><br>"
