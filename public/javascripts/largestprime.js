function testPrime(num) {
    var isPrime = true;
    if (num >= 2) {
      if(num == 2 || num == 3) {
        isPrime = true;
      } else if (num % 2 == 0) {
        isPrime = false;
      } else {
        var n = Math.floor(Math.sqrt(num));
        for (i = 3; i <= n; i += 2) {
          if (num % i == 0) {
            isPrime = false;
            break;
          }
        }
      }
    } else {
      isPrime = false;
    }
    return isPrime;
  }
  
  function largestprime() {
    var num=document.getElementById("num2").value;
    var arr = [];
    var i 
    cek(num,"result2");
    for (i = 1; i <= num; i += 1) {
      if (num % i === 0) {
        if (testPrime(i) == true) {
          arr.push(i);
          num = num / i;
        }
      }
    }
    var result = Math.max.apply(null, arr);
    //document.getElementById("result2").setAttribute('value', c);
    document.getElementById("result2").value = result;
    //result2.innerHTML = c;
  }