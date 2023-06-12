export declare class DevComponent extends HTMLElement {
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    render(): void;
}
