export class ProductBrowsing
{
    productstab_locator = ('.shop-menu > .nav > :nth-child(2) > a')
    women_plusicon_locator = (':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa')
    women_dress_locator = ('#Women > .panel-body > ul > :nth-child(1) > a')
    women_tops_locator = ('#Women > .panel-body > ul > :nth-child(2) > a')
    women_saree_locator = ('.panel-body > ul > :nth-child(3) > a')
    men_plusicon_locator = (':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa')
    men_tshirts_locator = ('#Men > .panel-body > ul > :nth-child(1) > a')
    men_jeans_locator = ('#Men > .panel-body > ul > :nth-child(2) > a')
    kids_plusicon_locator = (':nth-child(3) > .panel-heading > .panel-title > a > .badge > .fa')
    kids_topsandshirts_locator = ('#Kids > .panel-body > ul > :nth-child(2) > a')
    women_dress_viewproduct_locator = (':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
    men_tshirts_viewproduct_locator = (':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a')
    kids_topsandshirts_viewproduct_locator = (':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a')

    //I'm browsing for women,men and kids categories and browsing single product against all of these parent categories
    clickproducttab()
    {
        cy.get(this.productstab_locator).click()
        cy.wait(2000)
    }
    clickwomenplusicon()
    {
        cy.get(this.women_plusicon_locator).click()
        cy.wait(2000)
    }
    clickwomendress()
    {
        cy.get(this.women_dress_locator).click()
        cy.wait(2000)
    }
    clickwomendressviewproduct()   //product view in women cateogry, viewed only one product, verifying product details are correct on product page
    {
        cy.get(this.women_dress_viewproduct_locator).click()
        cy.wait(2000)
    }
    clickwomentops()
    {
        cy.get(this.women_tops_locator).click()
        cy.wait(2000)
    }
    clickwomensaree()
    {
        cy.get(this.women_saree_locator).click()
        cy.wait(2000)
    }
    clickmenplusicon()
    {
        cy.get(this.men_plusicon_locator).click()
        cy.wait(2000)
    }
    clickmentshirts()
    {
        cy.get(this.men_tshirts_locator).click()
        cy.wait(2000)
    }
    clickmenshirtsviewproduct() //product view in men cateogry, viewed only one product, verifying product details are correct on product page
    {
        cy.get(this.men_tshirts_viewproduct_locator).click()
        cy.wait(2000)
    }
    clickmenjeans()
    {
        cy.get(this.men_jeans_locator).click()
        cy.wait(2000)
    }
    clickkidsplusicon()
    {
        cy.get(this.kids_plusicon_locator).click()
        cy.wait(2000)
    }
    kidstopsandshirts()
    {
        cy.get(this.kids_topsandshirts_locator).click()
        cy.wait(2000)
    }
    clickkidstopsandshitsviewproduct()
    {
        cy.get(this.kids_topsandshirts_viewproduct_locator).click()
        cy.wait(2000)
    }
}