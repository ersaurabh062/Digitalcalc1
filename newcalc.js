let str = "";
let allbtn = document.querySelectorAll("button");
let input = document.getElementById("inptxt");
let arr = Array.from(allbtn);

arr.forEach((allbtn) => {
  allbtn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
      input.value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      input.value = str;
    } else if (e.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
      input.value = str;
    } else {
      str += e.target.innerHTML;
      input.value = str;
    }
  });
});

