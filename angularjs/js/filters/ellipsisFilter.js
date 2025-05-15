angular.module("contactList").filter("ellipsis", () => {
	return function (input, size) {
		size ??= 2;
		if (input.length <= size) return input;
		return input.substring(0, size) + "..."; 
	}
});