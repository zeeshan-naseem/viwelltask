import { LoginPage } from "../Pages/loginpage.cy"
import { Testdata} from "../TestData/Testdata.cy"
import { ProductBrowsing } from "../Pages/productbrowsingpage.cy"
import { AddProductsInCart } from "../Pages/addproductsincartpage.cy"
import { DeleteProductFromCart } from "../Pages/deleteproductfromcartpage.cy"

let loginpagevar = new LoginPage()
let Testdatavar = new Testdata()
let productbrowsingvar = new ProductBrowsing()
let addproductincarvar = new AddProductsInCart()
let deleteproductvar = new DeleteProductFromCart()

it('Delete product from cart', function(){
    loginpagevar.navigate(Testdatavar.url)
    loginpagevar.clickloginsignupbutton()
    loginpagevar.enteremail(Testdatavar.email)
    loginpagevar.enterpassowrd(Testdatavar.password)
    loginpagevar.clicklogin()
    productbrowsingvar.clickproducttab()
    productbrowsingvar.clickwomenplusicon()
    productbrowsingvar.clickwomendress()
    addproductincarvar.clickaddtocart()
    addproductincarvar.viewcart()
    deleteproductvar.DeleteProduct()
    
})