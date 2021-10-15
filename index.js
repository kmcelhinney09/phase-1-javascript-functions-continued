function saturdayFun (activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(str1="*"){
    return function (str2="special"){
        return `You are ${str1}${str2}${str1}!`
    }
}