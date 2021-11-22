import FlexContainer from '../src/flex-container';

describe('FlexContainer', (): void => {
  beforeAll(() => {
    customElements.define('flex-container', FlexContainer);
  });

  test('should be defined', (): void => {
    expect(FlexContainer).toBeDefined();
    expect(customElements.get('flex-container')).toBe(FlexContainer);

    const container = new FlexContainer();
    expect(container).toBeInstanceOf(HTMLElement);
  });
})
