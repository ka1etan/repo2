//https://www.hackerrank.com/challenges/30-nested-logic/problem

'use strict';

var assert = require('assert')

var fs = require("fs");
var stream = fs.createReadStream("nested.txt");

stream.resume();
stream.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

stream.on('data', inputStdin => {
    inputString += inputStdin;
});

stream.on('end', _ => {
    inputString = inputString.trim().split(new RegExp('[ \n]+')).map(string => {
        return string.trim();
    });

    main();

});

function readLine() {
    return inputString[currentLine++];
}

function processData(input)
{
    let actual = {} // TODO { day: ..., month: ..., year: ... }
    let expected = {} // TODO as above

    let isOnTime = false

    if (expected.year > actual.year)
    {
        isOnTime = true
        return 0
    }
    else if (expected.year == actual.year)
    {
        if (expected.month > actual.month)
        {
            isOnTime = true
            return 0
        }
        else if (expected.month == actual.month)
        {
            isOnTime = (expected.day >= actual.day)
            return (expected.day >= actual.day)*15
        }
        else
        {
            isOnTime = false
            return (actual.month - expected.month) * 500
        }
    }
    else // <
    {
        isOnTime = false // same
        return 10*1000;
    }


//    if (isOnTime) //done
//    {
//        return 0
//    }
//    else // done
//    {
//        let isSameYear = (actual.year == expected.year)
//
//        if (isSameYear) //done
//        {
//            let isSameMonth = (actual.month == expected.month)
//            if (isSameMonth)
//            {
//                return (actual.day - expected.day) * 15
//            }
//            else
//            {
//                return (actual.month - expected.month) * 500
//            }
//        }
//        else //done
//        {
//            return 10*1000;
//        }
//    }


}

function processData(input) {
    //Enter your code here
    let fine = 0

    if (input[0].day > input[1].day) {
        //console.log("count day fine")
        fine += 15 * ((input[0].day) - (input[1].day))
    } else if (input[0].day < input[1].day) { fine = 0 }

    if (input[0].month > input[1].month) {
        fine = 0
        //console.log("count month fine")
        fine += 500 * ((input[0].month) - (input[1].month))
    } else if (input[0].month < input[1].month) { fine = 0 }

    if (input[0].year > input[1].year) {
        fine = 0
        //console.log("count year fine")
        fine += 10000
    } else if (input[0].year < input[1].year) { fine = 0 }
    console.log(fine)
    return fine
}



function main() {
    let arr = []
    for (let i = 0; i < 2; i++) {
        let day = parseInt(readLine())
        let month = parseInt(readLine())
        let year = parseInt(readLine())

        let obj = { day: day, month: month, year: year }
        arr.push(obj)
    }
    console.log(JSON.stringify(arr))
    processData(arr)

    // let s = new student(firstName, lastName, id, testScores)
    // s.printPerson()
    // s.calculate()
    // console.log('Grade: ' + s.calculate())
}
