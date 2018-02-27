import { Component, Element, Prop/*, Watch, Event, EventEmitter*/ } from '@stencil/core';

@Component({
  tag: 'st-ios-toggle',
  styleUrl: 'st-ios-toggle.css'
})
export class StIosToggle {

  @Element() el: HTMLElement;

  @Prop() name: string;
  @Prop() value: string = '';
  @Prop() theme: string = 'ios';
  @Prop() checked: boolean = false;

  constructor () {
  }


  render() {
    return (
      <div class="st-ios-toggle_container">
        <input class={`sit sit-${this.theme}`} name={this.name} id={this.name} type="checkbox" value={this.value} checked={this.checked} />
        <label class="sit-btn" htmlFor={this.name}></label>
      </div>
    )
  }
}
