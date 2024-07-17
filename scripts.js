
const input = document.getElementById("input1")
document.write(input.value)
console.log(input.value)
const input2 = document.getElementById("input2")
document.getElementById("uppr").addEventListener("click", () =>{
    input2.value = input.value.toUpperCase()
});
document.getElementById("small").addEventListener("click", () =>{
    input2.value = input.value.toLowerCase()
});
document.getElementById("under").addEventListener("click", () => {
    input2.value = input.value;
    input2.style.textDecoration = input2.style.textDecoration === 'underline' ? '' : 'underline';
});
document.getElementById("bold").addEventListener("click", () =>{
    input2.value = input.value;
    input2.style.fontWeight = input2.style.fontWeight === 'bold' ? 'normal' : 'bold';
});