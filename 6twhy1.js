function cal(type){
          var inputobj1 = document. getElementById ('num1');
          var inputobj2 = document. getElementById ('num2');
          var result;
          switch(type){
            case '+':
              result = parseInt(inputobj1.value) + parseInt(inputobj2.value);
            break;
            case'-':
              result = parseInt(inputobj1.value) - parseInt (inputobj2.value);
            break;
            case'*':
              result = parseInt (inputobj1.value) * parseInt (inputobj2.value);
              break;
            case '/':
            result = parseInt(inputobj1.value) / parseInt(inputobj2.value);
            break;
        }
        console.log(result);
        var resultobj = document.getElementById("resultId");
        resultobj.value = result;
}
