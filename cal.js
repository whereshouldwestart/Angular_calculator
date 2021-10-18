function  CalculatorCtrl($scope)  {

$scope.a  =  0;
$scope.b  =  0;
$scope.operation  =  '+';

$scope.na  =  function()  {
return  $scope.a  -  0;
}

$scope.nb  =  function()  {
return  $scope.b  -  0;
}

$scope.inca  =  function()  {
$scope.a  =  $scope.na()  +  1;
}

$scope.incb  =  function()  {
$scope.b  =  $scope.nb()  +  1;
}

$scope.deca  =  function()  {
$scope.a  =  $scope.na()  -  1;
}

$scope.decb  =  function()  {
$scope.b  =  $scope.nb()  -  1;
}

$scope.calculate  =  function()  {
if($scope.operation  ==  '+')  {
return  $scope.na()  +  $scope.nb();
}
if($scope.operation  ==  '-')  {
return  $scope.a  -  $scope.b;
}
if($scope.operation  ==  '*')  {
return  $scope.a  *  $scope.b;

</body>

</html>

SCRIPT CODE:


.result {
color: #38f;
font-size: 36px;
}

.command {
cursor:  pointer;
color:  #00b; 
font-size: 13px;
font-weight: bold;
}

}
if($scope.operation  ==  '/')  {
return  $scope.a  /  $scope.b;
}
if($scope.operation  ==  '!')  {
i=1,fact=1; 
for(i=1;i<=$scope.a  ;i++){
fact=fact*i;
}
return  fact  ;

}

}

return  "undef";

}
