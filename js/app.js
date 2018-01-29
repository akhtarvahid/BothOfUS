
var app=angular.module('myApp',[])
.controller('myCtrl',function($scope,$http){
    var bookapi = [];
   $scope.searchIt = function(){
    var search=$scope.search;
    console.log($scope.search);
    if(search == ''){
      alert("Please enter something in the field first");
    }
    else
    {     
      $http.get("https://www.googleapis.com/books/v1/volumes?q="+ search).success(function(response){
        var i;
        var books = [];
        for(i=0; i<response.items.length; i++){
          var title=response.items[i].volumeInfo.title;
          bookapi.push(response.items[i]);
          books.push(title);
        }
        $scope.booklist=books;
      });
    }
    $scope.search="";
   };

  
  //open particular item
  $scope.openItem = function(name){
    var i;
    console.log(bookapi);
     for(i=0; i<bookapi.length; i++){
      if(bookapi[i].volumeInfo.title == name){
        console.log('got');
        // console.log(bookapi[i].volumeInfo.infoLink);
        window.open(bookapi[i].volumeInfo.infoLink);
      }
     }
  }



});
