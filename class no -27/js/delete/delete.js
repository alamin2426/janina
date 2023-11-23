document.getElementById('delete-button').addEventListener('click', function(){
    // console.log('buton click');
    document.getElementById('secreat').style.display ='none'

   
})
document.getElementById('delete-confrom').addEventListener('focus', function(){
        document.body.style.backgroundColor = 'red'
})
document.getElementById('delete-confrom').addEventListener('blur', function(){
        document.body.style.backgroundColor = 'green'
})
document.getElementById('delete-confrom').addEventListener('keyup', function(event){
        const deletFelid = document.getElementById('delete-confrom');
        const deleteButton = document.getElementById('delete-button')
        
        if(event.target.value == 'delete'){
            deleteButton.removeAttribute('disabled')
        }
        else{
            deleteButton.setAttribute('disabled', true)
        }
        
        // console.log(event.target.value);
    

        // console.log(deletFelid);
})