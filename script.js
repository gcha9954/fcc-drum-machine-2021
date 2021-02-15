// for each .drum-pad key, on click it's child element will play
$(".drum-pad").on("click", (event) => {
  $(event.target).children().trigger("play");
  $("#display").text(event.target.id);
});

// on any key press, listener will play the audio element with corresponding
// id, and will display the id of it's parent element
$(document).on("keypress", (event) => {
  let keyPressed = String.fromCharCode(event.which).toUpperCase();
  $(`#${keyPressed}`).trigger("play");
  $("#display").text($(`#${keyPressed}`).parent().attr("id"));
});
