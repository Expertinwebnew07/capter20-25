 let buttons=document.querySelectorAll("#do-it");
 let city=document.querySelector("#cities").innerText+"\u{270C}" ;
 let blanck=document.querySelector(".blanck");
 let cities=["Faisalabad","Lahore","Karachi","Islamabad","Kashmir"]
//  console.log(cities)
let excess_city=document.querySelector(".inputfield");

let str=""
 
 buttons.forEach((button)=>{
 button.addEventListener('click',e=>{
    str=button.innerHTML;
       //1 LowerCase
    if(str==="Convert in LowerCase"){
      document.querySelector(".blanck").innerText=city.toLowerCase();
     
    }     //2 toUpperCase
    else if(str==="Convert in UperCase"){
      document.querySelector(".blanck").innerText=city.toUpperCase();
    }       //3 Capitalization
    else if(str==="Convert in Capitalize"){
      function firstLetter(str) {
        return str.replace(/\b\w/g, function(char) {
          return char.toUpperCase();
        });
      }
      let str = city;
      let capitalizedStr = firstLetter(str);
      document.querySelector(".blanck").innerText=capitalizedStr;
    }            ///4 Beter formating  only First letter Capital using inputbox
       else if (str === "Beter formating") {
        blanck.innerText +=""
        let string1 = excess_city.value;
        let Str = string1.charAt(0).toUpperCase() + string1.slice(1).toLowerCase();
        blanck.innerText +=(Str);
    }
    
                      //5 All cities in array
    else if(str==="Print All City"){
      blanck.innerText =""
       for(let i=0; i < cities.length;i=1+i){
        blanck.innerText += (i + 1) + ') ' + cities[i] + '\n';  

      }
                                  //6 Add Your City 
     } else if(str==="Add Your City in List"){
           blanck.innerText +=""
       let excess_city=document.querySelector(".inputfield").value;
           for(let i=0;i<=cities.length-1;i++){
           if( cities[i].toLowerCase() ===excess_city.toLowerCase()){
            blanck.innerText +="This city is already exist in data.Please add another data";
            break;
           } if(excess_city===''){
            blanck.innerText +="Please Enter next city name.You input is Blanck."+ '\n';
            break;
          }if(cities[i].toLowerCase() !==excess_city.toLowerCase()){
           let obj=cities.concat(excess_city.split("-"));
           blanck.innerText +=""
               for(let i=1; i<obj.length+1;i=1+i){
                 blanck.innerText +=((i+')')+obj[i-1] + '\n')
                 }
                break;
           }
           
        }
                                        //7 data add and check
      }else if (str === "Check City In list") {
        blanck.innerText =""
        let a = excess_city.value;
        a = typeof a === 'string' ? a.toLowerCase() : ""; // Convert 'a' to lowercase if it's a string
        
        // console.log(a+"a");
        
        let cityExists = false; // suppose it is not exist    
        
        for (let i = 0; i < cities.length; i++) {
            cities[i] = typeof cities[i] === 'string' ? cities[i].toLowerCase() : ""; //  cities to lowercase
            // console.log(i);
            if (cities[i] === a) {
                cityExists = true; //  suppose it is exist
                break; // Exit the loop once the city is found
            }
        }
        
        if (cityExists) {
            blanck.innerText += `👉 "${a}"   =>This value is also exist in data    \u{1F448}`;
        }else if(a===""){
          blanck.innerText += `\u{1F60D} Input field has not data.You can add data`;
        }
         else {
            blanck.innerText += ` "${a}" \u{1F90C} This value is NOT also exist in data. You can add data.`;
        }
    }
    ////   Check Word cities in array
    else if(str === "Check Word"){
      blanck.innerText =""
      let cities = document.querySelectorAll(".cities");

                      // THis part for removing . in text ==>> 
// declear a blank array
      let cityTexts = [];
//  function for deleair last index as=> .
function dot(text) {
    if (text.endsWith(".")) {
//0 is index and  and -1 meands start from right side 
        return text.slice(0, -1);
    } else {
        return text;
    }
}
// excess the text 
cities.forEach((city) => {
    let cityText = city.textContent;
    let words = cityText.split(" ");
    words = words.map(dot);
    cityTexts.push(words.join(" "));
});

// This part is for combine words cut of  space ===>>>
let array = [];
cityTexts.forEach(cityText => {
    let words = cityText.split(" ");
    array = array.concat(words);
    
});

 
 
let words = array;
let searchString = excess_city.value;
console.log(typeof searchString); // Check the type of searchString

for (let i = 0; i < searchString.length; i++) {
  console.log(searchString[i]); // Log each character in searchString
}

let found = false;
for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === searchString.toLowerCase()) {
    found = true;
    break; // Once found, no need to continue looping
  }
}

if (found) {
  blanck.innerText =`The word "${searchString}" is found in the array. `;

  // Toasted type code
   toastr["success"]("\u{1F44D} Your Task is completed now", "Success")
   toastr.options = {
  "positionClass": "toast-top-right",
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

} else {
  blanck.innerText =`The word "${searchString}" is not found in the array.`;

  // Toasted type code
   toastr["error"]("Data has not been this type of word.", "Sorry \u{1F91E}")
   toastr.options = {
  "positionClass": "toast-top-left",
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
}


 

}else if(str === "Replace This Word"){
        console.log("Replace this word as you Know.")
        function check(){
          for(let i=0;i<=city.length;i++){
            console.log(city[i]);
             // declear a blank array
      let cityTexts = [];
      //  function for deleair last index as=> .
      function dot(text) {
          if (text.endsWith(".")) {
      //0 is index and  and -1 meands start from right side 
              return text.slice(0, -1);
          } else {
              return text;
          }
      }
      console.log(cityTexts)
       
          }
        }
        check();
}
 
  })
  
 })
  
document.querySelector(".cleardispaly").onclick=()=>{
   document.querySelector(".blanck").innerHTML="";
}
let clearinput=document.querySelector(".input-clear");
clearinput.addEventListener('click',()=>{
  excess_city.value=""
})











 // 
//  console.log(buttons)


