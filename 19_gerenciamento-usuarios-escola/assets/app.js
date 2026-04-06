var app = angular.module("escolaApp", []);

app.service("UsuarioService", function () {
    var lista = (typeof usuariosGlobal !== 'undefined') ? usuariosGlobal : [];
    this.listar = () => lista;
    this.remover = (index) => lista.splice(index, 1);
    this.salvar = (novo) => {
        return new Promise(resolve => {
            setTimeout(() => {
                let inst;
                let mail = novo.userEmail + "@amarilis.edu.com";
                if (novo.tipo === "Aluno") inst = new Aluno(novo.nome, mail, "123", novo.complemento);
                else inst = new Professor(novo.nome, mail, "123", novo.complemento);
                lista.push(inst);
                resolve();
            }, 1000);
        });
    };
});

app.controller("AppController", function ($scope, UsuarioService) {
    $scope.tituloPainel = "Portal Amarílis Tech School";
    $scope.usuariosLista = UsuarioService.listar();
    $scope.novoUsuario = {};

    $scope.init = function () {
        const logado = localStorage.getItem("usuarioLogado");
        $scope.usuarioLogado = logado ? JSON.parse(logado) : { nome: "Visitante", tipo: "Aluno" };
        $scope.$applyAsync();
    };

    $scope.init();

    $scope.adicionarUsuario = function (form) {
        if (form.$invalid) return;
        $scope.processando = true;
        UsuarioService.salvar($scope.novoUsuario).then(() => {
            $scope.novoUsuario = {};
            $scope.processando = false;
            form.$setPristine();
            form.$setUntouched();
            $scope.$apply();
        });
    };

    $scope.removerUsuario = (index) => UsuarioService.remover(index);
});