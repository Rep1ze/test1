function pifagor(){
    let a = prompt("Введите сторону A")
    if(!a || isNaN(a)){
        alert("Сторона должна иметь другое значение")
    }else{
        let b = prompt("Введите вторую сторону B")
        if(!b || isNaN(b)){
            alert("Сторона должна иметь другое значение")
        }else{
            let c = prompt("Введите сторону C")
            if(!c || isNaN(c)){
                alert("Сторона должна иметь другое значение")
            }else if(a**2 == b**2 + c**2 || b**2 == a**2 + c**2 || c**2 == a**2 + b**2){
                alert("Явялется")
            }else{
                alert("Не является")
            }
        }
    }
}