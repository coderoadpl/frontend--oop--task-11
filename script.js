const myOwnForEach = function (array, callback, thisArg) {

    for (let i = 0; i < array.length; i++) {
        const element = names[i]
        const index = i
        const array = names

        callback.call(thisArg, element, index, array)
    }

}

const names = ['Ala', 'Ola', 'Ela']

window.myName = 'Mateusz from Window'

const greeter = function (name, index, array) {
    console.log('Hello ' + name + ', I\'m ' + this.myName + '!')
}

names.forEach(greeter)
myOwnForEach(names, greeter)

names.forEach(greeter, { myName: 'Mateusz form "thisArg"' })
myOwnForEach(names, greeter, { myName: 'Mateusz form "thisArg"' })

const greeterArrow = (name, index, array) => {
    console.log('Hello ' + name + ', I\'m ' + this.myName + '!')
}

names.forEach(greeterArrow)
myOwnForEach(names, greeterArrow)

names.forEach(greeterArrow, { myName: 'Mateusz form "thisArg"' })
myOwnForEach(names, greeterArrow, { myName: 'Mateusz form "thisArg"' })

