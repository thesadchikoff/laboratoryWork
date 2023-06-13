import readline from 'readline-sync'


// Лабараторная работа №4

function writeNumber () {
    const number = readline.question('Write number: ')
    determiningNumber(number)
}
function determiningNumber(num) {
    if (!Number(num)) {
        console.error('Введите число!')
        return writeNumber()

    }
    if (Number(num) < 100 || Number(num) > 999) {
        console.error('Введите трехзначное число!')
        return writeNumber()

    }

    const result = num[num.length - 1] / 3
    console.log(result)
    if (Number.isInteger(result)) {
        return console.log(`Вы задали число ${num}, его последнее число - ${num[num.length - 1]} делится на 3. Результат: ${result}`)
    }

    if (Number(result) < 1) {
        return console.log(`Вы задали число ${num}, его последнее число - ${num[num.length - 1]} и оно не делится на 3`)
    }

}
writeNumber()

// 