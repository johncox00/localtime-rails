$(document).ready(function(){
  localizeTime();
});

$(document).on('page:load', localizeTime);

function localizeTime(){
  var now = new Date();
  var utcOffset = now.getTimezoneOffset() * 1000 * 60;
  $('.local-time').each(function() {
    // localize servertime of the record and make it a Date Object
    var serverTime = $(this).text();
    var newTimeObject = new Date(serverTime);
    if (isNaN(newTimeObject.getFullYear())) {
      continue;
    }
    var localizedTime = new Date(newTimeObject - utcOffset);

    //Get displayable data from the Date Object
    var year = localizedTime.getFullYear();
    var month = localizedTime.getMonth() + 1;
    var day = localizedTime.getDate();
    var hours = localizedTime.getHours();

    //Tweaks: 24hour clock to 12, add a leading 0 to minutes less than 10, etc.
    var ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12;
    hours = hours ? hours : 12;
    var minutes = (localizedTime.getMinutes() < 10 ? '0' : '') + localizedTime.getMinutes();

    if ($(this).text() != "") {
      $(this).text(month + "/" + day + "/" + year + " " + hours + ":" + minutes + " " + ampm);
      $(this).removeClass('local-time');
    }
  });
}