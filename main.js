
$(document).ready(function() {

$("#search").on("click",function(){
  var searchTerm = $("#searchTerm").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

  $.ajax({
      url: url,
      type: "GET",
      async: false,
      dataType: "json",
      success: function(data, status, jqXHR){
        console.log(data);
        for(var i=0; i < data[1].length; i++){
        //  var title = data.query.search[i].title;
        //  var info = data.query.search[i].snippet;
       //   var address = "https://en.wikipedia.org/wiki/"+data.query.search[i].title;
          
        //  $("#output").prepend("<div class='well' <a href=" + address + "><h3>" +title+ "</h3>" + info + "</a> </div> <br>");
           $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div><br>");
          

          
          
        }
      }
  })

})

   });