'use strict';

angular.module('PTF.version', [
  'PTF.version.interpolate-filter',
  'PTF.version.version-directive'
])

.value('version', '0.1');
