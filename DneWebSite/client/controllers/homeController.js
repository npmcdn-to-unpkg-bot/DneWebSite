(function(){
	'use strict';

	angular.module('main')
        .controller('homeCtrl', ['$log', '$state', function ($log, $state) {
            var vm = this;
            //�º��D����}
            vm.host = '10.20.1.4';
            vm.host2 = '10.144.101.5';
            vm.goToHome = function () {
		   	    //ui-router $state.go�i�H����router.js�w�q��state���|�W��
		   	    $state.go('home');
		   	}
		   }])

})();