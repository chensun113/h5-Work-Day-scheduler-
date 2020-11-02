//scroll down
window.onscroll = function() {scrollFunction()};
function scrollFunction(){

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("cc").style.top = "0";
      } else {
        document.getElementById("cc").style.top = "-50px";
      }
}
//Show Time
var t = document.querySelector("#currentDay");
var t2 = moment().format('LLLL');
t.textContent = t2;
//grey part variables
var rowtext = ["9AM  ", "10AM", "11AM"];
var greentext=["1PM","2PM","3PM","4PM","5PM"];
var todolist = document.getElementById("cc");//timelist;
//call functions
grey();
Redpart();
greenpart();
//grey part function 
function grey() {
    // var todolist = document.getElementById("cc");//timelist;
for (var i = 0; i < 3; i++) {
        //whole content
        var div_time_block = document.createElement("div");
        div_time_block.setAttribute("class", "time-block");
       
        //line
        var div_hour = document.createElement("div");
        div_hour.setAttribute("class", "hour");
       //white part with time title: 9AM,10AM,11AM;
       var div_row = document.createElement("div");
        div_row.setAttribute("class", "row");
        var todo = rowtext[i];
        div_row.textContent = todo;
       
        var div_past = document.createElement("div");
        div_past.setAttribute("class", "past");
        //grey textareas
        var textarea = document.createElement("textarea");
        var size1 = 110;
        textarea.setAttribute("name", "textarea");
        textarea.setAttribute("cols", size1);
           if (i==2){
            var e1 = "Event that already happened";
            textarea.textContent=e1;}
        
        //blue part(white)
        var div_saveBtn = document.createElement("div");
        div_saveBtn.textContent = "                ";
        div_saveBtn.setAttribute("class", "saveBtn");
    
        //blue button
        var div_description = document.createElement("button");
        div_description.setAttribute("class", "description");
        // div_description.setAttribute(div_description, size2);
        div_description.textContent=" ";
        todolist.appendChild(div_time_block);

        div_time_block.appendChild(div_hour);
        div_time_block.appendChild(div_row);

        div_row.appendChild(div_past);
        div_row.appendChild(div_saveBtn);

        div_past.appendChild(textarea);

        div_saveBtn.appendChild(div_description);
      
    }//for-loop-3-grey
}//function grey();
function Redpart(){
      //whole content
      var div_time_block = document.createElement("div");
      div_time_block.setAttribute("class", "time-block");
   
     
      //line
      var div_hour = document.createElement("div");
      div_hour.setAttribute("class", "hour");
     
     var div_row = document.createElement("div");
      div_row.setAttribute("class", "row");
      
      div_row.textContent = "12PM";//change text here
      //only div_present to change text-area color from grey to red;
      var div_past = document.createElement("div");
      div_past.setAttribute("class", "present");
      //textareas still the same as grey part
      var textarea = document.createElement("textarea");
      var size1 = 110;
      textarea.setAttribute("name", "textarea");
      textarea.setAttribute("cols", size1);
      var e2 = "Current hour";
      textarea.textContent=e2;
      //blue part(white)
      var div_saveBtn = document.createElement("div");
      div_saveBtn.textContent = "                ";
      div_saveBtn.setAttribute("class", "saveBtn");
  
      //blue button
      var div_description = document.createElement("button");
      div_description.setAttribute("class", "description");
      // div_description.setAttribute(div_description, size2);
      div_description.textContent=" ";
      todolist.appendChild(div_time_block);

      div_time_block.appendChild(div_hour);
      div_time_block.appendChild(div_row);

      div_row.appendChild(div_past);
      div_row.appendChild(div_saveBtn);

      div_past.appendChild(textarea);
    

      div_saveBtn.appendChild(div_description);

}//green parts

function greenpart() {
    // var todolist = document.getElementById("cc");//timelist;
for (var i = 0; i < 5; i++) {
        //whole content
        var div_time_block = document.createElement("div");
        div_time_block.setAttribute("class", "time-block");
       
        //line
        var div_hour = document.createElement("div");
        div_hour.setAttribute("class", "hour");
       //1PM-5PM
       var div_row = document.createElement("div");
        div_row.setAttribute("class", "row");
        var todo = greentext[i];
        div_row.textContent = todo;
       
        var div_past = document.createElement("div");
        div_past.setAttribute("class", "future");
        //grey textareas
        var textarea = document.createElement("textarea");
        var size1 = 110;
        textarea.setAttribute("name", "textarea");
        textarea.setAttribute("cols", size1);
        //blue part(white)
        var div_saveBtn = document.createElement("div");
        div_saveBtn.textContent = "                ";
        div_saveBtn.setAttribute("class", "saveBtn");
    
        //blue button
        var div_description = document.createElement("button");
        div_description.setAttribute("class", "description");
        // div_description.setAttribute(div_description, size2);
        div_description.textContent=" ";
        todolist.appendChild(div_time_block);

        div_time_block.appendChild(div_hour);
        div_time_block.appendChild(div_row);

        div_row.appendChild(div_past);
        div_row.appendChild(div_saveBtn);

        div_past.appendChild(textarea);

        div_saveBtn.appendChild(div_description);
    }//for-loop-5
}//fun-green
