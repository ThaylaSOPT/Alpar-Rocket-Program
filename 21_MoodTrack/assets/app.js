const app = angular.module('MoodTrackApp', []);
class MemoriaDiaria {
    constructor(emocao, texto, habitos) {
        this.emocao = emocao;
        this.texto = texto;
        this.habitos = angular.copy(habitos);
        this.dataCriacao = new Date();
    }
}
app.service('StorageService', function () {

    const CHAVE = 'moodtrack_registros';

    this.salvar = function (diasCalendario) {
        const registrosParaSalvar = diasCalendario
            .filter(dia => !dia.vazio && dia.registro)
            .map(dia => ({
                numero: dia.numero,
                registro: dia.registro
            }));
        localStorage.setItem(CHAVE, JSON.stringify(registrosParaSalvar));
    };

    this.carregar = function (diasCalendario) {
        const dados = localStorage.getItem(CHAVE);
        if (!dados) return;

        const registrosSalvos = JSON.parse(dados);

        registrosSalvos.forEach(item => {
            const dia = diasCalendario.find(d => d.numero === item.numero);
            if (dia) {
                dia.registro = item.registro;
            }
        });
    };
});

app.controller('MainController', function ($scope, StorageService) {

    $scope.elencoCompleto = [
        { id: 1, nome: 'Alegria', slug: 'alegria', cor: '#FDF04B' },
        { id: 2, nome: 'Tristeza', slug: 'tristeza', cor: '#4B92D0' },
        { id: 3, nome: 'Ansiedade', slug: 'ansiedade', cor: '#EC8132' },
        { id: 4, nome: 'Vergonha', slug: 'vergonha', cor: '#E8A0BF' },
        { id: 5, nome: 'Inveja', slug: 'inveja', cor: '#5FB9B3' },
        { id: 6, nome: 'Tédio', slug: 'tedio', cor: '#4E556A' },
        { id: 7, nome: 'Raiva', slug: 'raiva', cor: '#E23A36' },
        { id: 8, nome: 'Medo', slug: 'medo', cor: '#9B68A8' },
        { id: 9, nome: 'Nojinho', slug: 'nojinho', cor: '#71BF45' }
    ];

    $scope.listaHabitos = [
        { nome: 'Beber Água', feito: false },
        { nome: 'Estudar', feito: false },
        { nome: 'Tempo de Lazer', feito: false },
        { nome: 'Exercício', feito: false }
    ];

    $scope.diasCalendario = [];
    $scope.diaFocado = null;
    $scope.form = { emocao: null, texto: "" };
    $scope.mesReferencia = "Abril 2026";

    $scope.abaAtiva = 'calendario';

    $scope.mudarAba = function (aba) {
        $scope.abaAtiva = aba;
        $scope.diaFocado = null;
    };

    $scope.filtros = {
        emocaoId: '',
        dia: ''
    };

    $scope.gerarCalendario = function () {
        const pDiaSemana = new Date(2026, 3, 1).getDay();
        const totalDias = 30;

        for (let i = 0; i < pDiaSemana; i++) {
            $scope.diasCalendario.push({ vazio: true });
        }

        for (let i = 1; i <= totalDias; i++) {
            $scope.diasCalendario.push({
                numero: i,
                registro: null,
                hoje: (i === 8)
            });
        }

        StorageService.carregar($scope.diasCalendario);
    };

    $scope.focarDia = function (dia) {
        if (dia.vazio) return;
        $scope.diaFocado = dia;
        $scope.form = { emocao: null, texto: "" };
        $scope.listaHabitos.forEach(h => h.feito = false);
    };

    $scope.diaFocoAtivo = function () {
        return $scope.diaFocado !== null;
    };

    $scope.confirmarRegistro = function (dia) {
        if (!$scope.form.emocao) {
            alert("Quem está no controle? Selecione uma emoção.");
            return;
        }

        dia.registro = new MemoriaDiaria(
            $scope.form.emocao,
            $scope.form.texto,
            $scope.listaHabitos
        );

        StorageService.salvar($scope.diasCalendario);

        $scope.listaHabitos.forEach(h => h.feito = false);
        $scope.form = { emocao: null, texto: "" };
    };

    $scope.deletarMemoria = function (dia) {
        if (confirm("Deseja apagar esta memória?")) {
            dia.registro = null;
            $scope.diaFocado = null;
            StorageService.salvar($scope.diasCalendario);
        }
    };

    $scope.diasComRegistro = function () {
        return $scope.diasCalendario.filter(d => !d.vazio && d.registro);
    };

    $scope.registrosFiltrados = function () {
        return $scope.diasComRegistro().filter(dia => {

            const filtroPorEmocao = !$scope.filtros.emocaoId ||
                dia.registro.emocao.id === parseInt($scope.filtros.emocaoId);

            const filtroPorDia = !$scope.filtros.dia ||
                dia.numero === parseInt($scope.filtros.dia);

            return filtroPorEmocao && filtroPorDia;
        });
    };

    $scope.limparFiltros = function () {
        $scope.filtros.emocaoId = '';
        $scope.filtros.dia = '';
    };

    $scope.formatarData = function (numero) {
        return `${String(numero).padStart(2, '0')}/04/2026`;
    };

    $scope.progresso = {};

    $scope.calcularProgresso = function () {
        const dias = $scope.diasComRegistro();
        const total = dias.length;

        if (total === 0) {
            $scope.progresso = { total: 0 };
            return;
        }

        const contagem = {};
        dias.forEach(d => {
            const nome = d.registro.emocao.nome;
            contagem[nome] = (contagem[nome] || 0) + 1;
        });
        const emocaoMaisFreq = Object.entries(contagem)
            .sort((a, b) => b[1] - a[1])[0];

        let totalHabitos = 0;
        let habitosFeitos = 0;
        dias.forEach(d => {
            d.registro.habitos.forEach(h => {
                totalHabitos++;
                if (h.feito) habitosFeitos++;
            });
        });
        const pctHabitos = totalHabitos > 0
            ? Math.round((habitosFeitos / totalHabitos) * 100)
            : 0;

        const statsHabitos = $scope.listaHabitos.map(hab => {
            const feitos = dias.filter(d =>
                d.registro.habitos.some(h => h.nome === hab.nome && h.feito)
            ).length;
            return {
                nome: hab.nome,
                pct: Math.round((feitos / total) * 100)
            };
        });

        const distribuicao = $scope.elencoCompleto
            .map(emo => ({
                ...emo,
                quantidade: contagem[emo.nome] || 0,
                pct: Math.round(((contagem[emo.nome] || 0) / total) * 100)
            }))
            .filter(e => e.quantidade > 0)
            .sort((a, b) => b.quantidade - a.quantidade);

        $scope.progresso = {
            total,
            emocaoMaisFreq: emocaoMaisFreq[0],
            emocaoFreqCor: $scope.elencoCompleto.find(e => e.nome === emocaoMaisFreq[0])?.cor,
            pctHabitos,
            statsHabitos,
            distribuicao
        };
    };

    $scope.$watch('abaAtiva', function (novaAba) {
        if (novaAba === 'progresso') {
            $scope.calcularProgresso();
        }
    });

    $scope.gerarCalendario();
});
