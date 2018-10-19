
document.addEventListener('DOMContentLoaded', () => {

  var multiplicant_list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  console.log(multiplicant_list)
  for (i = 2; i <= 12; i++) {
    var li = document.createElement("li");
    var input = document.createElement("input");
    input.type = "checkbox";
    input.className = "list_mult";
    input.name = "checkbox";
    input.value = i
    li.appendChild(input)
    li.innerHTML += i
    document.querySelector('ul').appendChild(li)
}

  var checkbox = document.querySelectorAll("input[name=checkbox]");
  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = true;
    checkbox[i].addEventListener('change' , function() {
      if(this.checked) {
        multiplicant_list.push(this.value)
        randomMultiply()
      } else {
        var index = multiplicant_list.indexOf(this.value);
        if (index > -1) {
          multiplicant_list.splice(index, 1);
        }
        if (multiplicant_list.length!=0) {
          randomMultiply()
        }

      }
    })
  }

  function randomMultiply() {
    var multiplicant = multiplicant_list[Math.floor(Math.random() * multiplicant_list.length)];
    document.querySelector("#multiplicant").innerHTML = multiplicant;
    var multiplicator = Math.floor(Math.random() * 11) + 2;
    document.querySelector("#multiplicator").innerHTML = multiplicator;
  }


  var count = 0
  var answer = document.querySelector("#answer")
  answer.addEventListener('input', function() {
    var multiplicant = document.querySelector("#multiplicant").innerHTML
    var multiplicator = document.querySelector("#multiplicator").innerHTML
    if (multiplicant*multiplicator==answer.value) {
      answer.classList.add("success");
      answer.disabled = true;
      if (multiplicant_list.length!=0) {
        setTimeout(function(){
          randomMultiply()
          answer.disabled = false;
          answer.classList.remove("success");
          answer.value = ''
          count += 1
          document.querySelector("#count").innerHTML = count
        }, 500);
      }
      else {

      }


    }
  })

  randomMultiply()
});
