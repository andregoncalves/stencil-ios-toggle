/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  StIosToggle as StIosToggle
} from './components/st-ios-toggle/st-ios-toggle';

declare global {
  interface HTMLStIosToggleElement extends StIosToggle, HTMLStencilElement {
  }
  var HTMLStIosToggleElement: {
    prototype: HTMLStIosToggleElement;
    new (): HTMLStIosToggleElement;
  };
  interface HTMLElementTagNameMap {
    "st-ios-toggle": HTMLStIosToggleElement;
  }
  interface ElementTagNameMap {
    "st-ios-toggle": HTMLStIosToggleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "st-ios-toggle": JSXElements.StIosToggleAttributes;
    }
  }
  namespace JSXElements {
    export interface StIosToggleAttributes extends HTMLAttributes {
      checked?: boolean;
      name?: string;
      theme?: string;
      value?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
