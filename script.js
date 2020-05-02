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
