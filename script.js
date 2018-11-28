function buttonClick() {
	var x1 = parseInt(document.getElementById('x1').value);
	var x2 = parseInt(document.getElementById('x2').value);
	if(Number.isNaN(x1) || Number.isNaN(x2)) {
		alert("В поля должны быть введены числовые значения.");
	} else {
		if (x1 > x2) {
			var x = x1;
			x1 = x2;
			x2 = x;
		}
		var resultDiv = document.getElementById('result');
		resultDiv.innerHTML = '';
		var rad = document.getElementsByName('operation');
        	if (rad[0].checked) {
			var sum = 0;
			for(var i = x1; i <= x2; i++) {
				sum += i;
			}
			resultDiv.append("Сумма = "+sum);
		} else if (rad[1].checked) {
    			var mult = 1;
			for(var i = x1; i <= x2; i++) {
				mult *= i;
			}
			resultDiv.append("Произведение = "+mult);
		}
	}
}

function clearForm() {
	document.getElementById('x1').value = '';
    	document.getElementById('x2').value = '';
}


