$("#first-search").on("click", function () {
  searchWord = $("#stockSearch").val();
  // console.log(searchWord);
  showResults();
  // $("#first-search").attr("href", "search.html");
});
$("#stockSearch").keydown(function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    searchWord = $("#stockSearch").val();
    showResults();
  }
});

$("#backToMain").on("click", function () {
  location.href = "index.html";
});

var symbol = "";

var apiKey = "K0529GI9C27OCRIL";

var keyWord = "";

var secondURL =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=" +
  symbol +
  "&apikey=" +
  apiKey;

var thirdURL =
  "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" +
  keyWord +
  "&apikey=" +
  apiKey;

function getCurrent(sym) {
  symbol = sym;
  var queryURL =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
    symbol +
    "&apikey=" +
    apiKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    if (sym === "GOOG") {
      $("#price1").text(response["Global Quote"]["05. price"]);
    } else if (sym === "MSFT") {
      $("#price2").text(response["Global Quote"]["05. price"]);
    } else if (sym === "AMZN") {
      $("#price3").text(response["Global Quote"]["05. price"]);
    } else if (sym === "AAPL") {
      $("#price4").text(response["Global Quote"]["05. price"]);
    } else if (sym === "TSLA") {
      $("#price5").text(response["Global Quote"]["05. price"]);
    } else if (sym === "BABA") {
      $("#price6").text(response["Global Quote"]["05. price"]);
    }
  });
}

getCurrent("GOOG");
getCurrent("MSFT");
getCurrent("AMZN");
getCurrent("AAPL");
getCurrent("TSLA");
getCurrent("BABA");

$("#first-search").on("click", function () {
  searchWord = $("#stockSearch").val();
  // console.log(searchWord);
  showResults();
  // $("#first-search").attr("href", "search.html");
});
$("#stockSearch").keydown(function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    searchWord = $("#stockSearch").val().trim();
    showResults();
  }
});

function showResults() {
  $("#searchThing")
    .text("Searched Results For: " + searchWord)
    .css("color", "#004d40");
  keyWord = searchWord;
  var thirdURL =
    "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" +
    keyWord +
    "&apikey=" +
    apiKey;
  $.ajax({
    url: thirdURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var results = response.bestMatches;
    for (var i = 0; i < results.length; i++) {
      var resultDiv = $("<div>");
      resultDiv.attr("class", "card col s6 teal lighten-5");

      console.log(results[i]);

      var name = results[i]["2. name"];
      var symb = results[i]["1. symbol"];

      console.log(name);
      console.log(symb);

      var head3 = $("<h3>").text(name).attr("class", "flow-text");
      var head4 = $("<h4>").text(symb).attr("class", "flow-text");

      var proceed = $("<a>");
      proceed.attr("class", "waves-effect waves-light btn-large");
      proceed.attr("value", symb);
      proceed.text("CONTINUE");

      resultDiv.append(head3);
      resultDiv.append(head4);
      resultDiv.append(proceed);

      $("#searchResults").append(resultDiv);
    }
  });
}

$("#backToMain").on("click", function () {
  location.href = "index.html";
});
