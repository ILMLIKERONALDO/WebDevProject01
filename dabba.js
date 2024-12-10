const colorswitch = document.getElementById("switch");
const dabba = document.getElementById("box");
const colors = ["red","orange","yellow","green","yellow","orange"];
let currentIndex = 0;

colorswitch.addEventListener("click", () => {
    // Set the box color to the current color in the array
    dabba.style.backgroundColor = colors[currentIndex];
    currentIndex++;
    if(currentIndex==6){
        currentIndex = 0;
    }
    console.log(currentIndex);
    // Increment the index and reset it if it exceeds the array length
    //currentIndex = (currentIndex + 1) % colors.length;
});