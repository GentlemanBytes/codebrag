angular.module('codebrag.favicon')

    .directive('tabNotifier', function($window, $rootScope) {

        var REGULAR_FAVICON = 'assets/images/favicon.ico';
        var NOTIFY_FAVICON = 'assets/images/notification-favicon/favicon.ico';

        var REGULAR_TITLE = 'Codebrag';
        var NOTIFY_TITLE = '* Codebrag';

        return {
            restrict: 'A',
            controller: function() {

                setFavicon(REGULAR_FAVICON, REGULAR_TITLE);

                $rootScope.$on('newNotificationsAvailable', function() {
                    setFavicon(NOTIFY_FAVICON, NOTIFY_TITLE);
                });

                $rootScope.$on('allNotificationsRead', function() {
                    setFavicon(REGULAR_FAVICON, REGULAR_TITLE);
                });

                function setFavicon(iconUrl, tabTitle) {
                    $window.favicon && $window.favicon.change(iconUrl, tabTitle);
                }
            }
        }
    });