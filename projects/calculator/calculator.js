
// get all ui elements
var d = document,
display = d.getElementById('display'),
numbers = d.getElementById('numbers'),
commands = d.getElementById('commands'),
btnClear = d.getElementById('btnClear'),
btnBack = d.getElementById('btnBack'),
btnEquals = d.getElementById('btnEquals'),
btnPoint = d.getElementById('btnPoint'),
equation = d.getElementById('equation'),
result = d.getElementById('result'),
isDone = false,
terms = [], c = 0, i = 0;

function showEquation(str)
{
    str = '&nbsp;' + str;
    equation.innerHTML = str;
}

function showResult(str)
{
    str = '&nbsp;' + str;
    result.innerHTML = str;
}


// handle number buttons
c = numbers.children.length;
for(i=0; i<c; i++){
	if(numbers.children[i].nodeName === 'BUTTON'){

		numbers.children[i].addEventListener('click', 
		function () {
		    if (isDone) {
		        terms.length = 0;
		        showEquation('');
		        isDone = false;
		    }
		    terms.push(this.innerHTML);
			showResult(terms.join(''));
		});

	}
}

// handle command buttons
// check if this is saved
c = commands.children.length;
for(i=0; i<c; i++){
	if(commands.children[i].nodeName === 'BUTTON'){

		commands.children[i].addEventListener('click', 
		function () {
		    if (isDone) {
		        terms.length = 0;
		        showEquation('');
		        isDone = false;
		    }
		    terms.push(this.innerHTML);
			showResult(terms.join(''));
		});

	}
}

function processSqrt()
{
    var i = terms.length - 1;
    while (i >= 0) {
        if (terms[i] === '√') {
            sqrt(i);
        }
        i--;
    }
}

function sqrt(index)
{
    var nums = '0123456789.',
    cache = '', count = 0,
    i = index+1, c = terms.length;
    
    while (nums.indexOf(terms[i]) !== -1 && i < c) {
        cache += terms[i];
        i++;
    }

    terms.splice(index, i-index,'Math.sqrt('+cache+')')
}

btnEquals.addEventListener('click', function () {
    showEquation(terms.join(''));
    processSqrt();
    var formula = terms.join(''),
    result = 0;
    
    try
    {
        
        result = eval(formula);
    }
    catch(e)
    {
        result = 'Error';
    }
    
    if (!isFinite(result)) result = 'Error';
    
    showResult(result);
    isDone = true;
});

btnClear.addEventListener('click', function(){
    terms.length = 0;
    showResult(terms.join(''));
    showEquation('');
});

btnBack.addEventListener('click', function(){
    terms.pop();
	showResult(terms.join(''));
});


