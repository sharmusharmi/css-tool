// DOMContentLoded - fulla load aanathum function run aaganum nu use panrathu 

document.addEventListener("DOMContentLoaded",()=>{

      // Get elements by ID
    const container=document.querySelector('.container');
    const allborder=document.getElementById('all');
    const allvalue=document.getElementById('all_value');
    const area=document.getElementById('area');
    const btn=document.querySelector('#btncopy');
    const border_styleElement=document.querySelector('#border-style');
    const border=document.getElementById('border');
    const border_value=document.getElementById('border-value');





    // if (!allborder || !allvalue || !area) {
    //     console.error('One or more elements not found. Ensure elements with IDs "all", "all_value", and "code" exist in your HTML.');
    //     return; // Exit if elements are not found
    // }

 // Initialize variables
var all_radius=10;
var coding=10
var border_style="groove"
var border_size=3;

     // Function to update border radius and display value
    function allBorderUpdate(){
        all_radius=allborder.value;
        border_size= border.value;
    allvalue.innerText = all_radius + "px";
    border_value.innerText = border_size + "px";

    // curser or antha value a change panum pothu antha range value disply agarathukaga allvalue.innertext=all-radius +"px"

      coding=`
      border-radius:${all_radius}px;
      border:${border_size}px ${border_style} red;`
      ;
      area.value = coding
      container.style.cssText=coding;

    }

    // function updateCode(){

    // }


      // Event listeners for input change and mousemove
    allborder.addEventListener("change",allBorderUpdate);
    allborder.addEventListener("mousemove",allBorderUpdate);
    
    border.addEventListener("change",allBorderUpdate);
    border.addEventListener("mousemove",allBorderUpdate);
    
    
    
    btn.addEventListener('click',()=>{
        document.querySelector('textarea').select()
        document.execCommand('copy');
        alert('code copied')
    })

    // Initial call to update values on page load
    allBorderUpdate()

    
    border_styleElement.addEventListener('change', function(){
        border_style=this.value;
        allBorderUpdate()

    })
    
})