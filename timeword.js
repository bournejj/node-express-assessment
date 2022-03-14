
function timeWord(n) {
    const number = n
    var hours = number.substr(0, number.indexOf(':'));
    var minutes = number.substr(number.indexOf(':') + 1);
    const hoursResult = convertHour(hours)
    
    let minutesResult =  convertMinutes(minutes);
   
    if (minutesResult == undefined && hours >= 12) { 
      return (`${hoursResult} o'clock pm`)
       
    }
    else if (minutesResult == undefined && hours <= 11) { 
      return (`${hoursResult} o'clock am`)
       
    }

    else if (hours <= 11) {
      return (`${hoursResult} ${minutesResult} am`)

    }
    else if (hours >= 12) {
      return (`${hoursResult} ${minutesResult} pm`)

    }
   
    else if (hours && minutes == undefined) {
      return ('midnight')

    }
   

    
  
    

    console.log(hours) 
    // const result = to12HourFormat(number)
    console.log(number)
    return (`${hoursResult} ${minutesResult} pm`)
}
    




function convertMinutes(n){
    var num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
  var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
      if (n < 20) return num[n];
      var digit = n%10;
      if (n < 100) return tens[~~(n/10)-2] + (digit? "-" + num[digit]: "");
      
  }
  
  
  
  function convertHour(num) {
    if (num > 12) {
        num -= 12;
    }
    return convertNumberToName(num);
  }
  
  function convertNumberToName(num) {
    var lowNames = ["zero", "one", "two", "three", 
                  "four", "five", "six", "seven", "eight", "nine", 
                 "ten", "eleven", "twelve", "thirteen", "fourteen", 
                  "fifteen", "sixteen", "seventeen", 
                  "eighteen", "nineteen"];
    var tensNames = ["twenty", "thirty", "forty", "fifty", 
                "sixty", "seventy", "eighty", "ninety"];
    var tens, ones, result;
    if (num < lowNames.length) {
        result = lowNames[num];
    } else {
        tens = Math.floor(num / 10);
        ones = num % 10;
        if (tens <= 9) {
            result = tensNames[tens - 2];
            if (ones > 0) {
                result += " " + lowNames[ones];
            }
        } else {
            result = "unknown"
        }
    }
    return result;
  }
  
  module.exports = timeWord;


