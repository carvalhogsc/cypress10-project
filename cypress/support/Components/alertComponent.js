class AlertComponent {
    verifyTextAlert(expectText) {
        cy.on('window:alert', (text) => {
            expect(text).to.eq(expectText)
        })
    }

    fillInputTextPrompt(value, status) {
        cy.window().then(function(p) {
            status.match(/[O|o][K|k]/) ? cy.stub(p, "prompt").returns(value) : cy.stub(p, "prompt").returns(null)
        })
    }

    waitClickButtonConfirm() {
        return cy.on('window:confirm', (confirm) => true)
    }

    waitClickButtonCancel() {
        return cy.on("window:confirm", (confirm) => false)
    }
}

export const alertComponent = new AlertComponent();