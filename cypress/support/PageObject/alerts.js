/// <reference types="cypress" />

const { alertComponent } = require('../Components/alertComponent')

const buttonTab = `a[data-toggle="tab"]`
const buttonAlertWithOK = `div[id="OKTab"] button`
const buttonAlertWithOKAndCancel = `div[id="CancelTab"] button`
const buttonAlertWithTextbox = `div[id="Textbox"] button`
const textAlertWithOKAndCancel = `p[id="demo"]`
const textAlertWithTextbox = `p[id="demo1"]`


class Alerts {
    visit() {
        cy.visit('/Alerts.html');
    }

    clickButtonTab(text) {
        return cy.get(buttonTab).contains(text).click()
    }

    clickAlertWithOK(text) {
        cy.get(buttonAlertWithOK).click()
        return alertComponent.verifyTextAlert(text)
    }

    clickAlertWithOKAndCancel(button) {
        cy.get(buttonAlertWithOKAndCancel).click()
        return button.match(/[O|o][K|k]/) ? alertComponent.waitClickButtonConfirm() : alertComponent.waitClickButtonCancel()
    }

    clickAlertWithTextbox(text, button) {
        alertComponent.fillInputTextPrompt(text, button)
        cy.get(buttonAlertWithTextbox).click()
    }

    getTextAlertWithOKAndCancel() {
        return cy.get(textAlertWithOKAndCancel)
    }

    getTextAlertWithTextbox() {
        return cy.get(textAlertWithTextbox)
    }
}

export const alerts = new Alerts();