let addbtn = document.getElementById("btn")
let todo = document.getElementById("todocontainer")
let inp = document.getElementById("inp")

    addbtn. addEventListener('click',function(){
        var paragraph = document.createElement('p');
        var textNode = document.createTextNode(inp.value)
        paragraph.appendChild(textNode)
        todo.appendChild(paragraph)
        inp.value= ''
        paragraph.addEventListener('click' , function(){
            paragraph.style.textDecoration="line-through";
        })
        paragraph.addEventListener('dblclick' , function(){
            todo.removeChild(paragraph);
            
            var rembtn = document.createElement("button");
            var remText = document.createTextNode("Edit");
            rembtn.appendChild(remText);

        })
    })

