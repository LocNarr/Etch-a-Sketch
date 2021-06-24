const mainContainer = document.querySelector("#main-container");
const container = document.createElement("div");
container.classList.add("container"); 
mainContainer.appendChild(container);


let n = +prompt ("choose size");

if(n == 4){

  for(let i = 1; i<=(n*n); i++){
   let items1 = document.createElement("div");
   items1.classList.add("items1");
   container.appendChild(items1);

  }
}

if (n == 8){
  for(let i = 1; i<=(n*n); i++){
  
    let items2 = document.createElement("div");
    items2.classList.add("items2");
    container.appendChild(items2);
  }

}

if(n == 3){
  for(let i = 1; i<=(n*n); i++){
  
    let items3 = document.createElement("div");
    items3.classList.add("items3");
    container.appendChild(items3);
  }
  }

if(n==4){

  for(let i = 1; i<=(n*n); i++){

    let items4 = document.createElement("div");
    items4.classList.add("items4");
    container.appendChild(items4);
  }
}

if(n==64){

  for(let i = 1; i<=(n*n); i++){

    let items5 = document.createElement("div");
    items5.classList.add("items5");
    container.appendChild(items5);
  }
 }

container.addEventListener("mouseover",function(event){

  event.target.style.backgroundColor="black";
});

const erase = document.querySelector("#erase");
erase.addEventListener("click", function(){
  container.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor="white";
  })
})

const black = document.querySelector("#black");
black.addEventListener("click",function(){
  container.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor="black";
  })
})

const gray = document.querySelector("#gray");
gray.addEventListener("click",function(){
  container.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor="gray";
  })
})



