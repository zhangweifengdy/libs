var addInfo = angular.module("myApp",[]);

     addInfo.controller("table",["$scope",function($scope){
        
     var tables=[
          {
               FirstName:"FANG",
               LastName:"vane",
               Gender:"Male",
               Salary:"12,333,50",
               Salary:"12,333,50",
               Birthdy:"2007-07-11"
          },
          {
               FirstName:"SARA",
               LastName:"rose",
               Gender:"Female",
               Salary:"232,334,23",
               Salary:"232,334,23",
               Birthdy:"1997-02-03"
          },
          {
               FirstName:"AAM",
               LastName:"hot",
               Gender:"Male",
               Salary:"66,880,50",
               Salary:"66,880,50",
               Birthdy:"1865-03-04"
          },
          {
               FirstName:"MARK",
               LastName:"bear",
               Gender:"Male",
               Salary:"68,000.0",
               Salary:"68,000.0",
               Birthdy:"1968-03-02"
          }

     ];
     $scope.tables = tables;
     //$scope.searchText = "";
}])
	