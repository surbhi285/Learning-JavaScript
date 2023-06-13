// Forms
//1-> select the element

const inputElement = document.getElementById("name");

let name=""

// this event will only capture character and not backspace and alt button
// the implementation of this keypress is different browsers.
    // inputElement.addEventListener("keypress", (event)=>{
    //     console.log("key is pressed") // so whenever we write something it give key is pressed in console
    //     console.log(event) // it will show all properties of event
    //     let key = event.key;
    //     console.log(key); // it give the name of key which we pressed in console
    // })

// keydown --> it capture every key.
// inputElement.addEventListener('keydown', (event)=>{
// console.log("keydown is pressed")
// })

// keyup ---> it is fired when when a key is released
inputElement.addEventListener('keyup',(event)=>{
    console.log("keyup is pressed")
})


// copy event ---> to check if we are copying 

const Password = document.getElementById("password");
Password.addEventListener("copy", (event)=>{
    console.log("copying!!") // if we copy it will console copying!!!
    event.preventDefault(); // to prevent the copying     
})

// paste event --> to prevent pasting

const rePassword = document.getElementById("re-password");
rePassword.addEventListener("paste", (event)=>{
    console.log("Pasting!!!")
    event.preventDefault();
})

// cut event --> to prevent cut 

Password.addEventListener("cut", (event)=>{
    console.log("cut")
    event.preventDefault();
})

//FOCUS  -> basically colored outline on the element
// suppose in name input we give the value and we want to remove as soon as we click 
//in that input then we can use focus
inputElement.addEventListener('focus', (event)=>{
    console.log("it is focused");
    event.target.value="" // here we target value property in event as soon as it is fired the value should be empty

})

// blur-> opposit of focus

inputElement.addEventListener("blur",(event)=>{
    console.log("blur!!!")
    const value = event.target.value;
    console.log("value debug", value);

    if(!/^[a-zA-Z]/.test(value)){
        console.log("error here")
    }
})


//Forms event --> by selecting form we can get each and every element of it 

const formElement = document.getElementById("forms");

const nameElement = formElement.elements["name"];
console.log("name Element")
console.dir(nameElement)

const password = formElement.elements["password"];
console.log("password")
console.dir(password)

formElement.addEventListener("submit",(event)=>{
    event.preventDefault();// default nature of submit is refreshing the page so to stop that we use preventdefault
    console.log("submit");

})
