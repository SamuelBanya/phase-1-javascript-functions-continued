// code your solution here
function saturdayFun(activity) {
    if (activity) {
        return "This Saturday, I want to " + activity + "!";
    }

    else {
        let activity = "roller-skate";
        return "This Saturday, I want to " + activity + "!";
    }
}

function mondayWork(activity) {
    if (activity) {
        return "This Monday, I will " + activity + ".";
    }

    else {
        let activity = "go to the office";
        return "This Monday, I will " + activity + ".";        
    }
}


function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return "You are " + `${flair}` + `${adjective}` + `${flair}` + "!";
    }
}

wrapAdjective("%")("a dedicated programmer");


