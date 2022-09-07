console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/
// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

let node1 = document.getElementById("node1");
        node1.textContent = 'I used the getElementById("node1") method to access this';
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

let node2 = document.getElementsByClassName("node2")[0];
         node2.textContent = 'I used the getElementByClassName("node2") method to access this'; 
    // Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

const allh3s= document.getElementsByTagName("h3");  
  for (let ele of allh3s) {
    ele.textContent= 'I used the getElementByTagName("h3") method to access all of these';
        }
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/
// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let p = document.createElement('p');
p.textContent ='This node was created using the createElement() method';

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent2 = document.querySelector('#parent');
parent2.appendChild(p);

// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <p> tag"
let a = document.createElement("a");
a.textContent = "I am a <p> tag";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent2.insertBefore(a, p);

// BONUS: Add a link href to the <a>
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/
// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let child = document.createElement("N1");
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";
child.replaceWith(newChild);

// TODO: Remove the "New Child Node"
newChild.remove();

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "Apples", "Bananas", "Carrots", "Dragon Fruit", "Eggplant", "Fish", "Grapes", "Honey", "Ice Bag", "Pineapple Juice" ];

// TODO: Create an unordered list element
let ul = document.createElement('ul');
   ul.textContent = `GROCERY LIST`

   // TODO: Iterate over the array values, and create a list item element for each
list.forEach ((item) =>  {
    let li = document.createElement("li");
    li.textContent = item;

// TODO: Append the new list items to the unordered list element
    ul.appendChild(li);
});
// TODO: Append the unordered list to the `div#container` under exercise 4 
let container4 = document.querySelector("#container");
container4.appendChild(ul)

/* ---------------- Exercise #5 : DOM EVENTS ----------------*/
function show() {
    let div = document.createElement("div");
    div.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    
    let button = document.getElementById("btn");
    button.parentNode.insertBefore(div, button);

    function handleEsc (event) {
        if (event.key == "Escape") {
            document.body.removeChild(document.querySelector("#modal"));
        }
    }
    
    function show (event) {
        let modalContainer = document.createElement("div");
        let modalBody = document.createElement("div");
        let title = document.createElement ("h2");
        let modalContent = document.createElement ("p");
        let closeButton = document.createElement ('button');
    
        modalBody.append (title, modalContent, closeButton);
        modalContainer.appendChild (modalBody);
        document.body.appendChild (modalContainer);
        modalContainer.id = "modal";
        modalBody.classList.add("modal-card");
    
        title.textContent = "MODAL";
        modalContent.textContent = "This is a modal!";
        closeButton.textContent = "CLOSE";
    
        modalContainer.addEventListener("click", (event) => {
            console.log (event);
            if (event.target == modalContainer) {
                document.body.removeChild(modalContainer);
                window.removeEventListener("keyup", handleEsc);
            }
        });    
    
        closeButton.addEventListener("click", (event) => {
            document.body.removeChild(modalContainer);
            window.removeEventListener("keyup", handleEsc);
        });
    
        window.addEventListener("keyup", handleEsc);
    }
    
    let btn = document.querySelector("#btn");
    
    btn.addEventListener("click", show);
}