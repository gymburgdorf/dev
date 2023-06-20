export class WebcompTests extends HTMLElement {
	constructor() {
		super();
		//this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	disconnectedCallback() {
		// Called when the element is removed from the DOM
	}

	adoptedCallback() {
		// Called when the element is moved to a new document
	}
	static get observedAttributes() {
		return ['list', 'nested'];
	}
	attributeChangedCallback(name: any, oldValue: any, newValue: any) {
		// Called when observed attributes are added, removed, or changed
		console.log(name, oldValue, newValue)

	}

	render() {
		//if (!this.shadowRoot) return
		console.log("render W");
		
		this.innerHTML = `
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
		  <svg viewBox="0 0 100 100">
		  	<circle cx="50" cy="50" r="10"></circle>
		  	<slot name="testslot">...</slot>
		  </svg>
		  <div>
			<my-span points="[[0,0]]">
		  </div>
		</div>
	  `;
	}
}

export class MyPath extends HTMLElement {
	constructor() {
		super();
		//this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}
	static get observedAttributes() {
		return ["points"];
	}
	attributeChangedCallback(name: any, oldValue: any, newValue: any) {
		console.log({name, oldValue, newValue});
		
		this.render()
	}

	render() {
		console.log("render P");

		const points = JSON.parse(this.getAttribute("points") || "[[0,0]]")
		const path = `
			M ${points[0][0]} ${points[0][1]}
			L ${points.slice(1).map((p: any)=>`${p[0]} ${p[1]}`).join(", ")}
			z
		`
		//if (!this.shadowRoot) return
		this.innerHTML = `
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
		<path d=${path}></path>
	  `;
	}
}

export class MySpan extends HTMLElement {
	constructor() {
		super();
		//this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		this.render();
	}
	static get observedAttributes() {
		return ["points"];
	}
	attributeChangedCallback(name: any, oldValue: any, newValue: any) {
		console.log({name, oldValue, newValue});
		this.render()
	}

	render() {
		console.log("render P");

		const points = JSON.parse(this.getAttribute("points") || "[[0,0]]")
		const path = `
			M ${points[0][0]} ${points[0][1]}
			L ${points.slice(1).map((p: any)=>`${p[0]} ${p[1]}`).join(", ")}
			z
		`
		//if (!this.shadowRoot) return
		this.innerHTML = `
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
		<span>${points.length}</span>
	  `;
	}
}

console.log("define");

customElements.define('my-path', MyPath);
customElements.define('my-span', MySpan);
customElements.define('webcomp-tests', WebcompTests);