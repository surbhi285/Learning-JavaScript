//-------------INSERTION WAYS-----------//

//1-> append -> it takes the element and add it to the last

const body = document.body;
console.dir(body);

// creation of h level tags using append

const headingTag = document.createElement("h1");
headingTag.innerText="Advance selectors"

body.append(headingTag);

const headingTag2 = document.createElement("h3");
headingTag2.innerText = "subtopic of advance selectors"
body.append(headingTag2);

// //------> to add name after the list 
//  const unorderedList1 = document.getElementById("names")
//  const newMember1 = document.createElement("li");
//  newMember1.innerText = "ruchi";
//  unorderedList1.append(newMember1);


// //2-> prepend -> inserting the element at the first position

const headingTag3 = document.createElement("h2");
headingTag3.innerText = "we are learning";
headingTag3.style.color = "red"
body.prepend(headingTag3);

// //-----> to add name before the list
// const unorderedList2 = document.getElementById("names")
// const newMember = document.createElement("li");
// newMember.innerText="surbhi";
// unorderedList2.prepend(newMember);

// //3-> before -> inserts the elements before the selected element.

// // here in below eg we are adding heading before the unordered list.
const unorderedList3 = document.getElementById("names");
const heading = document.createElement("h1");
heading.textContent = "List of all the employees";

unorderedList3.before(heading);

// // 4-> after -> inster the element after the selected element.

const unorderedList4 = document.getElementById("names");
const footer = document.createElement("h1");
footer.innerText = " This is the end of the list";

unorderedList4.after(footer);

// // 5-> before begin -> act as before
// // 6-> before end -> act as append

// // 7-> after begin -> act as prepend
// // 8-> after end -> act as after

const unorderedList5 = document.getElementById("names")

unorderedList5.insertAdjacentHTML("afterbegin", "<li>Akash afterbegin</li>")// ->insert at first of list
unorderedList5.insertAdjacentHTML("beforeend", "<li>Akash beforeend</li>")//->insert at last of list
unorderedList5.insertAdjacentHTML("beforebegin", "<li>Akash beforebegin</li>")//->insert as heading of list
unorderedList5.insertAdjacentHTML("afterend", "<li>Akash afterend</li>")//-> inster as footer of list
//------ document.write() -------
//it replace all the html content with the new content that u write 

