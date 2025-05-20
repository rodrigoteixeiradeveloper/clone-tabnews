function somar(argumento1, argumento2) {
    if(typeof(argumento1) != 'number'){
        return "Error"
    }
    return argumento1 + argumento2
}

exports.somar = somar;