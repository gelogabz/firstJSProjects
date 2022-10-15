function fibonacci(n) {
    var n1 = 0;
    var n2 = 1;
    var i = 0;
    var n3;
    document.write(`${n1}<br> ${n2}<br> `);

    while (i < n) {
        n3 = n1 + n2;
        // console.log(n3);
        document.write(`${n3} <br/>`);
        n1 = n2;
        n2 = n3;
        i++;
    }
}

fibonacci(8);