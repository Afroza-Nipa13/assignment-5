const colors =[ "bg-blue-200", "bg-green-200", "bg-red-300","bg-cyan-200"];
let i = 0;

document.getElementById("theme")
.addEventListener('click', function () {
    // document.body.classList.toggle("bg-green-500");
   document.body.classList.remove(...colors);
   document.body.classList.add(colors[i]);
   i = ( i + 1 ) % colors.length;

});


    
