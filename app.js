

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


//limiting the number of items to 5.
enterButton.addEventListener("click", function (e) {
    e.preventDefault();

    const liNumber = document.querySelectorAll("ul li").length;

    if (liNumber < 4) {
        createListElement();
    } else {
        document.getElementById("enter").disabled = true;
     }
    });


function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates element li in the empty list section - no in html
	li.appendChild(document.createTextNode(input.value)); //makes text from input field 
	ul.appendChild(li); //adds li to ul

	if (input.value == "") {
        alert ("Please write something!")
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("userInput").value = "";


	//TASK DONE
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);


	// adding delete button (no html)
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);


	//delete function
	function deleteListItem(){
		li.classList.add("delete")
	}

    //adding edit button
    var editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);
    editBtn.addEventListener("click", editListItem);

    //edit function
    function editListItem(){
        li.classList.add("edit");
    }

    //adding save button
    var saveBtn = document.createElement("button");
    saveBtn.appendChild(document.createTextNode("Save"));
    li.appendChild(saveBtn);
    editBtn.addEventListener("click", saveListItem);

    //save function
    function saveListItem(){
        li.classList.add("save");
    }


	
}

//to make sure that an empty input field doesn't create a li

function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}


enterButton.addEventListener("click",addListAfterClick);

