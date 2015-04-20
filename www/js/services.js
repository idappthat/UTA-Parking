angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Social Work Parking Lot',
    latLong: '32.735003, -97.113465',
  }, {
    id: 1,
    name: 'MAC Parking Lot',
    latLong: '32.733306, -97.117821',
  }, {
    id: 2,
    name: 'UH Parking Lot',
    latLong: '32.727918, -97.112789',
  }, {
    id: 3,
    name: 'Doug Russel Parking Lot',
    latLong: '32.725869, -97.112886',
  }, {
    id: 4,
    name: 'Tennis Courts Parking Lot',
    latLong: '32.731186, -97.119699',
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
