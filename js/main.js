//Задаем переменные
let str = 'урок-3-был слишком легким',
	firstLetter,
	strCut,
	strResult,
	strNew;

//Функция замены первой буквы на заглавную
function letterChange(){

	firstLetter = str[0].toUpperCase();//Заменяем первую букву заглавной
    strCut = str.slice(1);//Вырезаем все буквы кроме первой
    strNew = firstLetter + strCut;//Конкатенация первой заглавной буквы с остальной строкой
};
letterChange();

//Функция замены '-' на пробелы
function strChange() {

	let tmp = strNew.split('-');//Превращаем строку в массив по разделителю '-'
		strResult = tmp.join(' ');//Собираем из массива новую строку с проелами между элементами
		console.log(strResult);
};
strChange();

//Функция замены слова 'легкий' на 'легко'
function wordChange() {

	let tmp = strResult.indexOf('легким');//Поиск искомого слова и определение его позиции
		tmp2 = strResult.slice(tmp);//Вырезание искомого слова из строки
		tmp3 = tmp2.slice(0, 4) + 'o';//Замена последних двух букв c 'им' на 'о'
		alert(tmp3);
};
wordChange();

let arr = [20, 33, 1, 'Человек', 2, 3];

//Функция нахождения квадратного корня из суммы кубов элементов массива
function cubeSum() {
	let sum = 0,
		cube = 0,
		sqrt;
	for (let i = 0; i < arr.length; i++) {
		
		if(!isNaN(arr[i])) { //Переберая массив, выбираем только числа
			cube = Math.pow(arr[i], 3);//Возводим числа в куб
			sum = sum + cube;//Складываем все результаты в одну переменную
		}
	}
	sqrt = Math.sqrt(sum);//Вычисляем квадратный корень из суммы кубов элементов массива
	console.log(sqrt);
};
cubeSum();

//Функция проверяет строку на тип данных и заменяет текст свыше 50 символов на (...)
function stringCut(string) {
	let trimString,
		dotsString;

	if( (typeof(string) ) === 'string') { //Проверка строки на тип данных
		trimString = string.trim(); //Удаление пробелов в начале и конце строки
		} else {
		alert('Задана не строка!');
			}

	if(string.length > 50) { //Подсчет количества символов в строке
		dotsString = trimString.slice(0, 50) + '(...)';//Замена символов посе 50-го на (...) 
		}

		console.log(dotsString);			
};
stringCut('  Функция - это отрывок кода, который может быть вызван из другого кода или собой  ');

