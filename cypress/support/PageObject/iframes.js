const iframeSingle = `iframe[src="SingleFrame.html"]`
const iframeMultiple = `iframe[src="MultipleFrames.html"]`
const bodyFrame = `0.contentDocument.body`
const inputText = `input[type="text"]`
const buttonTab = `a[data-toggle="tab"]`


class Iframes {
    visit() {
        cy.visit('/Frames.html');
    }

    getIframeSingle() {
        return cy.get(iframeSingle)
            .its(bodyFrame).then(cy.wrap)
    }

    getIframeMultiple() {
        return cy.get(iframeMultiple).its(bodyFrame).then(cy.wrap)
    }

    fillInputTextSingleIframe(value) {
        return this.getIframeSingle().find(inputText).clear().type(value)
    }

    fillInputTextMultipleIframe(value) {
        this.getIframeMultiple().within(() => {
            this.getIframeSingle().find(inputText).clear().type(value).then(cy.wrap).as('inputText')
        })

        return cy.get('@inputText')
    }

    clickButtonTab(text) {
        return cy.get(buttonTab).contains(text).click()
    }
}

export const iframes = new Iframes();