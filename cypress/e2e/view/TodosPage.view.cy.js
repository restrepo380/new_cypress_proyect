import "cypress-xpath"

export class TodosPage{
    static get view(){
        return{
            get inputText(){
                return cy.xpath('//input[@id="todo-input"]')
            },
            get checkDoneAll(){
                return cy.xpath('//input[@class="toggle-all"]')
            },
            get checkDone(){
                return cy.xpath('//input[@class="toggle"]')
            },
            get buttonAll(){
                return cy.xpath('//a[contains(text(),"All")]')
            },
            get buttonActive(){
                return cy.xpath('//a[contains(text(),"Active")]')
            },
            get buttonCompleted(){
                return cy.xpath('//a[contains(text(),"Completed")]')
            },
            get buttonClearCompleted(){
                return cy.xpath('//button[@class="clear-completed"]')
            },
        }


    }
}