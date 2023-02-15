const month = document.getElementById("month").value;
let months = [0,31,28,31,30,31,30,31,31,30,31,30,31]
const Tzolkin = ["CHUWEN","EB'","B’EN","IX","MEN","K’IB’","KAB’AN","ETZ’NAB’","KAWAK","AJAW","IMIX’","IK’","AK’B’AL","K’AN","CHIK-CHAN","KIMI","MANIK’","LAMAT","MULUK","OK"]

function monthValue(monthInput) {
   switch (monthInput) {
  case "January":
    return 1;
  case "February":
    return 2; 
  case "March":
    return 3;
  case "April":
    return 4; 
  case "May":
    return 5;
  case "June":
    return 6; 
  case "July":
    return 7;
  case "August":
    return 8; 
  case "September":
    return 9;
  case "October":
    return 10; 
  case "November":
    return 11; 
  case "December":
    return 12;
   }
}

function calMonth() {
  let number = 0;
  var month = document.getElementById("month").value;
  let value = monthValue(month)
  for (let i = 0; i < value; i++) {
    number = number + months[i]
  }
  return number
}
function checkDay() {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  let value = monthValue(month)
  if (day > months[value]) {
    console.log("day error")
  } else {
    return day
  }
  //console.log("day " + day)  
}

function checkYear() {
  var year = document.getElementById("year").value;
  if (year < 1933 || year > 2023) {
    document.getElementById("result").innerHTML = "please enter a year between 1933 and 2023"
    console.log("year error")
  }
}

function calculation() {
  
  let month = calMonth()
  var year = document.getElementById("year").value;
  var dayNumber = checkDay()
  let number = parseFloat(month) + parseFloat(dayNumber) + ((year - 1933)*365.2524)
  let symbol = Math.floor(number % 20)
  document.getElementById("result").innerHTML = Tzolkin[symbol];
  var a = document.createElement('a');
      var linkText = document.createTextNode("Click here to learn more");
      a.appendChild(linkText);
      a.title = "my title text";
      a.href = "https://maya.nmai.si.edu/sites/default/files/resources/The%20Meaning%20of%20the%20Days%20in%20the%20Maya%20Sacred%20Calendar.pdf";
      document.getElementById("link").appendChild(a);
  console.log("symbol number = " + symbol)
}

function showAlert(){
  checkDay()
  checkYear()
  calculation()
    // let month = calMonth()
    // var day = document.getElementById("day").value;
    // var year = document.getElementById("year").value;
    // //console.log(monthValue(month))
    // console.log("Month = " +month+" Day = "+day+" Year = " +year +"!");
}
