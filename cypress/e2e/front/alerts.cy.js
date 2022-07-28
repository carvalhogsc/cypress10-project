/// <reference types="cypress" />

const { alerts } = require("../../support/PageObject/alerts")

describe('Interagindo com frames', () => {
  it('Clicando em um alert', () => {
    const expectText = "I am an alert box!"

    alerts.visit()
    alerts.clickButtonTab("Alert with OK")
    alerts.clickAlertWithOK(expectText)
  })

  it('Clicando em um alert e confirmando', () => {
    const expectText = "You pressed Ok"

    alerts.visit()
    alerts.clickButtonTab("Alert with OK & Cancel")
    alerts.clickAlertWithOKAndCancel("oK")
    alerts.getTextAlertWithOKAndCancel().should("contain.text", expectText)
  })

  it('Clicando em um alert e cancelando', () => {
    const expectText = "You Pressed Cancel"

    alerts.visit()
    alerts.clickButtonTab("Alert with OK & Cancel")
    alerts.clickAlertWithOKAndCancel("Cancel")
    alerts.getTextAlertWithOKAndCancel().should("contain.text", expectText)
  })

  it('Preenchendo um prompt Alert', () => {
    const textInput = "Cypress"
    const expectText = `Hello ${textInput} How are you today`

    alerts.visit()
    alerts.clickButtonTab("Alert with Textbox")
    alerts.clickAlertWithTextbox(textInput, 'ok')
    
    alerts.getTextAlertWithTextbox().should("have.text", expectText)
  })

  it('Não Preenchendo um prompt Alert', () => {
    const textInput = "Cancel"
    const expectText = ""

    alerts.visit()
    alerts.clickButtonTab("Alert with Textbox")
    alerts.clickAlertWithTextbox(textInput, 'cancel')
    
    alerts.getTextAlertWithTextbox().should("have.text", expectText)
  })


})