 document.getElementById("comment-button").addEventListener('click', function(){
    const textInput = document.getElementById('input-filed')
    const text =  textInput.value ;
    
    const p = document.createElement('p');
    p.innerText = text;
   //  console.log(p);

   const box = document.getElementById('comment-box');
   box.appendChild(p)

 })