
// Initiaized two buttons. One for change and the other for reset !
// used function method for both buttons


function init(){
    changeStuffButton()  
    resetStuffButton()
}
function changeStuff(e){
  e.preventDefault(); 

//1 =  Ändra img    
let photo= document.querySelector('.art-3 img')
photo.setAttribute('src', 'img/hoodie-forrest.png'); 

//2- Ändra backgroundfärge på minst ett element
const element = document.querySelectorAll('figure'); 
element[2].style.backgroundColor='blue'; 
element[0].style.backgroundColor='red'; 

//3- Ändra text på minst ett element
const text=document.querySelector('h2'); 
text.innerText='RainCoat'; 

const text1= document.querySelector('.art-2 h2');
text1.innerHTML = 'AtumnColor';

const btn= document.querySelector('.art-2 button'); 

// 4- Ändra färg på minst en knapp
const btn1= document.querySelector('.art-3 button'); 
btn1.style.backgroundColor='green';

const btn2= document.querySelector('.art-2 button'); 
btn2.style.backgroundColor='red'; 

}
//  ge en knapp kllads some change with attribute click och tillbaka allting till original! 
function changeStuffButton(){
  const changeBtn= document.querySelector('.change')
  changeBtn.addEventListener('click', changeStuff)
}; 

function resetStuff (e){
  e.preventDefault(); 

//1 =  Tillbaka till  orignal img
  let photo= document.querySelector('.art-3 img')
photo.setAttribute('src', 'img/hoodie-ocean.png'); 

//2- Tillbaka till bakgrundsfärg på minst ett element
const element = document.querySelectorAll('figure'); 
element[2].style.backgroundColor='orange'; 
element[0].style.backgroundColor='orange'; 


//3- Tillbaka till orignal text 
const text=document.querySelector('h2'); 
text.innerText='Sius Hoodie'; 

const text1= document.querySelector('.art-2 h2');
text1.innerHTML = 'Sius Hoodie'

// 4- Tillbaka till original färg på knappen
const btn1= document.querySelector('.art-3 button'); 
btn1.style.backgroundColor='#222';

const btn2= document.querySelector('.art-2 button'); 
btn2.style.backgroundColor='#222';
 
}
function resetStuffButton(){
  const resetBtn= document.querySelector('.reset')
  resetBtn.addEventListener('click', resetStuff)
}
init()

// 5- Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)

let headerNavigation= document.querySelector('#header-navigation')

let homeN=document.querySelector('.home'); 
console.log(homeN); 

 //usig function and add eventlistener to the button and name it as click
// After that using If statment to show the element or disapper the element! 

let button= document.createElement('button'); 
button.textContent='Click here'; 
headerNavigation.appendChild(button); 
button.style.position='relative'; 

let visable= true; 
button.addEventListener('click', function(){ 
    if(visable){
       homeN.style.display='none'; 
        visable=false;
    }else{ 
      homeN.style.display='block'; 
        visable=true; 
    }
}); 

// 6- Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
// a.Listan ska innehålla flera li element
// b.Varje li element ska ha en synlig border. (Valfritt utseende)

 let listHolder=document.querySelector('.listHolder');
// console.log(listHolder); 

//Creat ul 
let newList= document.createElement('ul'); 
newList.className= 'Contact us'; 
newList.textContent='Contact us'
newList.style.fontSize= '20px'; 
newList.style.fontWeight='bold'; 

console.log(newList); 

// Creat two Li in a new ul 
let newListItem = document.createElement('li'); 
newListItem.textContent= 'Tel No: 07003453'; 
newListItem.style.fontSize='15px'; 
newListItem.style.fontWeight='2'; 
newListItem.style.border='1px solid black'; 
newListItem.style.listStyle='none'; 
console.log(newListItem);  

 let newListItem1 = document.createElement('li');
 newListItem1.textContent= 'Email: Sinus@gmail.com'; 
 newListItem1.style.fontSize='15px'; 
 newListItem1.style.fontWeight='2'; 
 newListItem1.style.border='1px solid black'; 
 newListItem1.style.listStyle='none'; 
 console.log(newListItem1); 

 //Printing li in HTML by using Appendchild method
listHolder.appendChild(newList); 
newList.appendChild(newListItem); 
newList.appendChild(newListItem1)


let footer= document.querySelector(".footer"); 
console.log(footer); 

// make a button in footer and connecting button in HTML and create event by calling click
let buttonf= document.createElement('button'); 
buttonf.textContent='Click here'; 
 footer.appendChild(buttonf); 

 //usig function and add eventlistener to the button
//  using If statment for show the element or disapper the elements! 
let look= true; 
buttonf.addEventListener('click', function(){ 
    if(look){
        newList.style.display='none'; 
        look=false;
    }else{ 
        newList.style.display='block'; 
        look=true; 
    }
});
 







