var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);


$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var scheduledContent = $(this).siblings(".content").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, scheduledContent);
  });

  var currentHour = moment().hours();

  function checkHourChangeColor() {
    $(".timeRow").each(function () {
      var scheduledTime = parseInt($(this).attr("id"));

      if (scheduledTime < currentHour) {
        $(this).addClass("future");
      } else if (scheduledTime === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
      }
    });
  }

  // trying to get the content from localStorage
  $("#9 .content").val(localStorage.getItem("9"));
  $("#10 .content").val(localStorage.getItem("10"));
  $("#11 .content").val(localStorage.getItem("11"));
  $("#12 .content").val(localStorage.getItem("12"));
  $("#13 .content").val(localStorage.getItem("13"));
  $("#14 .content").val(localStorage.getItem("14"));
  $("#15 .content").val(localStorage.getItem("15"));
  $("#16 .content").val(localStorage.getItem("16"));
  $("#17 .content").val(localStorage.getItem("17"));

  checkHourChangeColor();
});
