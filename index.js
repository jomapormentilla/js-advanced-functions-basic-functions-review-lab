// Your code here

function saturdayFun( activity="roller-skate" ) {
    return `This Saturday, I want to ${ activity }!`
}

function mondayWork( activity="go to the office" ) {
    return `This Monday, I will ${ activity }.`
}

function wrapAdjective( string="*" ) {
    let innerFunc = function( adj="special" ) {
        return `You are ${ string }${ adj }${ string }!`
    }

    return innerFunc
}

const Calculator = {
    add: (num1, num2) => {
        return num1 + num2
    },
    subtract: (num1, num2) => {
        return num1 - num2
    },
    multiply: (num1, num2) => {
        return num1 * num2
    },
    divide: (num1, num2) => {
        return num1 / num2
    }
}

const arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

function actionApplyer( num, arr ) {
    if (arr.length === 0) {
        return num
    } else {
        let result = num
        for (let i=0; i<=arr.length-1; i++) {
            result = arr[i](result)
        }
        return result
    }
}