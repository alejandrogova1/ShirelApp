angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 3000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Chico', id: 1 },
    { title: 'Grande', id: 2 },
    { title: 'Docena', id: 3 },
    { title: 'Totopo 400 gms', id: 4 },
    { title: 'TH 15', id: 5 },
    { title: 'Burro', id: 6 },
    { title: 'Pasta Tradicional', id: 9 },
    { title: 'Pedacera', id: 11 },
    { title: 'Pasta Docena', id: 13 }
  ];
})

.controller('ClienteVentaCtrl', function($scope, $http, $location, $state) {
  
  $scope.master = {};
  $scope.id_1_Existencia = 0;

  $scope.scanCode = function() {
    var scanner = cordova.plugins.barcodeScanner;

    scanner.scan(function (result) {
      $state.go("app.cliente_venta",{'idCliente':result.text});

      var str = "idCliente=12;Cliente=Abarrotes Lupita";
      str=result.text
      var tamanostr = str.length;
      var n1 = str.indexOf("=");
      var n2 = str.indexOf(";");
      var idCliente = str.substring(n1+1, n2);
      var Cliente = str.substring(n2+9,tamanostr);

      $scope.idCliente = idCliente;
      $scope.Cliente = Cliente;
    }, 
    function (error) {
      alert("Falló el escaneo: " + error);
    });
  }

  $scope.saveExistencia = function(form){
    $scope.master = angular.copy(form);

//











    //$location.url('app/cliente_perecedero');
  };

  $scope.productos = [
    { title: 'Paquete Chico 24 pzas', id: 1 },
    { title: 'Paquete Grande 48 pzas', id: 2 },
    { title: 'Paquete Docena 15 pzas', id: 3 },
    { title: 'Paquete Totopo 400 gms', id: 4 },
    { title: 'Paquete TH 15 pzas', id: 5 },
    { title: 'Paquete TH Burro 10 pzas', id: 6 }
  ];

})

.controller('ClienteVentaFCtrl', function($scope) {
  $scope.imprimir = function(form){
    console.log("Disque pathname: " + window.location.pathname);
    console.log("generating pdf...");

    var doc = new jsPDF('l', 'mm', [48, 76.2]);
    //var doc = new jsPDF();
    doc.setFontSize(10);
    doc.text(18, 10, 'PRODUCCIONES SHIREL');
    doc.text(10, 15, 'Clave del cliente:');
    doc.text(10, 20, 'Cliente: ');
    doc.text(10, 25, 'Vendedor: ');

    doc.save('Shirel-05.pdf');

var pdfOutput = doc.output();
console.log( pdfOutput );

//NEXT SAVE IT TO THE DEVICE'S LOCAL FILE SYSTEM
console.log("file system...");
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
 
   console.log(fileSystem.name);
   console.log(fileSystem.root.name);
   console.log("Ruta archivo: " + fileSystem.root.fullPath);
 
   fileSystem.root.getFile("test.pdf", {create: true}, function(entry) {
      var fileEntry = entry;
      console.log(entry);
 
      entry.createWriter(function(writer) {
         writer.onwrite = function(evt) {
         console.log("write success");
         console.log("Ruta archivo: " + fileSystem.root.fullPath);
      };
 
      console.log("writing to file");
         writer.write( pdfOutput );
      }, function(error) {
         console.log(error);
      });
 
   }, function(error){
      console.log(error);
   });
},
function(event){
 console.log( evt.target.error.code );
});

cordova.plugins.fileOpener2.open(
    '/storage/emulated/0/test.pdf', // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf
    'application/pdf', 
    { 
        error : function(e) { 
            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
        },
        success : function () {
            console.log('file opened successfully');                
        }
    }
);




    
  };
})

.controller('ClientePerecederoCtrl', function($scope, $http, $location) {

  $scope.savePerecedero = function(form){
    $location.url('app/cliente_compras');
  };

  $scope.productos = [
    { title: 'Chico 24 pzas', id: 1 },
    { title: 'Grande 48 pzas', id: 2 },
    { title: 'Docena 15 pzas', id: 3 },
    { title: 'Totopo 400 gms', id: 4 },
    { title: 'TH 15 pzas', id: 5 },
    { title: 'TH Burro 10 pzas', id: 6 }
  ];

  $scope.tipoproductos = [
    { nombre: 'Blanca', id: 1 },
    { nombre: 'Rota', id: 2 },
    { nombre: 'Aguada', id: 3 },
    { nombre: 'Sin liga', id: 4 },
    { nombre: 'Soleada', id: 5 },
    { nombre: 'Sucia', id: 7 },
    { nombre: 'Muy dorada', id: 8 },
    { nombre: 'Caducado', id: 9 },
    { nombre: 'Prox a caducar', id: 10 }
  ];
})

.controller('ClienteComprasCtrl', function($scope, $http, $location) {
  $scope.savePerecedero = function(form){
    $location.url('app/cliente_compras');
  };

  $scope.productos = [
    { title: 'Chico 24 pzas', id: 1 },
    { title: 'Grande 48 pzas', id: 2 },
    { title: 'Docena 15 pzas', id: 3 },
    { title: 'Totopo 400 gms', id: 4 },
    { title: 'TH 15 pzas', id: 5 },
    { title: 'TH Burro 10 pzas', id: 6 }
  ];
})

.controller('prod_pastaCtrl', function($scope, $http) {

  $scope.productos = [
    { nombre: 'Pasta Tradicional', idProducto: 9 },
    { nombre: 'Pasta Docena', idProducto: 13 }
  ];

  $scope.errors = [];
  $scope.msgs = [];

  $scope.addPasta = function(form){
      $scope.errors.splice(0, $scope.errors.length); // remove all error messages
      $scope.msgs.splice(0, $scope.msgs.length);

      $http({
        url: "data/prod_pasta.php",
        data: form,
        method: 'POST',
        headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
      }).success(function(data, status, headers, config){
          if (data.msg != ''){
            $scope.msgs.push(data.msg);
            console.log(data);
          }
          else
          {
            $scope.errors.push(data.error);
          }
      });
  };
})

.controller('prod_totopoCtrl', function($scope, $http) {

  $scope.productos = [
    { nombre: 'Totopo 400 gms', idProducto: 4 }
  ];

  $scope.errors = [];
  $scope.msgs = [];

  $scope.addTotopo = function(form){
      $scope.errors.splice(0, $scope.errors.length); // remove all error messages
      $scope.msgs.splice(0, $scope.msgs.length);

      $http({
        url: "data/prod_totopo.php",
        data: form,
        method: 'POST',
        headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
      }).success(function(data, status, headers, config){
          if (data.msg != ''){
            $scope.msgs.push(data.msg);
            console.log(data);
          }
          else
          {
            $scope.errors.push(data.error);
          }
      });
  };
})

.controller('prod_freidor', function($scope, $http) {

  $scope.productos = [
    { nombre: 'Pasta Tradicional', idProducto: 9 },
    { nombre: 'Pasta Docena', idProducto: 13 }
  ];

  $scope.errors = [];
  $scope.msgs = [];

  $scope.addTotopo = function(form){
      $scope.errors.splice(0, $scope.errors.length); // remove all error messages
      $scope.msgs.splice(0, $scope.msgs.length);

      $http({
        url: "data/prod_totopo.php",
        data: form,
        method: 'POST',
        headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
      }).success(function(data, status, headers, config){
          if (data.msg != ''){
            $scope.msgs.push(data.msg);
            console.log(data);
          }
          else
          {
            $scope.errors.push(data.error);
          }
      });
  };
})
