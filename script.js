 let buttons=document.querySelectorAll("#do-it");
 let city=document.querySelector("#cities").innerText ;
 let blanck=document.querySelector(".blanck");
 let cities=["Faisalabad","Lahore","Karachi","Islamabad","Kashmir"]
//  console.log(cities)
let excess_city=document.querySelector(".inputfield");

let str=""
 
 buttons.forEach((button)=>{
 button.addEventListener('click'||'DOMContentLoaded',e=>{
    str=button.innerHTML;
    //LowerCase
    if(str==="Convert in LowerCase"){
      document.querySelector(".blanck").innerText=city.toLowerCase();
    }//toUpperCase
    else if(str==="Convert in UperCase"){
      document.querySelector(".blanck").innerText=city.toUpperCase();
    }//Capitalization
    else if(str==="Convert in Capitalize"){
      function firstLetter(str) {
        return str.replace(/\b\w/g, function(char) {
          return char.toUpperCase();
        });
      }
      let str = city;
      let capitalizedStr = firstLetter(str);
      document.querySelector(".blanck").innerText=capitalizedStr;
    }/// only First letter Capital using inputbox
       else if (str === "Beter formating") {
        blanck.innerText +=""
        let string1 = excess_city.value;
        let Str = string1.charAt().toUpperCase() + string1.slice().toLowerCase();
        blanck.innerText +=(Str);
    }
    
    // cities in array
    else if(str==="Print All City"){
      blanck.innerText =""
       for(let i=0; i < cities.length;i=1+i){
        blanck.innerText += (i + 1) + ') ' + cities[i] + '\n';  

      }
      // input from inputbox
     } else if(str==="Add Your City in List"){
           blanck.innerText =""
       let excess_city=document.querySelector(".inputfield").value;
            if(excess_city===''){
              blanck.innerText +="Please Enter next city name."+ '\n';
       
            } 
            else{
             blanck.innerText =""
             let obj=cities.concat(excess_city.split("-"));
                 for(let i=1; i<obj.length+1;i=1+i){
                   blanck.innerText +=((i+')')+obj[i-1] + '\n')
                  }
        }
        // data add and check
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
            blanck.innerText += ` "${a}" =>This value is also exist in data `;
        }else if(a===""){
          blanck.innerText += `Input field has not data.You can add data`;
        }
         else {
            blanck.innerText += ` "${a}" This value is NOT also exist in data. You can add data.`;
        }
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


