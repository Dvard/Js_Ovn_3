function upg1() {
	let i = 1;

	while (i <= 20) {
		console.log('Hej på dig rad ' + i);
		i++;
	}
}

function upg2() {
	for (let i = 0; i <= 20; i++) {
		console.log(i);
	}
}

function upg3() {
	for (let i = 0; i <= 20; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}

function upg4() {
	let i = 0;
	let result = "";

	while (i <= 10) {
		result += i;
		i++
	}

	console.log(result);
}

function upg5() {
	const rad = 5;

	if (rad === 0) {
		console.log('Värdet är noll')
	} else if (rad === 1) {
		console.log('Endast en rad')
	} else if (rad >= 2 && rad <= 10) {
		let i = 1;
		while (i <= rad){
			console.log('Detta är rad ' + i);
			i++
		}
	} else {
		console.log('För mycket rader eller ogiltigt värde')
	}
}

function upg6() {
	const fruits = ['äppel', 'ananans', 'mango', 'mandarin']

	for (let i = 0; i < fruits.length; i++) {
		console.log(fruits[i])
	}
}

function upg7() {
	let codelang = 'js,php,html,python';

	codelang = codelang.split(',');

	for (let i = 0; i < codelang.length; i++) {
		console.log(codelang.sort()[i])
	}
}

upg1();
upg2();
upg3();
upg4();
upg5();
upg6();
upg7();