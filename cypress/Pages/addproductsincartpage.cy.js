export class AddProductsInCart
{
    
    women_slevelessdress_addtocart_locator = (':nth-child(5) > .btn')
    continue_shopping_locator = ('.modal-footer > .btn')
    productstab_locator = ('.shop-menu > .nav > :nth-child(2) > a')
    women_plusicon_locator = (':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa')
    women_dress_locator = ('#Women > .panel-body > ul > :nth-child(1) > a')
    women_dress_viewproduct_locator = (':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
    men_plusicon_locator = (':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa')
    men_tshirts_locator = ('#Men > .panel-body > ul > :nth-child(1) > a')
    men_tshirt_viewproduct_locator = (':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
    men_tshirt_addtocart_locator = (':nth-child(5) > .btn')
    cart_locator = ('.shop-menu > .nav > :nth-child(3) > a')

    clickaddtocart()
    {
        cy.get(this.women_dress_viewproduct_locator).click()
        cy.wait(1000)
        cy.get(this.women_slevelessdress_addtocart_locator).click()
        cy.wait(1000)
        cy.get(this.continue_shopping_locator).click()
        cy.wait(1000)
    }
    clickanotheraddtocart()
    {
        cy.get(this.men_tshirt_viewproduct_locator).click()
        cy.wait(1000)
        cy.get(this.men_tshirt_addtocart_locator).click()
        cy.wait(1000)

    }
    clickcontinueshoppingbutton()
    {
        cy.get(this.continue_shopping_locator).click()
        cy.get(1000)
    }
    viewcart()
    {
        cy.get(this.cart_locator).click()
    }

}