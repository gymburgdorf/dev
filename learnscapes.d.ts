interface IBox {
    w: number;
    h: number;
    x: number;
    y: number;
    rot?: number;
}
export declare class Learnscape {
    private element;
    private img;
    constructor(element: HTMLElement, img: string);
    addImage(url: string, box: IBox): void;
    addElement(element: HTMLElement): void;
    addBox(box: IBox): HTMLElement;
    addInput(box: IBox, placeholder?: string): HTMLElement;
    addNumberUnitBox(box: IBox, val: number, unit: string): HTMLElement;
    addVectorBox(box: IBox, name: string): void;
    numberBoxToInput(databox: HTMLElement): void;
}
export {};
