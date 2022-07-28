const { iframes } = require("../../support/PageObject/iframes")

describe('Interagindo com frames', () => {
  it('Escrevendo e validando texto em um iframe', () => {
    const value = "Escrevendo em um iframe"
  
    iframes.visit()
    iframes.clickButtonTab('Single Iframe')
    iframes.fillInputTextSingleIframe(value).should("contain.value", value)

  })

  it('Escrevendo e validando texto em um iframe dentro de outro iframe', () => {
    const value = "Escrevendo em um iframe dentro de outro iframe"

    iframes.visit()
    iframes.clickButtonTab('Iframe with in an Iframe')
    iframes.fillInputTextMultipleIframe(value).should("contain.value", value)

  })
})