// o co cho z return - Aby zwrócić wartość z funkcji, musimy użyć słowa return i dzięki temu zostanie ona zwrócona z wywołania tej funkcji
// potrzebna zmienna dla iframe
// wrap this element so we can use cypress commands on it


const iFrame = 'iframe'
const button1 = '#simpleButton1'
const przycisk2 = '#simpleButton2'
const messageAfterClickButton = '#whichButtonIsClickedMessage'

const getIFrameContent = () => {
    return cy.get(iFrame)
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);
  };

class IFramePage{

    testButton1(){
        getIFrameContent().find(button1).click()
        getIFrameContent().find(messageAfterClickButton).should('have.text', 'Button 1 was clicked!')
    }
    testButton2(){
        getIFrameContent().find(przycisk2).click()
        getIFrameContent().find(messageAfterClickButton).should('have.text', 'Button 2 was clicked!')
    }

    
}
export default IFramePage;