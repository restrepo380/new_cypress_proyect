import Data from "../model/data.json"
import { describe } from "mocha"
import { interactions } from "./interactions.cy"
import { NavegateTo } from "../constant/NavegateTo.cy"

describe("open page", ()=>{
    beforeEach(function(){
        NavegateTo.navegateTo(Data.url)
    })
    it("test page", function(){
        interactions.typeInput(Data.text1)
        interactions.typeInput(Data.text2)
        interactions.typeInput(Data.text3)
        interactions.clickonDone()
        interactions.clickonbuttonActive()
        interactions.clickonbuttonAll()
        interactions.clickonbuttonCompleted()
        interactions.clickonbuttonClearCompleted()
    })
})