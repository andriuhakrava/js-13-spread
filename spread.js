// 1. Добавте до гарбуза властивість "ціна за кілограм" та метод, який би обчислював вартість гарбуза.

	let pumpkin = {
	  color: 'green',
	  weight: '34 kg',
	  pricePumpkin: function(){
	  	return parseFloat(this.weight) * parseFloat(this['ціна за кілограм']) + ' грн.';
	  }
	};
	pumpkin['ціна за кілограм'] = '26 грн';
	console.groupCollapsed('Вартість гарбуза:');
	console.log(pumpkin.pricePumpkin());
	console.groupEnd();

/* 2. Створіть метод, який би повертав копію гарбуза. Можна застосувати не глибоке копіювання.
	Створіть масив з п'яти гарбузів, використовуючи даний метод копіювання. */
	
	pumpkin.copy = function copyPumpkin(){
		let obj = {};
		for (let key in this) {
		  obj[key] = this[key];
		}
		return obj;
	}

	let arrCopiedPumpkins = [];
	for (let i = 0; i < 5; i++){
		arrCopiedPumpkins.push(pumpkin.copy());
	}

	console.groupCollapsed('Масив з 5 скопійованих гарбузів:');
	console.log(arrCopiedPumpkins);
	console.groupEnd();

/* 3. Задайте всім гарбузам випадкову вагу від 5 до 20 кг.
	Виведіть в консоль номер гарбуза та його ціну. */

	function randomWeight(){
		return Math.floor(Math.random()*16) + 5;
	}

	for (let i = 0; i < 5; i++){
		arrCopiedPumpkins[i].weight = `${randomWeight()} кг`;
		let price = arrCopiedPumpkins[i].pricePumpkin();
		console.log(`Ціна ${i + 1} гарбуза - ${price}`);
	}

/* 4. Виведіть в консоль вагу всіх гарбузів:
	12 кг; 19 кг; 11 кг; 16 кг; 18 кг
	Спробуйте обійтися однією командою: всі дії вписати в дужки:
	console.log(...); */

	console.groupCollapsed('Вага всіх гарбузів:');
	console.log(arrCopiedPumpkins.map((pum) => pum.weight).join('; '));
	console.groupEnd();

/* 5. Створіть функцію, що отримує у якості аргументів марки автомобілів 
	і виводить їх в консоль в одну строку через кому та пробіл. */

	function carBrand(...brands){
		console.groupCollapsed('Марки автомобілів в одну строку через кому та пробіл:');
		console.log(brands.join(', '));
		console.groupEnd();
	}

	carBrand('BMW', 'Opel', 'Chevrolet', 'Skoda');

/* 6. Створіть функцію, що отримує у якості аргументів гарбузи 
	і виводить в консоль в стовбчик їх ціну. Передайте в функцію масив гарбузів. */

	function showPumpkinsPrice(){
		Array.prototype.forEach.call(arguments, function(p){
			console.log(p.pricePumpkin());
		});
	}

	showPumpkinsPrice(...arrCopiedPumpkins);