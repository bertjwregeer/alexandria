app.controller('DomainsCtrl', ['$scope', '$log', 'Domains',
    function($scope, $log, Domains) {
        $scope.state = Domains.state;
        $scope.domains = Domains.all;

        $scope.newDomainForm = {}

        $scope.newDomainSubmit = function() {
            $log.debug('Setting all the newDomain fields to $dirty...');
            // Reset the errors list
            if ($scope.newDomain.submitted == false) {
                $scope.errors = {};
            }

            angular.forEach($scope.newDomain, function(ctrl, field) {
                // Dirty hack because $scope.newDomain contains so much more than just the fields
                if (typeof ctrl === 'object' && ctrl.hasOwnProperty('$modelValue')) {
                    ctrl.$dirty = true;
                    ctrl.$pristine = false;

                    // Add a viewChangeListener, so that if the newDomain is
                    // modified at all, we remove .submitted
                    ctrl.$viewChangeListeners.push($scope.modified);
                }
            });

            if ($scope.newDomain.$invalid) {
                $log.debug('Form is invalid. Not sending request to server.');
                return;
            }

            $scope.newDomain.submitted = true;

            $log.debug('Attempting to save domain');

            Domains.saveDomain($scope.newDomainForm, function(value, responseHeader) {
                $scope.newDomainForm = {};
                $scope.newDomain.$setPristine();
            }, function(httpResponse) {
                data = httpResponse.data;
                $scope.errors = {};

                // Set the full form error
                $scope.errors['form_error'] = data.form_error;

                if (data.form_error === null) {
                    angular.forEach(data.errors, function(error, field) {
                        $scope.newDomain[field].$setValidity('server', false);
                        $scope.errors[field] = error;
                    });
                }
            });
        };

        $scope.deleteDomain = function(domain) {
            Domains.deleteDomain(domain);
        };

        $scope.modified = function() {
            $scope.newDomain.submitted = false;
        };
    }
]);


