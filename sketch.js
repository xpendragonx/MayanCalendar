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
      a.href = "https://www.google.com/search?q=Mayan+"+Tzolkin[symbol]+"&rlz=1C1GCEB_enUS1011US1011&sxsrf=AJOqlzVhD0n3cqnHxqJlAkJVz4Y-mLD3Ow%3A1676483845289&ei=BR3tY5-oEayP0PEPufWPgAs&ved=0ahUKEwjfvseAjZj9AhWsBzQIHbn6A7AQ4dUDCBA&uact=5&oq=Mayan+" + Tzolkin[symbol] + "&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyCQgAEAgQHhDxBDIFCAAQhgMyBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToMCC4QyAMQsAMQQxgCOhIILhDHARDRAxDIAxCwAxBDGAI6DwguENQCEMgDELADEEMYAjoNCC4QDRCABBCxAxCxAzoHCAAQDRCABDoNCAAQDRCABBCxAxCDAToJCAAQDRCABBAKOgoILhANEIAEENQCOgcILhANEIAEOgkILhANEIAEEAo6BQguEIAEOgYIABAHEB46BwgAEIAEEAo6CAguEIAEENQCOgkIABAHEB4Q8QQ6DQgAEA0QgAQQsQMQsQM6CwgAEAgQBxAeEPEEOgoILhANELEDEIAEOhMIABANEIAEELEDEIMBELEDEIMBOgoIABANEIAEELEDSgQIQRgAUOEGWNMNYLIQaAFwAXgAgAF6iAG3BJIBAzQuMpgBAKABAcgBE8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz-serp";
      a.target="_blank"
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
