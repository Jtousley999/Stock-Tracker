var saved = localStorage.getItem("searched");

var named = localStorage.getItem("named");

var symbol = "";

var apiKey = "IDCBFUJ8G1MEMOI4";

console.log(symbol);

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
    }
  });
}

getCurrent("GOOG");
getCurrent("MSFT");
getCurrent("AMZN");
getCurrent("AAPL");

$(".btn-large").on("click", function () {
  $(".btn-large").attr("href", "index.html");
});

function loadSearched() {
  var queryURL =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" +
    saved +
    "&apikey=" +
    apiKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $("#searchedName").text(named);
    $("#searchedCode").text(response["Global Quote"]["01. symbol"]);
    $("#priceNow").text(response["Global Quote"]["05. price"]);
  });
}

loadSearched();
