function cek(num, res) {
  if (num == "" || num == " ") {
    alert("Data Kosong"); //jika angka kosong maka pesan akan tampil
    document.getElementById(num) = "";
    // clear;
  } else if (isNaN(num)) {
    alert("Masukkan Angka"); //jika angka kosong maka pesan akan tampil
    document.getElementById(num) = "";
    // clear;
  } else if (num <= 1) {
    alert("Error");
    document.getElementById(num).value = "";
    // clear;
  }
}

function fibo() {
  var x = document.getElementById("num1").value;
  var fibonacci = [1, 2, 3];
  var result = [];
  var i = 3;
  sum = 0;
  cek(x, "result1");
  if (x == "") {
    document.getElementById("result1").value = "";
  } else {
    while (fibonacci[i - 1] + fibonacci[i - 2] <= x) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      i += 1;
    }

    for (var j in fibonacci) {
      if (fibonacci[j] % 2 === 0) {
        result.push(fibonacci[j]);
      }
    }
    document.getElementById("result1").value = result;
  }
}
