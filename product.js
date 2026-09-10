var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
}
)

// product search functionality
var productcontainer = document.getElementById("Product-container") 
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")
var nothingFound=document.getElementById("nothingFound")

search.addEventListener("keyup",function(event){
    var enteredValue = event.target.value.toUpperCase()
    var found = false
    for(count = 0; count<productlist.length; count=count+1){
        var productname = productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredValue)>=0){
            productlist[count].style.display="block"
            found  = true

        }

        else{
            productlist[count].style.display="none"
        }
    }

    if(found == false){
        nothingFound.style.display="block"
    }
    else{
        nothingFound.style.display="none"
    }
})