
// Реализовать рекурсивную функцию, сводящую число в степень.

// Число, которое следует преподнести к степени, передается как первый аргумент в функции;
// Степень передается как второй довод в функцию pow (num, degree).

pow(3, 2);
pow(3, 3);
pow(1, 100);

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
};

  let x = prompt("x?", '');
  let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(x, n) );
};
