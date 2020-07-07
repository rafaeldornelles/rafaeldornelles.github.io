const produtoController =  new ProdutoController();

var body = document.querySelector("body");
body.onload = function () {
    //produtoController.carregarFormulario();
    produtoController.inicializa();
}


