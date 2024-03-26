import { LoginPage } from "../Pages/loginpage.cy"
import { Testdata} from "../TestData/Testdata.cy"

let loginpagevar = new LoginPage()
let Testdatavar = new Testdata() 

describe('Product Details', () => {
    it('Should display correct product details', () => {
        cy.fixture('products.json').then(products => {
            // Accessing two products BlueTop and Men Tshirt with their respsctive pricesSSSSSS
            const product1 = products.product1;
            const product2 = products.product2;

            loginpagevar.navigate(Testdatavar.url)
            loginpagevar.clickloginsignupbutton()
            loginpagevar.enteremail(Testdatavar.email)
            loginpagevar.enterpassowrd(Testdatavar.password)
            loginpagevar.clicklogin()
            
            
            cy.contains(product1.name).should('exist');
            cy.contains(product1.price).should('exist');

            cy.contains(product2.name).should('exist');
            cy.contains(product2.price).should('exist');
        });
    });
});