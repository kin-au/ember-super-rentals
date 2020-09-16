import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

// generated with ember g component-class rental/image
// automatically contains a js class inheriting from glimmer/component
// a new instance of the class is created whenever component is invoked
// glimmer is one of a few components available to use
// e.g. ember/components, and classic components, they are older, will have different docs, different/incompatible APIs
// glimmer should be used wherever possible

export default class RentalImageComponent extends Component {
  // initialise the instance varible isLarge
  // the @tracked tells ember to monitor the variable for updates, and re-render any relevant templates
  // will have access to the component's instance variables in the hbs template
  @tracked isLarge = false;

  // the toggleSize method switches the current state
  // the @action tells ember we want to use this method from the template
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
