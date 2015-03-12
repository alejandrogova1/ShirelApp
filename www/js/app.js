// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.inicio', {
    url: "/inicio",
    views: {
      'menuContent': {
        templateUrl: "templates/inicio.html"
      }
    }
  })

  .state('app.cliente_venta', {
    url: "/cliente_venta",
    views: {
      'menuContent': {
        templateUrl: "templates/cliente_venta.html",
        controller: 'ClienteVentaCtrl'
      }
    }
  })

  .state('app.cliente_ventaf', {
    url: "/cliente_ventaf",
    views: {
      'menuContent': {
        templateUrl: "templates/cliente_ventaf.html",
        controller: 'ClienteVentaFCtrl'
      }
    }
  })

  .state('app.cliente_perecedero', {
    url: "/cliente_perecedero",
    views: {
      'menuContent': {
        templateUrl: "templates/cliente_perecedero.html",
        controller: 'ClientePerecederoCtrl'
      }
    }
  })

  .state('app.cliente_compras', {
    url: "/cliente_compras",
    views: {
      'menuContent': {
        templateUrl: "templates/cliente_compras.html",
        controller: 'ClienteComprasCtrl'
      }
    }
  })

  .state('app.prod_pasta', {
    url: "/prod_pasta",
    views: {
      'menuContent': {
        templateUrl: "templates/prod_pasta.html",
        controller: 'prod_pastaCtrl'
      }
    }
  })

  .state('app.prod_totopo', {
    url: "/prod_totopo",
    views: {
      'menuContent': {
        templateUrl: "templates/prod_totopo.html",
        controller: 'prod_totopoCtrl'
      }
    }
  })

  .state('app.prod_tostadas', {
    url: "/prod_tostadas",
    views: {
      'menuContent': {
        templateUrl: "templates/prod_tostadas.html",
        controller: 'prod_tostadasCtrl'
      }
    }
  })

  .state('app.prod_freidor', {
    url: "/prod_freidor",
    views: {
      'menuContent': {
        templateUrl: "templates/prod_freidor.html",
        controller: 'prod_freidor'
      }
    }
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
