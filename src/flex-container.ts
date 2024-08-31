const flexDirectionValues = [
  'row',
  'row-reverse',
  'column',
  'column-reverse'
];

const flexWrapValues = [
  'nowrap',
  'wrap',
  'wrap-reverse'
];

const justifyContentValues = [
  'flex-start',
  'flex-end',
  'start',
  'end',
  'left',
  'right',
  'center',
  'space-between',
  'space-around',
  'space-evenly'
];

const alignItemsValues = [
  'stretch',
  'flex-start',
  'start',
  'self-start',
  'flex-end',
  'end',
  'self-end',
  'center',
  'baseline'
];

const alignContentValues = [
  'flex-start',
  'start',
  'flex-end',
  'end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch'
];

const templateHTML = `
  <style>
    :host { display: flex; }
    :host([inline]) { display: inline-flex; }

    :host([flex-direction="row"]) { flex-direction: row; }
    :host([flex-direction="row-reverse"]) { flex-direction: row-reverse; }
    :host([flex-direction="column"]) { flex-direction: column; }
    :host([flex-direction="column-reverse"]) { flex-direction: column-reverse; }

    :host([flex-wrap="nowrap"]) { flex-wrap: nowrap; }
    :host([flex-wrap="wrap"]) { flex-wrap: wrap; }
    :host([flex-wrap="wrap-reverse"]) { flex-wrap: wrap-reverse; }

    :host([justify-content="flex-start"]) { justify-content: flex-start; }
    :host([justify-content="flex-end"]) { justify-content: flex-end; }
    :host([justify-content="start"]) { justify-content: start; }
    :host([justify-content="end"]) { justify-content: end; }
    :host([justify-content="left"]) { justify-content: left; }
    :host([justify-content="right"]) { justify-content: right; }
    :host([justify-content="center"]) { justify-content: center; }
    :host([justify-content="space-between"]) { justify-content: space-between; }
    :host([justify-content="space-around"]) { justify-content: space-around; }
    :host([justify-content="space-evenly"]) { justify-content: space-evenly; }

    :host([align-items="stretch"]) { align-items: stretch; }
    :host([align-items="flex-start"]) { align-items: flex-start; }
    :host([align-items="start"]) { align-items: start; }
    :host([align-items="self-start"]) { align-items: self-start; }
    :host([align-items="flex-end"]) { align-items: flex-end; }
    :host([align-items="end"]) { align-items: end; }
    :host([align-items="self-end"]) { align-items: self-end; }
    :host([align-items="center"]) { align-items: center; }
    :host([align-items="baseline"]) { align-items: baseline; }

    :host([align-content="flex-start"]) { align-content: flex-start; }
    :host([align-content="start"]) { align-content: start; }
    :host([align-content="flex-end"]) { align-content: flex-end; }
    :host([align-content="end"]) { align-content: end; }
    :host([align-content="center"]) { align-content: center; }
    :host([align-content="space-between"]) { align-content: space-between; }
    :host([align-content="space-around"]) { align-content: space-around; }
    :host([align-content="space-evenly"]) { align-content: space-evenly; }
    :host([align-content="stretch"]) { align-content: stretch; }

    :host([gap]) { gap: attr(gap); }
    :host([row-gap]) { row-gap: attr(row-gap); }
    :host([column-gap]) { column-gap: attr(column-gap); }
  </style>
  <slot />
`;

export default class FlexContainer extends HTMLElement {
  /**
   * Gets the flexDirection of the object.
   */
  get flexDirection(): string | undefined {
    if (this.hasAttribute('flex-direction')) {
      return this.getAttribute('flex-direction') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the flexDirection of the object.
   */
  set flexDirection(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('flex-direction');
    } else if (flexDirectionValues.includes(value)) {
      this.setAttribute('flex-direction', value);
    }
  }

  /**
   * Gets the flexWrap of the object.
   */
  get flexWrap(): string | undefined {
    if (this.hasAttribute('flex-wrap')) {
      return this.getAttribute('flex-wrap') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the flexWrap of the object.
   */
  set flexWrap(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('flex-wrap');
    } else if (flexWrapValues.includes(value)) {
      this.setAttribute('flex-wrap', value);
    }
  }

  /**
   * Gets the justifyContent of the object.
   */
  get justifyContent(): string | undefined {
    if (this.hasAttribute('justify-content')) {
      return this.getAttribute('justify-content') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the justifyContent of the object.
   */
  set justifyContent(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('justify-content');
    } else if (justifyContentValues.includes(value)) {
      this.setAttribute('justify-content', value);
    }
  }

  /**
   * Gets the alignItems of the object.
   */
  get alignItems(): string | undefined {
    if (this.hasAttribute('align-items')) {
      return this.getAttribute('align-items') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the alignItems of the object.
   */
  set alignItems(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('align-items');
    } else if (alignItemsValues.includes(value)) {
      this.setAttribute('align-items', value);
    }
  }

  /**
   * Gets the alignContent of the object.
   */
  get alignContent(): string | undefined {
    if (this.hasAttribute('align-content')) {
      return this.getAttribute('align-content') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the alignContent of the object.
   */
  set alignContent(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('align-content');
    } else if (alignContentValues.includes(value)) {
      this.setAttribute('align-content', value);
    }
  }

  /**
   * Gets the gap of the object.
   */
  get gap(): string | undefined {
    if (this.hasAttribute('gap')) {
      return this.getAttribute('gap') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the gap of the object.
   */
  set gap(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('gap');
    } else {
      this.setAttribute('gap', value);
    }
  }

  /**
   * Gets the rowGap of the object.
   */
  get rowGap(): string | undefined {
    if (this.hasAttribute('row-gap')) {
      return this.getAttribute('row-gap') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the rowGap of the object.
   */
  set rowGap(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('row-gap');
    } else {
      this.setAttribute('row-gap', value);
    }
  }

  /**
   * Gets the columnGap of the object.
   */
  get columnGap(): string | undefined {
    if (this.hasAttribute('column-gap')) {
      return this.getAttribute('column-gap') || undefined;
    }

    return undefined;
  }

  /**
   * Sets the columnGap of the object.
   */
  set columnGap(value: string | undefined) {
    if (value == null) {
      this.removeAttribute('column-gap');
    } else {
      this.setAttribute('column-gap', value);
    }
  }

  constructor() {
    super();

    this.attachShadow({
      mode: 'closed'
    }).innerHTML = templateHTML;
  }
}
