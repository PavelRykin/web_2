let inputNumbers = Number.parseFloat(prompt("Введите температуру в градусах Цельсия!"));
function fahrenheit(a){
    answer = ( 9 / 5 ) * a + 32;
    answer = Math.round(answer); 
    return answer;
}
alert(`Цельсия: ${inputNumbers}, Фаренгейт: ${fahrenheit(inputNumbers)}`);
