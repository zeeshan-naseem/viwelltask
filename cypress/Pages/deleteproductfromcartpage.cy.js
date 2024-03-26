export class DeleteProductFromCart
{
    
    
        women_slevelessdress_addtocart_locator = (':nth-child(5) > .btn')
        continue_shopping_locator = ('.modal-footer > .btn')
        productstab_locator = ('.shop-menu > .nav > :nth-child(2) > a')
        women_plusicon_locator = (':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa')
        women_dress_locator = ('#Women > .panel-body > ul > :nth-child(1) > a')
        women_dress_viewproduct_locator = (':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
        cart_locator = ('.shop-menu > .nav > :nth-child(3) > a')
        deleteproduct_locator = ('#product-3 > .cart_delete > .cart_quantity_delete > .fa')
    
        clickaddtocart()
        {
            cy.get(this.women_dress_viewproduct_locator).click()
            cy.wait(1000)
            cy.get(this.women_slevelessdress_addtocart_locator).click()
            cy.wait(1000)
            cy.get(this.continue_shopping_locator).click()
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
        DeleteProduct()
        {
            cy.get(this.deleteproduct_locator).click()
        }
    
    
}