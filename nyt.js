function queryBuilder() {
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  var apiKey = "api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";
  var queryParam = $("#search-term")
    .val()
    .trim();
  var startYear = $("#start-year")
    .val()
    .trim();
  var endYear = $("#end-year")
    .val()
    .trim();

  if (queryParam) {
    queryParam = "q=" + queryParam + "&";
  }
  if (parseInt(startYear)) {
    startYear = "begin_date=" + startYear + "0101&";
  }

  if (parseInt(endYear)) {
    endYear = "end_date=" + endYear + "1231&";
  }

  return queryURL + startYear + endYear + queryParam + apiKey;
}

function updatePage(NYTData) {
  var numArticles = $("#article-count").val();
  for (var i = 0; i < numArticles; i++) {
    var article = NYTData.response.docs[i];
    var articleCount = i + 1;
    var $articleList = $("<ul>");
    $("#article-section").append($articleList);
    var headline = article.headline;
    var $articleListItem = $("<li class='list-group-item articleHeadline'>");

    if (headline && headline.main) {
      $articleListItem.append(
        "<span>" +
          articleCount +
          "</span>" +
          "<strong> " +
          headline.main +
          "</strong>"
      );
    }

    var byline = article.byline;

    if (byline && byline.original) {
      $articleListItem.append("<h5>" + byline.original + "</h5>");
    }

    var section = article.section_name;
    if (section) {
      $articleListItem.append("<h5>Section: " + section + "</h5>");
    }

    var pubDate = article.pub_date;
    if (pubDate) {
      $articleListItem.append("<h5>" + article.pub_date + "</h5>");
    }

    $articleListItem.append(
      "<a href='" + article.web_url + "'>" + article.web_url + "</a>"
    );

    $articleList.append($articleListItem);
  }
}

function clear() {
  $("#article-section").empty();
}

/*
 * Event Handlers
 */
$("#run-search").on("click", function(event) {
  event.preventDefault();

  clear();

  var queryURL = queryBuilder();

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});

$("#clear-all").on("click", clear);
