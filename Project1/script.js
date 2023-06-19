
function H(){
    var number, result;

    number = document.getElementById('number').value;
    if(isNaN(number) || number < 1 || number > 100)
    {
        result = 'НЕВЕРНО';
    }
    else
    { 
        result = 'ВЕРНО';
    }
    document.getElementById('firstbutton').textContent = result;
}            
