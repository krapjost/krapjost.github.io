function multiTable(number) {
	let res = '';
	for ( let i = 1; i < 11; i++ ){
		if ( i === 10) {
			res += `${i} * ${number} = ${i*number}`
		} else {
			res += `${i} * ${number} = ${i*number}`+'\n'
		};
	};
	return res
}

function multiTable(number) {
	let res = '';
	for ( let i = 1; i < 11; i++ ){
		res += `${i} * ${number} = ${i*number}`+(i<10 ? '\n' : '')
	};
	return res
}
