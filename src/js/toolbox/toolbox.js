export default function toolbox($compile, $timeout, $window) {
	return {
		restrict: "E",
		template: require("./toolbox.html"),
		replace: true,
		scope: {},

		bindToController: true,
		controller: "ToolboxController",
		controllerAs: "ctrl",

		link: function(scope, elem, attrs) {
		}
	};
}

toolbox.$inject = ["$compile", "$timeout", "$window"];