$(document).ready(function(){
  $("#groceryList").submit(function(event){
    var groceryLists = ["item1", "item2", "item3", "item4", "item5"];
    var alphaLists = [];


    groceryLists.forEach(function(groceryList) {
      alphaLists.push($("input#"+groceryList).val());
      alphaLists.sort();

    });
    alphaLists.forEach(function(currentItem){
      $("ul#result").append("<li>" + currentItem.toUpperCase() + "</li>");
    });


  $(".formSection").hide();
  $(".result").show();

    event.preventDefault();
  });
});
