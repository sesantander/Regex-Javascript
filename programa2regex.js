// 13. Validar una fecha con formato dd/mm/aaaa

const fecha="31/12/20122";
const regex= /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)([1-2][0-9][0-9][0-9])$/;
const match = regex.test(fecha);
console.log(match)
if (match) {
    const fechaa=regex.exec(fecha);
    console.log(fechaa[0])
}else{
    console.log('No hay ningun match')
}