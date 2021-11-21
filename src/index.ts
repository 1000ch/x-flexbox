import FlexContainer from './flex-container.js';
import FlexItem from './flex-item.js';

export { FlexContainer, FlexItem };

declare global {
  interface HTMLElementTagNameMap {
    'flex-container': FlexContainer;
    'flex-item': FlexItem;
  }
}
