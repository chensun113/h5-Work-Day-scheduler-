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
//grey part
var rowtext = ["9AM  ", "10AM", "11AM"];
var todolist = document.getElementById("cc");//timelist;
grey();
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
function red(){
}
