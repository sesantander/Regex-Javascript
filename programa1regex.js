// 11. Validar una matrícula de un vehículo con formato XXXNNN, donde X es una letra y N es un dígito. En total hay seis caracteres.

const matricula="ACC123";
const regex= /^[A-Z]{3}[0-9]{3}$/;
const match = regex.test(matricula);
console.log(match)
if (match) {
    const letrasmatricula=regex.exec(matricula);
    console.log(letrasmatricula[0])
}else{
    console.log('No hay ningun match')
}