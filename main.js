var name1=document.getElementById('fname');
var email1=document.getElementById('email');

localStorage.setItem('email',email1.value);
localStorage.setItem('name',name1.value);
console.log(name1.value);