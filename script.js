const allItems = document.querySelector('select');
allItems.addEventListener('change', e =>{
    const selectedColor = e.target.value;
    document.body.style.backgroundColor = selectedColor;
    
    if(!selectedColor || selectedColor === 'default'){
        document.body.style.color = 'black';
    }
    document.body.style.color = 'white';


});

