export class CheckoutProcess
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
    proceedtocheckout_locator = ('.col-sm-6 > .btn')
    placeorder_locator = (':nth-child(7) > .btn')
    nameoncard_locator = ('[data-qa="name-on-card"]')
    cardnumber_locator = ('[data-qa="card-number"]')
    cvc_locator = ('[data-qa="cvc"]')
    monthexpiry_locator = ('[data-qa="expiry-month"]')
    yearexpiry_locator = ('[data-qa="expiry-year"]')
    payandconfirmorder_locator = ('[data-qa="pay-button"]')
    downloadinvoice_locator = ('.col-sm-9 > .btn-default')

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
    proceedtocheckout()
    {
        cy.get(this.proceedtocheckout_locator).click()
        cy.wait(1000)
        cy.get(this.placeorder_locator).click()
        cy.wait(1000)
        cy.get(this.nameoncard_locator).type('zeeshan')
        cy.get(this.cardnumber_locator).type('4242424242424242')
        cy.get(this.cvc_locator).type('123')
        cy.get(this.monthexpiry_locator).type('12')
        cy.get(this.yearexpiry_locator).type('2027')
        cy.get(this.payandconfirmorder_locator).click()
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
        cy.get(this.downloadinvoice_locator).click()


        

    }

}