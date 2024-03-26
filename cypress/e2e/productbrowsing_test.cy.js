import { LoginPage } from "../Pages/loginpage.cy"
import { Testdata} from "../TestData/Testdata.cy"
import { ProductBrowsing } from "../Pages/productbrowsingpage.cy"

let loginpagevar = new LoginPage()
let Testdatavar = new Testdata()
let productbrowsingvar = new ProductBrowsing()

it('Product Browsing against different categories', function(){
    loginpagevar.navigate(Testdatavar.url)
    loginpagevar.clickloginsignupbutton()
    loginpagevar.enteremail(Testdatavar.email)
    loginpagevar.enterpassowrd(Testdatavar.password)
    loginpagevar.clicklogin()
    productbrowsingvar.clickproducttab()
    productbrowsingvar.clickwomenplusicon()
    productbrowsingvar.clickwomendress()
    productbrowsingvar.clickwomendressviewproduct()
    productbrowsingvar.clickwomenplusicon()
    productbrowsingvar.clickwomentops()
    productbrowsingvar.clickwomenplusicon()
    productbrowsingvar.clickwomensaree()
    productbrowsingvar.clickmenplusicon()
    productbrowsingvar.clickmentshirts()
    productbrowsingvar.clickmenshirtsviewproduct()
    productbrowsingvar.clickmenplusicon()
    productbrowsingvar.clickmenjeans()
    productbrowsingvar.clickkidsplusicon()
    productbrowsingvar.kidstopsandshirts()
    productbrowsingvar.clickkidstopsandshitsviewproduct()
})