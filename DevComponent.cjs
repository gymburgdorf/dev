"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){console.log("connected"),this.render()}disconnectedCallback(){}adoptedCallback(){}static get observedAttributes(){return["attribute1","attribute2"]}attributeChangedCallback(t,o,n){console.log(t,o,n)}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`
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
	  `)}}console.log("define");customElements.define("dev-component",e);exports.DevComponent=e;
