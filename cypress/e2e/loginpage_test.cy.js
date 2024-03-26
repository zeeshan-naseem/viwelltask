
import { LoginPage } from "../Pages/loginpage.cy"
import { Testdata} from "../TestData/Testdata.cy"

let loginpagevar = new LoginPage()
let Testdatavar = new Testdata()

it('Login Test Case with valid creds/user authentication', function(){
    loginpagevar.navigate(Testdatavar.url)
    loginpagevar.clickloginsignupbutton()
    loginpagevar.enteremail(Testdatavar.email)
    loginpagevar.enterpassowrd(Testdatavar.password)
    loginpagevar.clicklogin()
    cy.contains('Logged in as').should('be.visible');
  })