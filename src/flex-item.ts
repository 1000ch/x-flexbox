const alignSelfValues = [
  'auto',
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'stretch'
];

const templateHTML = `
  <style>
    :host([align-self="auto"]) { align-self: auto; }
    :host([align-self="flex-start"]) { align-self: flex-start; }
    :host([align-self="flex-end"]) { align-self: flex-end; }
    :host([align-self="center"]) { align-self: center; }
    :host([align-self="baseline"]) { align-self: baseline; }
    :host([align-self="stretch"]) { align-self: stretch; }
  </style>
  <slot />
`;

export default class FlexItem extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      'order',
      'flex-grow',
      'flex-shrink',
      'flex-basis'
    ];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    switch (name) {
      case 'order':
        this.style.order = newValue;
        break;
      case 'flex-grow':
        this.style.flexGrow = newValue;
        break;
      case 'flex-shrink':
        this.style.flexShrink = newValue;
        break;
      case 'flex-basis':
        this.style.flexBasis = newValue;
        break;
    }
  }

  /**
   * Gets the order of the object.
   */
  get order(): string | undefined {
    if (this.hasAttribute('order')) {
      return this.getAttribute('order') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the order of the object.
   */
  set order(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('order');
    } else {
      this.setAttribute('order', value);
    }
  }

  /**
   * Gets the flexGrow of the object.
   */
  get flexGrow(): string | undefined {
    if (this.hasAttribute('flex-grow')) {
      return this.getAttribute('flex-grow') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the flexGrow of the object.
   */
  set flexGrow(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('flex-grow');
    } else {
      this.setAttribute('flex-grow', value);
    }
  }

  /**
   * Gets the flexShrink of the object.
   */
  get flexShrink(): string | undefined {
    if (this.hasAttribute('flex-shrink')) {
      return this.getAttribute('flex-shrink') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the flexShrink of the object.
   */
  set flexShrink(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('flex-shrink');
    } else {
      this.setAttribute('flex-shrink', value);
    }
  }

  /**
   * Gets the flexBasis of the object.
   */
  get flexBasis(): string | undefined {
    if (this.hasAttribute('flex-basis')) {
      return this.getAttribute('flex-basis') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the flexBasis of the object.
   */
  set flexBasis(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('flex-basis');
    } else {
      this.setAttribute('flex-basis', value);
    }
  }

  /**
   * Gets the alignSelf of the object.
   */
  get alignSelf(): string | undefined {
    if (this.hasAttribute('align-self')) {
      return this.getAttribute('align-self') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the alignSelf of the object.
   */
  set alignSelf(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('align-self');
    } else if (alignSelfValues.includes(value)) {
      this.setAttribute('align-self', value);
    }
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'closed'
    }).innerHTML = templateHTML;
  }
}
