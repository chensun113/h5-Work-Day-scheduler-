//Show Time
var t = document.querySelector("#currentDay");
var t2 = moment().format('LLLL');
t.textContent=t2;
//grey part
var rowtext =["9AM","10AM","11AM"];
var todolist = document.getElementById("cc");//timelist;
grey();
function grey(){
   // var todolist = document.getElementById("cc");//timelist;

   
   for(var i = 0; i < 3; i++){
       
        var textarea = document.createElement("textarea");//中心title
        // textarea.contains="1234";
        textarea.setAttribute("name", "textarea");
        textarea.setAttribute("id", "textarea");
        textarea.setAttribute("col", "110");
        textarea.setAttribute("row", "3");

        var divpast =document.createElement("div");//外一层title
        divpast.appendChild(textarea);
        divpast.setAttribute("class","past");

        var Row = document.createElement("div");
        Row.appendChild(divpast);
        Row.setAttribute("class","row");

     


        // todolist.appendChild(Row);
        todolist.appendChild(divpast);
    
    
    }


}