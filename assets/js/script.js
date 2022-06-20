var currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var scheduledContent = $(this).siblings(".content").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, scheduledContent);
  });

  function checkHourChangeColor() {

    var currentHour = moment().hours();

    $(".timeRow").each(function () {
      var scheduledTime = parseInt($(this).attr("id").split("-")[1]);

      if (scheduledTime > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (scheduledTime === currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    })
  }

  // trying to get the content from localStorage
  $("#time-9 .content").val(localStorage.getItem("time-9"));
  $("#time-10 .content").val(localStorage.getItem("time-10"));
  $("#time-11 .content").val(localStorage.getItem("time-11"));
  $("#time-12 .content").val(localStorage.getItem("time-12"));
  $("#time-13 .content").val(localStorage.getItem("time-13"));
  $("#time-14 .content").val(localStorage.getItem("time-14"));
  $("#time-15 .content").val(localStorage.getItem("time-15"));
  $("#time-16 .content").val(localStorage.getItem("time-16"));
  $("#time-17 .content").val(localStorage.getItem("time-17"));

  checkHourChangeColor();
});
