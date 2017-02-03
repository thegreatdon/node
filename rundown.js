var express = require('express');
var app = express();

// app.use(express.static('public'));


app.get('/', function(request, response){
var moment = require('moment');

//show and dateTimeObj will be received from rundown interface
var show = "me";
var dateTimeObj = moment('2017-02-09 14:35:00');

var dateMoment = moment(dateTimeObj);
var thisDate = dateMoment.format("MM-DD-YYYY");
var thisHour = dateMoment.format("HH");
var thisDay = dateMoment.format("dddd");
var thisTime = dateMoment.format("HH:mm");

// var submittedDate = dateMoment.format("dddd, MMMM DD YYYY, hh:mm a");

//single file (me,atc,wesat,wesun)
var addDays;
var fileDate = thisDate;
var fileDay = thisDay;
var fileHour;

//two days (watc, election)
var addDaysOne;
var addDaysTwo;
var fileDateOne;
var fileDateTwo;
var fileDayOne;
var fileDayTwo;

//two hours (newscast)
var fileHourOne;
var addHour;
var fileHourTwo;


var newsFlexDir = "\\\\ad.npr.org\\news\\DC-Production\\BCS\\HTML\\" + show + "\\" + show + "_";
var newsFlexHtmlOne; 
var newsFlexHtmlTwo;



//logic for retrieving rundown html files
switch(show) {
    case "me":
        if(thisHour <= 06){
            fileHour = "0500";
        }
        else if(thisHour >= 07 && thisHour < 09){
            fileHour = "0700";
        }
        else if(thisHour >= 09 && thisHour < 11){
            fileHour = "0900";
        }
        else if(thisHour >= 12){
            fileHour = "0500";
            if(thisDay == "Friday"){
                addDays = dateMoment.add(3,'days');
            }
            else{
                addDays = dateMoment.add(1,'days');
            }

        }
        else{
            fileHour = thisHour+"00";
        }

        if(addDays){
            fileDate = moment(addDays).format("MM-DD-YYYY");
            fileDay = moment(addDays).format("dddd");
        }
        newsFlexHtmlOne = newsFlexDir + fileDate + "_" + fileHour + ".html";
        break;

    case "atc":
        if(thisHour <= 16 || thisHour < 18){
            fileHour = "1600";
        }
        else if(thisHour >= 18 && thisHour < 20){
            fileHour = "1800";
        }
        else if(thisHour >= 20 && thisHour < 22){
            fileHour = "2000";
        }
        else if(thisHour >= 22){
            fileHour = "1600";
             if(thisDay == "Friday"){
                addDays = dateMoment.add(3,'days');
            }
            else{
                addDays = dateMoment.add(1,'days');
            }
        }
        if(thisDay == 'Saturday'){
            fileHour = "1600";
            addDays = dateMoment.add(2,'days');
        }
        else if(thisDay == 'Sunday'){
            fileHour = "1600";
            addDays = dateMoment.add(1,'days');
         }

        if(addDays){
            fileDate = moment(addDays).format("MM-DD-YYYY");
            fileDay = moment(addDays).format("dddd");   
        }
        newsFlexHtmlOne = newsFlexDir + fileDate + "_" + fileHour + ".html";
        break;
    
    case "wesat":
        fileHour = "0800";
        if(thisDay == "Monday"){
            addDays = moment(dateTimeObj).add(5,'days');
        }
        if(thisDay == "Tuesday"){
            addDays = moment(dateTimeObj).add(4,'days');
        }
        if(thisDay == "Wednesday"){
            addDays = moment(dateTimeObj).add(3,'days');
        }
        if(thisDay == "Thursday"){
            addDays = moment(dateTimeObj).add(2,'days');
        }
        if(thisDay == "Friday"){
            addDays = moment(dateTimeObj).add(1,'days');
        }
        if(thisDay == "Saturday"){
            addDays = moment(dateTimeObj);
            fileHour = thisHour+"00";
            if(thisHour <= 09){
                fileHour = "0800";
            }
            else if(thisHour >= 10 && thisHour <= 12){
                fileHour = "1000";
            }
            else if(thisHour >= 12 && thisHour < 14){
                fileHour = "1200";
            }
            else if(thisHour >= 14){
                addDays = moment(dateTimeObj).add(7,'days');
                fileHour = "0800";
            }
        }

        if(thisDay == "Sunday"){
            addDays = moment(dateTimeObj).add(6,'days');
        }

        if(addDays){
            fileDate = moment(addDays).format("MM-DD-YYYY");
            fileDay = moment(addDays).format("dddd");   
        }
        newsFlexHtmlOne = newsFlexDir + fileDate + "_" + fileHour + ".html";
        break;
    case "wesun":
        fileHour = "0800";
        if(thisDay == "Monday"){
            addDays = moment(dateTimeObj).add(6,'days');
        }
        if(thisDay == "Tuesday"){
            addDays = moment(dateTimeObj).add(5,'days');
        }
        if(thisDay == "Wednesday"){
            addDays = moment(dateTimeObj).add(4,'days');
        }
        if(thisDay == "Thursday"){
            addDays = moment(dateTimeObj).add(3,'days');
        }
        if(thisDay == "Friday"){
            addDays = moment(dateTimeObj).add(2,'days');
        }
        if(thisDay == "Saturday"){
            addDays = moment(dateTimeObj).add(1,'days');
        }

        if(addDays){
            fileDate = moment(addDays).format("MM-DD-YYYY");
            fileDay = moment(addDays).format("dddd");   
        }
        newsFlexHtmlOne = newsFlexDir + fileDate + "_" + fileHour + ".html";
        break;
    case "watc":
        fileHourOne = "1700";
        fileHourTwo = "1700";
        if(thisDay == "Monday"){
            addDaysOne = moment(dateTimeObj).add(5,'days');
            addDaysTwo = moment(dateTimeObj).add(6,'days');
        }
        if(thisDay == "Tuesday"){
            addDaysOne = moment(dateTimeObj).add(4,'days');
            addDaysTwo = moment(dateTimeObj).add(5,'days');
        }
        if(thisDay == "Wednesday"){
            addDaysOne = moment(dateTimeObj).add(3,'days');
            addDaysTwo = moment(dateTimeObj).add(4,'days');
        }
        if(thisDay == "Thursday"){
            addDaysOne = moment(dateTimeObj).add(2,'days');
            addDaysTwo = moment(dateTimeObj).add(3,'days');
        }
        if(thisDay == "Friday"){
            addDaysOne = moment(dateTimeObj).add(1,'days');
            addDaysTwo = moment(dateTimeObj).add(2,'days');
        } 
        if(thisDay == "Saturday"){
            addDaysOne = moment(dateTimeObj);
            addDaysTwo = moment(dateTimeObj).add(1,'days');
        } 
        if(thisDay == "Sunday"){
            addDaysOne = moment(dateTimeObj).add(-1,'days');
            addDaysTwo = moment(dateTimeObj);
        } 
        fileDateOne = moment(addDaysOne).format("MM-DD-YYYY");
        fileDayOne = moment(addDaysOne).format("dddd"); 
        fileDateTwo = moment(addDaysTwo).format("MM-DD-YYYY");
        fileDayTwo = moment(addDaysTwo).format("dddd");  

        newsFlexHtmlOne = newsFlexDir + fileDateOne + "_" + fileHourOne + ".html";
        newsFlexHtmlTwo = newsFlexDir + fileDateTwo + "_" + fileHourTwo + ".html";
        break;


    case "election": case "special":
        fileDateOne = fileDate;
        fileDateTwo = fileDate;
        fileHourOne = thisHour + "00";
        addHour = moment(dateTimeObj).add(1,'hour');
        fileHourTwo = addHour.format("HH");
        fileHourTwo = fileHourTwo + "00";
        newsFlexHtmlOne = newsFlexDir + fileDateOne + "_" + fileHourOne + ".html";
        newsFlexHtmlTwo = newsFlexDir + fileDateTwo + "_" + fileHourTwo + ".html";
        break;
    case "newscast":
        fileDateOne = fileDate;
        fileDateTwo = fileDate;
        if(thisTime >= "00:00" && thisTime <= "00:10"){fileHourOne = "0000";fileHourTwo = "0100";}
        if(thisTime >= "00:10" && thisTime <= "01:10"){fileHourOne = "0100";fileHourTwo = "0200";}
        if(thisTime >= "01:10" && thisTime <= "02:10"){fileHourOne = "0200";fileHourTwo = "0300";}
        if(thisTime >= "02:10" && thisTime <= "03:10"){fileHourOne = "0300";fileHourTwo = "0400";}
        if(thisTime >= "03:10" && thisTime <= "04:10"){fileHourOne = "0400";fileHourTwo = "0500";}
        switch(fileDay){
            case "Saturday": case "Sunday":
                if(thisTime >= "04:10" && thisTime <= "05:10"){fileHourOne = "0500";fileHourTwo = "0600";}
                if(thisTime >= "05:10" && thisTime <= "06:10"){fileHourOne = "0600";fileHourTwo = "0700";}
                if(thisTime >= "06:10" && thisTime <= "07:10"){fileHourOne = "0700";fileHourTwo = "0800";}
                if(thisTime >= "07:10" && thisTime <= "08:10"){fileHourOne = "0800";fileHourTwo = "0900";}
                if(thisTime >= "08:10" && thisTime <= "09:10"){fileHourOne = "0900";fileHourTwo = "1000";}
                if(thisTime >= "09:10" && thisTime <= "10:10"){fileHourOne = "1000";fileHourTwo = "1100";}
                if(thisTime >= "10:10" && thisTime <= "11:10"){fileHourOne = "1100";fileHourTwo = "1200";}
                if(thisTime >= "11:10" && thisTime <= "12:10"){fileHourOne = "1200";fileHourTwo = "1300";}
                if(thisTime >= "12:10" && thisTime <= "13:10"){fileHourOne = "1300";fileHourTwo = "1400";}
                if(thisTime >= "13:10" && thisTime <= "14:10"){fileHourOne = "1400";fileHourTwo = "1500";}
                if(thisTime >= "14:10" && thisTime <= "15:10"){fileHourOne = "1500";fileHourTwo = "1600";}
                if(thisTime >= "15:10" && thisTime <= "16:10"){fileHourOne = "1600";fileHourTwo = "1700";}
                if(thisTime >= "16:10" && thisTime <= "17:10"){fileHourOne = "1700";fileHourTwo = "1800";}
                if(thisTime >= "17:10" && thisTime <= "18:10"){fileHourOne = "1800";fileHourTwo = "1900";}
                if(thisTime >= "18:10" && thisTime <= "19:10"){fileHourOne = "1900";fileHourTwo = "2000";}
                if(thisTime >= "19:10" && thisTime <= "20:10"){fileHourOne = "2000";fileHourTwo = "2100";}
                if(thisTime >= "20:10" && thisTime <= "21:10"){fileHourOne = "2100";fileHourTwo = "2200";}
                if(thisTime >= "21:10" && thisTime <= "22:10"){fileHourOne = "2200";fileHourTwo = "2300";}

                if(thisTime >= "22:10" && thisTime <= "23:10"){
                    fileHourOne = "2300";
                    addDays = moment(dateTimeObj).add(1,'days');
                    fileDateTwo = moment(addDays).format("MM-DD-YYYY");
                    fileHourTwo = "0000";
                }

                if(thisTime >= "23:10"){
                    addDays = moment(dateTimeObj).add(1,'days');
                    fileDateOne = moment(addDays).format("MM-DD-YYYY");
                    fileDateTwo = moment(addDays).format("MM-DD-YYYY");
                    fileHourOne = "0000";
                    fileHourTwo = "0100";
                }
                break;
            default://weekday case
                if(thisTime >= "04:10" && thisTime <= "05:10"){fileHourOne = "0500";fileHourTwo = "0530";}
                if(thisTime >= "05:10" && thisTime <= "05:35"){fileHourOne = "0530";fileHourTwo = "0630";}
                if(thisTime >= "05:35" && thisTime <= "06:10"){fileHourOne = "0600";fileHourTwo = "0630";}
                if(thisTime >= "06:10" && thisTime <= "06:35"){fileHourOne = "0630";fileHourTwo = "0700";}
                if(thisTime >= "06:35" && thisTime <= "07:10"){fileHourOne = "0700";fileHourTwo = "0730";}
                if(thisTime >= "07:10" && thisTime <= "07:35"){fileHourOne = "0730";fileHourTwo = "0800";}
                if(thisTime >= "07:35" && thisTime <= "08:10"){fileHourOne = "0800";fileHourTwo = "0830";}
                if(thisTime >= "08:10" && thisTime <= "08:35"){fileHourOne = "0830";fileHourTwo = "0900";}
                if(thisTime >= "08:35" && thisTime <= "09:10"){fileHourOne = "0900";fileHourTwo = "0930";}
                if(thisTime >= "09:10" && thisTime <= "09:35"){fileHourOne = "0930";fileHourTwo = "1000";}
                if(thisTime >= "09:35" && thisTime <= "10:10"){fileHourOne = "1000";fileHourTwo = "1030";}
                if(thisTime >= "10:10" && thisTime <= "10:35"){fileHourOne = "1030";fileHourTwo = "1100";}
                if(thisTime >= "10:35" && thisTime <= "11:10"){fileHourOne = "1100";fileHourTwo = "1130";}
                if(thisTime >= "11:10" && thisTime <= "11:35"){fileHourOne = "1130";fileHourTwo = "1200";}
                if(thisTime >= "11:35" && thisTime <= "12:10"){fileHourOne = "1200";fileHourTwo = "1300";}
                if(thisTime >= "12:10" && thisTime <= "13:10"){fileHourOne = "1300";fileHourTwo = "1400";}
                if(thisTime >= "13:10" && thisTime <= "14:10"){fileHourOne = "1400";fileHourTwo = "1500";}
                if(thisTime >= "14:10" && thisTime <= "15:10"){fileHourOne = "1500";fileHourTwo = "1600";}
                if(thisTime >= "15:10" && thisTime <= "16:10"){fileHourOne = "1600";fileHourTwo = "1630";}
                if(thisTime >= "16:10" && thisTime <= "16:35"){fileHourOne = "1630";fileHourTwo = "1700";}
                if(thisTime >= "16:35" && thisTime <= "17:10"){fileHourOne = "1700";fileHourTwo = "1730";}
                if(thisTime >= "17:10" && thisTime <= "17:35"){fileHourOne = "1730";fileHourTwo = "1800";}
                if(thisTime >= "17:35" && thisTime <= "18:10"){fileHourOne = "1800";fileHourTwo = "1830";}
                if(thisTime >= "18:10" && thisTime <= "18:35"){fileHourOne = "1830";fileHourTwo = "1900";}
                if(thisTime >= "18:35" && thisTime <= "19:10"){fileHourOne = "1900";fileHourTwo = "1930";}
                if(thisTime >= "19:10" && thisTime <= "19:35"){fileHourOne = "1930";fileHourTwo = "2000";}
                if(thisTime >= "19:35" && thisTime <= "20:10"){fileHourOne = "2000";fileHourTwo = "2030";}
                if(thisTime >= "20:10" && thisTime <= "20:35"){fileHourOne = "2030";fileHourTwo = "2100";}
                if(thisTime >= "20:35" && thisTime <= "21:10"){fileHourOne = "2100";fileHourTwo = "2130";}
                if(thisTime >= "21:10" && thisTime <= "21:35"){fileHourOne = "2130";fileHourTwo = "2200";}
                if(thisTime >= "21:35" && thisTime <= "22:10"){fileHourOne = "2200";fileHourTwo = "2300";}
                if(thisTime >= "22:10" && thisTime <= "23:10"){
                    fileHourOne = "2130";
                    addDays = moment(dateTimeObj).add(1,'days');
                    fileDateTwo = moment(addDays).format("MM-DD-YYYY");
                    fileHourTwo = "0000";
                }
                if(thisTime >= "23:10"){
                    addDays = moment(dateTimeObj).add(1,'days');
                    fileDateOne = moment(addDays).format("MM-DD-YYYY");
                    fileDateTwo = moment(addDays).format("MM-DD-YYYY");
                    fileHourOne = "0000";
                    fileHourTwo = "0100";
                }
                break;
        }
        newsFlexHtmlOne = newsFlexDir + fileDateOne + "_" + fileHourOne + ".html";
        newsFlexHtmlTwo = newsFlexDir + fileDateTwo + "_" + fileHourTwo + ".html";
        break;
}
        
        testRun = "/public/" + show + "_" + fileDate + "_" + fileHour + ".html";


//"\\\\ad.npr.org\\news\\DC-Production\\BCS\\HTML\\" + show + "\\" + show + "_" + dateTime + ".html"
var newsFlexHtml;

    // if(show == 'me' || show == 'atc' || show == 'wesat' || show == 'wesun'){
    //     newsFlexHtml = "submittedDate: " + submittedDate +"<br/>" + newsFlexHtmlOne;
    // }

    // if(show == 'watc' || show == 'election' || show == 'special' || show == 'newscast'){
    //     newsFlexHtml = "submittedDate: " + submittedDate +"<br/>" + "newsFlexHtmlOne: "+ newsFlexHtmlOne + "<br/>newsFlexHtmlTwo:" + newsFlexHtmlTwo;
    // }

    if(show == 'me' || show == 'atc' || show == 'wesat' || show == 'wesun'){
        newsFlexHtml = testRun;
    }
    //response.send(newsFlexHtml);
    // console.log(newsCastUrl);

    response.sendFile(__dirname + newsFlexHtml);

});

app.listen(3000);
// app.listen(3005, function(){
//     console.log('Listening on port 3005');
// });



