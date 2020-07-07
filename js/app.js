const produtoController =  new ProdutoController();

var body = document.querySelector("body");
body.onload = function () {
    navbarController.loadNavbar()
    // patientController.loadPatients();
    if (localStorage.getItem("token")){
        dashboardController.loadDashboard();
        navbarController.makeLinkActive(0)
    } else {
        loginController.loginForm();
    }
    // vaccineCardController.loadVaccines();
}


