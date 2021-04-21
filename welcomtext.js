const welcome = (number, groupname) => {
    return `Hola @${number}. Bienvenido al grupo {groupname}`
}
exports.welcome = welcome

const bye = (number) => {
    return ` @${number}. Salio corriendo como puta `
}
exports.bye = bye
