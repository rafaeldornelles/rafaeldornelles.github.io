const produtoController =  new ProdutoController();

var body = document.querySelector("body");
body.onload = function () {
    // patientController.loadPatients();
    if (localStorage.getItem("token")){
        navbarController.loadNavbar()
        dashboardController.loadDashboard();
        navbarController.makeLinkActive(0)
    } else {
        navbarController.loadWithoutLinks()
        loginController.loginForm();
    }
    // vaccineCardController.loadVaccines();
}


