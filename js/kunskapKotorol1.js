//1- Byt ut minst ett foto

/* 
let photo= document.querySelector('.art-3 img');
console.log(photo); 
photo.setAttribute('src' , 'img/hoodie-forrest.png'); */




//2- Ändra bakgrundsfärg på minst ett element
/* const element = document.querySelectorAll('figure'); 
console.log(element); 
element[2].style.backgroundColor='blue'; 
element[0].style.backgroundColor='red';  */


let htmlElement= document.querySelector('html'); 
htmlElement.addEventListener('keydown',function(event){
    console.log(event.key); 

let art2= document.querySelector('.art-2'); 
if(event.key =='r'|| event.key=='R'){
    art2.style.backgroundColor= 'red'; 
}
else if(event.key == 'g'|| event.key=='G'){ 
    art2.style.backgroundColor='green'
}
else if(event.key =='b'|| event.key=='B'){
    art2.style.backgroundColor='white';
}
}); 


//3- Ändra text på minst ett element
// const text=document.querySelector('h2'); 
// console.log(text); 
/* text.innerText='RainCoat'; 

const text1= document.querySelector('.art-2 h2');
console.log(text1); 
text1.innerHTML = 'AtumnColor'; 

const text2=document.querySelector('.art-3 p'); 
console.log(text2); 
text2.innerHTML= 'NEW ARRIEL FOR WINTER'; 
text2.styel.fontsize= '50px'; 
 */



// 4- Ändra färg på minst en knapp
/* const btn= document.querySelector('.art-2 button'); 
// console.log(btn); 
btn.style.backgroundColor='red'; 

const btn1= document.querySelector('.art-3 button'); 
console.log(btn1); 
btn1.style.backgroundColor='green';  */



// 5- Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
// let removeKey = document.querySelector('nav'); 
// let parent = document.querySelector('#header-navigation')
// let element=document.querySelectorAll('a'); 


// removeKey.addEventListener('click',() =>{

    // Ta bort en element
//  parent.removeChild(element[0]); 



//Ta bort flera Element 
// for(element of element){ 
//     parent.remove(element);  
    
// }

// using HTML // 
/* parent.innerHTML = ''; 

}); 
 */


let header= document.querySelector("header"); 

let headerNavigation= document.querySelector('#header-navigation')

console.log(header); 


let button= document.createElement('button'); 
button.textContent='Click here'; 
header.appendChild(button); 


let visable= true; 
button.addEventListener('click', function(){ 
    if(visable){

        headerNavigation.style.display='none'; 
        visable=false;
    }else{ 
        headerNavigation.style.display='block'; 
        visable=true; 
    }
}); 



 


// 6- Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
// a.Listan ska innehålla flera li element
// b.Varje li element ska ha en synlig border. (Valfritt utseende)

 let listHolder=document.querySelector('.listHolder');
console.log(listHolder); 


let newList= document.createElement('ul'); 
newList.className= 'Contact us'; 
newList.textContent='Contact us'
newList.style.fontSize= '20px'; 
newList.style.fontWeight='bold'; 

console.log(newList); 

let newListItem = document.createElement('li'); 
newListItem.textContent= 'Tel No: 07003453'; 
newListItem.style.fontSize='15px'; 
newListItem.style.fontWeight='2'; 
newListItem.style.border='2px solid black'; 
console.log(newListItem);  



listHolder.appendChild(newList); 
newList.appendChild(newListItem); 


let header= document.querySelector("#header-navigation"); 
console.log(header); 


let button= document.createElement('button'); 
button.textContent='Click here'; 
header.appendChild(button); 


let visable= true; 
button.addEventListener('click', function(){ 
    if(visable){
        newList.style.display='none'; 
        visable=false;
    }else{ 
        newList.style.display='block'; 
        visable=true; 
    }
}); 


 

