import FlexItem from '../src/flex-item';

describe('FlexItem', (): void => {
  beforeAll(() => {
    customElements.define('flex-item', FlexItem);
  });

  test('should be defined', (): void => {
    expect(FlexItem).toBeDefined();
    expect(customElements.get('flex-item')).toBe(FlexItem);

    const item = new FlexItem();
    expect(item).toBeInstanceOf(HTMLElement);
  });
})
