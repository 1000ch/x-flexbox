import { FlexContainer, FlexItem } from 'https://unpkg.com/x-flexbox';
import XMarked from 'https://unpkg.com/x-marked';

customElements.define('flex-container', FlexContainer);
customElements.define('flex-item', FlexItem);
customElements.define('x-marked', XMarked);

const flexContainer = document.querySelector('#flex-container');
const flexDirection = document.querySelector('#flex-direction');
const flexWrap = document.querySelector('#flex-wrap');
const justifyContent = document.querySelector('#justify-content');
const alignItems = document.querySelector('#align-items');
const alignContent = document.querySelector('#align-content');

flexDirection.addEventListener('change', () => {
  flexContainer.flexDirection = flexDirection.value;
});

flexWrap.addEventListener('change', () => {
  flexContainer.flexWrap = flexWrap.value;
});

justifyContent.addEventListener('change', () => {
  flexContainer.justifyContent = justifyContent.value;
});

alignItems.addEventListener('change', () => {
  flexContainer.alignItems = alignItems.value;
});

alignContent.addEventListener('change', () => {
  flexContainer.alignContent = alignContent.value;
});

const template = document.querySelector('#template-flex-item');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');

add.addEventListener('click', () => {
  const cell = document.importNode(template.content, true);
  const order = cell.querySelector('.order');
  const flexGrow = cell.querySelector('.flex-grow');
  const flexShrink = cell.querySelector('.flex-shrink');
  const flexBasis = cell.querySelector('.flex-basis');
  const alignSelf = cell.querySelector('.align-self');

  flexContainer.appendChild(cell);

  order.addEventListener('change', () => {
    order.parentNode.order = order.value;
  });

  flexGrow.addEventListener('change', () => {
    flexGrow.parentNode.flexGrow = flexGrow.value;
  });

  flexShrink.addEventListener('change', () => {
    flexShrink.parentNode.flexShrink = flexShrink.value;
  });

  flexBasis.addEventListener('change', () => {
    flexBasis.parentNode.flexBasis = flexBasis.value;
  });

  alignSelf.addEventListener('change', () => {
    alignSelf.parentNode.alignSelf = alignSelf.value;
  });
});

remove.addEventListener('click', () => {
  if (flexContainer.children.length) {
    flexContainer.children[flexContainer.children.length - 1].remove();
  }
});

add.click();
add.click();
