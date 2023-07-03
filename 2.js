const username = prompt("Как вас зовут?");
function greeting(name){
    console.log(`Приветствую вас ${name}`);
    alert(`Приветствую вас ${name}`);
}
greeting(username);