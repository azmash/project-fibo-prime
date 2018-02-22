function fibo() {
  var x = document.getElementById("num1").value;
  var fibonacci = [1, 2, 3];
  var result = [];
  var i = 3;
  sum = 0;
  if (x == "") {
    alert("data kosong"); //jika angka kosong maka pesan akan tampil
    exit;
  } else if (isNaN(x)) {
    alert("masukkan angka"); //jika angka kosong maka pesan akan tampil
    exit;
  }
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
