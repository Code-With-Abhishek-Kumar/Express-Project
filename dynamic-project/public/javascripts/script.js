
function loader(){
    let loader = document.getElementById('page_loader');
    console.log(loader)
    // document.querySelector('body').addEventListener('onload' , function(){
    //     loader.style.display = "none"
    //     alert('hy')
    // })
    
    
    window.onload = function() {
        // alert("let's go!"); 
            loader.style.display = "none"
     }
}


loader() 
