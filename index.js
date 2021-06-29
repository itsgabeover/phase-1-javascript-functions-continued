// Your code here
function saturdayFun(activity){
    if (activity == null){
        return `This Saturday, I want to roller-skate!`;
    } else {
        return `This Saturday, I want to ${activity}!`;
    }
}

function mondayWork(activity){
    if (activity == null){
        return `This Monday, I will go to the office.`;
    } else {
        return `This Monday, I will ${activity}.`;
    }
}

function wrapAdjective(specialChar = '*'){
    return function(adjective = 'special') {
        return `You are ${specialChar}${adjective}${specialChar}!`;
    }

}