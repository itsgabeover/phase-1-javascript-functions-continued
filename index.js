// Your code here

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

const saturdayFun = function(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}



function wrapAdjective(specialChar = '*'){
    return function(adjective = 'special') {
        return `You are ${specialChar}${adjective}${specialChar}!`;
    }

}
