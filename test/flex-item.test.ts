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

  test('should apply align-self attribute', (): void => {
    const item = new FlexItem();
    item.alignSelf = 'auto';
    expect(item.getAttribute('align-self')).toBe('auto');
  });

  test('should apply order attribute', (): void => {
    const item = new FlexItem();
    item.order = '1';
    expect(item.getAttribute('order')).toBe('1');
  });

  test('should apply flex-grow attribute', (): void => {
    const item = new FlexItem();
    item.flexGrow = '2';
    expect(item.getAttribute('flex-grow')).toBe('2');
  });

  test('should apply flex-shrink attribute', (): void => {
    const item = new FlexItem();
    item.flexShrink = '3';
    expect(item.getAttribute('flex-shrink')).toBe('3');
  });

  test('should apply flex-basis attribute', (): void => {
    const item = new FlexItem();
    item.flexBasis = '4';
    expect(item.getAttribute('flex-basis')).toBe('4');
  });
})
