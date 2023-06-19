
function H(){
    var number, result;

    number = document.getElementById('number').value;
    if(isNaN(number) || number < 1 || number > 100)
    {
        result = 'НЕВЕРНО';d
    }
    else
    { 
        result = 'ВЕРНО';f
    }
    document.getElementById('firstbutton').textContent = result;
}            
