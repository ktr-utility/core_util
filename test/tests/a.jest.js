

function helloWorld() {
  return 'Hello World';
}

describe('Test', () => {
    it('AAAAAAAA', () => {
      expect(helloWorld()).toBe('Hello World');
    })

    it('BBBBBBBB', () => {
      expect("Goodbye, cruel world").toBe('Goodbye, cruel world');
    })

})