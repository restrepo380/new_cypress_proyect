import { TodosPage } from "../view/TodosPage.view.cy";

export class interactions{
    static typeInput(text){
        TodosPage.view.inputText.type("text{enter}")
    }
    static clickonDoneAll(){
        TodosPage.view.checkDoneAll.click()
    }
    static clickonDone(){
        TodosPage.view.checkDone.click()
    }
    static clickonbuttonAll(){
        TodosPage.view.buttonAll.click()
    }
    static clickonbuttonActive(){
        TodosPage.view.buttonActive.click()
    }
    static clickonbuttonCompleted(){
        TodosPage.view.buttonCompleted.click()
    }
    static clickonbuttonClearCompleted(){
        TodosPage.view.buttonClearCompleted.click()
    }
}