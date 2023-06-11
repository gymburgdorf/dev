export class DevComponent extends HTMLElement {
	constructor() {
	  super();
	  this.attachShadow({ mode: 'open' });
	}
  
	connectedCallback() {
		console.log("connected");
	  this.render();
	}
  
	render() {
		if(!this.shadowRoot) return
	  this.shadowRoot.innerHTML = `
		<style>
		  /* Add component styles here */
		  :host {
			display: block;
			/* Add styles for the component container */
		  }
  
		  /* Add styles for the component content */
		  .content {
			/* Add styles for the component content */
		  }
		</style>
		<div class="content">
		  <!-- Add component content here -->
		  <h1>Hello, Web Component!</h1>
		</div>
	  `;
	}
}

console.log("define");

customElements.define('dev-component', DevComponent);