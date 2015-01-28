

var search = "http://www.omdbapi.com/?s="

var node = document.createElement("DIV");

node

$(document).ready(function () {
  $("button").on("click", function ()  ) {
    var input = $("input").val();
    $.ajax(search + input, {type: 'get', dataType: 'json'}).done(function (data) {

    }) )

  })


function searchData(data) {
  var results = data["search"];
  var li = "";

  if ($(".li")) $(".li").empty();
  if ($(".movie-detail")) $(".movie-detail").empty();
  for (var i = 0; i < results.length; i++) {
    li += "<li class='movie-listing'>" + results[i].Title + "</li>";
  }
  $(".myApp").append("<ul class='li'>" + listings + "</ul>");

  function addExtras() {

  }

}

})
