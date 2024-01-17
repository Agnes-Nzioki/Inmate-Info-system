// const todos = [
//     {
//         id:1,
//         text:'Take out Trash',
//         isComplete:true
//     },
//     {
//         id:2,
//         text:'Meeting with boss',
//         isComplete:true
//     },
//     {
//         id:3,
//         text:'Dentist Appointment',
//         isComplete:false
//     },
// ];

// todos.forEach(function(todo) {
//     console.log(todo.text);

// });

// const todoText= todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);
// const todoComplete= todos.filter(function(todo){
//     return todo.isComplete ===true;
// });
// console.log(todoComplete);

// const x=8;
// if (x===10){
//     console.log('x is 10');
// } else if (x>10){
//     console.log('x is greater than 10')
// }else{
//     console.log('x is less than 10')
// }
// const x=7;
// const color= x>10 ? 'red': 'blue';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//             console.log('color is blue');
//             break;
//         default:
//             console.log('color is not red or blue');
//             break;

// }
// function addNums(num1, num2){
//     return num1 + num2;
// }
// console.log(addNums(4,7));
// const addNums =(num1, num2) =>{
//     return num1 + num2;
// }
// console.log(addNums(4,7));

// function Person(firstName, lastName, dob){
//     this.firstName= firstName;
//     this.lastName=lastName;
//     this.dob=new Date (dob);
// }
// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName =function(){
//    return `${this.firstName} ${this.lastName}` 
// }

// const Person1= new Person('john', 'Doe', '4-3-1980');
// const Person2 =new Person ('Agnes','Nzioki', '6-28-2001');
// console.log(Person2.dob.getFullYear());

// console.log(Person2.getFullName());

//this is the same as the function person above
// class Person {
//     constructor( firstName, lastName, dob){
//         this.firstName=firstName;
//         this.lastName= lastName;
//         this.dob= dob;
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const Person1= new Person('john', 'Doe', '4-3-1980');
// const Person2 =new Person ('Agnes','Nzioki', '6-28-2001');
// console.log(Person1.getFullName());

// console.log(Person2.getFullName())
// alert('Welcome');
// console.log(document.getElementsByClassName('alist'));
// console.log(document.getElementsByTagName('li'));

// const list= document.querySelectorAll('li');
// list.forEach((li) => console.log(li));
// const ul = document.querySelector('.alist');

// ul.firstElementChild.textContent='Homey';
// ul.children[1].innerText= 'Brad';
// ul.lastElementChild.innerHTML='<h1>Hello</h1>';
// const btn = document.querySelector('.btn')
// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     console.log('click');
// });

const myForm = document.querySelector('#my-form');
const firstNameInput= document.querySelector('#firstName');
const lastNameInput= document.querySelector('#lasttName');
const idInput= document.querySelector('#ID');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    if (firstNameInput.value ==='' ||  lastNameInput==='' ||idInput===''){
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li= document.createElement('li');
        li.appendChild(document.createTextNode(`${firstNameInput.value} 
        ${lastNameInput.value} ${idInput.value}`));

        userList.appendChild();

        firstNameInput='';
        lastNameInput ='';
        idInput ='';
    }
    
}










