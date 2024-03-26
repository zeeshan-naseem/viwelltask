import { LoginPage } from "../Pages/loginpage.cy"
import { Testdata} from "../TestData/Testdata.cy"
import { ProductBrowsing } from "../Pages/productbrowsingpage.cy"
import { AddProductsInCart } from "../Pages/addproductsincartpage.cy"

let loginpagevar = new LoginPage()
let Testdatavar = new Testdata()
let productbrowsingvar = new ProductBrowsing()
let addproductincarvar = new AddProductsInCart()

it('Add product in cart', function(){
    loginpagevar.navigate(Testdatavar.url)
    loginpagevar.clickloginsignupbutton()
    loginpagevar.enteremail(Testdatavar.email)
    loginpagevar.enterpassowrd(Testdatavar.password)
    loginpagevar.clicklogin()
    productbrowsingvar.clickproducttab()
    productbrowsingvar.clickwomenplusicon()
    productbrowsingvar.clickwomendress()
    addproductincarvar.clickaddtocart()

    productbrowsingvar.clickmenplusicon()
    productbrowsingvar.clickmentshirts()
    addproductincarvar.clickanotheraddtocart()

    cy.contains('Your product has been added to cart.').should('be.visible');
    addproductincarvar.clickcontinueshoppingbutton()
    addproductincarvar.viewcart()
    
})