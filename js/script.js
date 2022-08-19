'use strict';

// alert('Hello world!');

//  const result = confirm('Are u here?');
// console.log(result);

// const answer = +prompt('Are u 18?' , '');
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('What is your name?' , '');
// answers[1] = prompt('What is your second name?' , '');
// answers[2] = prompt('What is your age?' , '');

// console.log(typeof(answers));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Dennis';


// alert(`Hoi , ${user}`)


// Инкримент и Дикримент
// let incr = 10,
// 	decr = 10;
// incr++;
// decr--;

// console.log(incr);
// console.log(decr);


// 		&& - и (true and  true  = True ; False and True = False )
// 		|| - или (true and false = True )


// const isChecked = true,
// 	isClose = false;
// console.log(isChecked && isClose);

// const isChecked = true,
// 	isClose = true;
// console.log(isChecked || !isClose); // "!"


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних просмотренных фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);