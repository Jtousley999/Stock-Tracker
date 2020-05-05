var saved = localStorage.getItem("searched");
​
var named = localStorage.getItem("named");
​
var symbol = "";
​
var apiKey = "IDCBFUJ8G1MEMOI4";
​
console.log(symbol);
​
var searchWord = "";
​
var keyWord = "";
​
function getCurrent(sym){
    symbol = sym;
    var queryURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + symbol +"&apikey=" + apiKey; 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        if(sym === "GOOG"){
            $("#price1").text(response['Global Quote']['05. price']) 
        }
        else if(sym === "MSFT"){
                $("#price2").text(response['Global Quote']['05. price']) 
        }
        else if(sym === "AMZN"){
            $("#price3").text(response['Global Quote']['05. price']) 
        }
        else if(sym === "AAPL"){
            $("#price4").text(response['Global Quote']['05. price']) 
        }
    });
}
​
getCurrent("GOOG");
getCurrent("MSFT");
getCurrent("AMZN");
getCurrent("AAPL");
​
$(".btn-large").on("click", function(){
    $(".btn-large").attr("href", "artur-01.html");
});
​
function loadSearched(){
    var queryURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + saved +"&apikey=" + apiKey; 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        $("#searchedName").text(named);
        $("#searchedCode").text(response['Global Quote']['01. symbol']);
        $("#priceNow").text(response['Global Quote']['05. price']);
    });
}
​
$("#first-search").on("click", function(){
    searchWord = $("#stockSearch").val()
    console.log($("#stockSearch").val())
    showResults();
});
​
$('#stockSearch').keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        searchWord = $("#stockSearch").val()
        showResults();
    }
});;
​
function showResults(){
    $("#searchResults").empty();
    $("#searchThing").text("Searched Results For: " + searchWord);
    keyWord = searchWord;
    var thirdURL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + keyWord + "&apikey=" + apiKey
    $.ajax({
        url: thirdURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.bestMatches;
        for (var i = 0; i < results.length; i++) {
            var resultDiv = $("<div>");
            resultDiv.attr("class", "card col s6");
​
            var name = results[i]['2. name'];
            var symb = results[i]['1. symbol'];
​
            var head3 = $("<h3>").text(name);
            var head4 = $("<h4>").text(symb);
​
            var proceed = $("<a>")
            proceed.attr("class", "waves-effect waves-light btn-large");
            proceed.attr("value", results[i]['1. symbol']);
            proceed.attr("title", results[i]['2. name']);
            proceed.text("CONTINUE");            
​
            resultDiv.append(head3);
            resultDiv.append(head4);
            resultDiv.append(proceed);
​
            $("#searchResults").append(resultDiv);
            
          }
          $(".btn-large").on("click", function(){
            contCode = $(this).attr("value");
            contName = $(this).attr("title");
            localStorage.setItem("searched", contCode);  
            localStorage.setItem("named", contName);    
            $(".btn-large").attr("href", "main.html");
            newCardInfo();        
        })
​
    });
}
​
loadSearched();




// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";


// var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };


// queryParams.q = $("#search-term").val().trim();
