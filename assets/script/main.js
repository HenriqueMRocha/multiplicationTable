function multiplicationTable() {
    var num = document.getElementById("txtn").value;
    var res = document.getElementById("result");
    res.innerHTML = "";

    if (num.length == 0) {
        window.alert('INVALID VALUE!');
    } else {
        num = parseInt(num);
        for (cont = 0; cont <= 10; cont++) {
            res.innerHTML += `${cont} x ${num} = ${cont * num}<br>`;
        }
    }
}