angular.module("contactList").directive("uiAlert", () => {
	return {
		templateUrl: "views/alert.html",
		replace: true,
		restrict: "E",
		scope: {
			// title: "@title" => se a props forem iguais podem usar so o @
			title: "@",
			// = referencia uma variavel 
			message: "="
		},
		transclude: true
	}
});