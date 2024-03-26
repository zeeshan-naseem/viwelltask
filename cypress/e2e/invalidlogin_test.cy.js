import { LoginPage } from "../Pages/loginpage.cy"
import { Testdata} from "../TestData/Testdata.cy"

let loginpagevar = new LoginPage()
let Testdatavar = new Testdata()

it('Login Test Case with invalid creds/user authentication', function(){
    loginpagevar.navigate(Testdatavar.url)
    loginpagevar.clickloginsignupbutton()
    loginpagevar.enteremail(Testdatavar.invalidemail)
    loginpagevar.enterpassowrd(Testdatavar.invalidpassword)
    loginpagevar.clicklogin()
    cy.contains('Your email or password is incorrect!').should('be.visible');
})