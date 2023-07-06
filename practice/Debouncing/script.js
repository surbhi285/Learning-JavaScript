const inputBox = document.getElementById("input");

inputBox.addEventListener("input", searchCallBackFunction)

const searchCallBackFunction=(e)=>{
    const value = e.target.value;
    console.log(value, "value");
}