/* Put code for the task below */ // Get the buttons and table element by their IDs
const colors= ['purple','pink','blue', 'rebeccapurple', 'violet'];
let colorIndex = 0;
function changeColor(){
    document.body.style.background=colors [colorIndex % 7];
    colorIndex++;
}