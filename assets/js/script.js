//Gets current date and puts it into html 
var currentDay = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").text(currentDay);
