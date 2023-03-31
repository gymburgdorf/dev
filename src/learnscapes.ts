interface IBox {
    w: number
    h: number
    x: number
    y: number
    rot?: number
}

export class Learnscape {
    constructor(
        private element: HTMLElement,
        private img: string
    ) {
        this.element.style.setProperty("background-image", `url('${img}')`)
        this.element.style.setProperty("position", `relative`)
    }
    addImage(url: string, box: IBox) {
        const img = this.addBox(box)
        img.style.setProperty("background-image", `url('${url}')`)
    }
    addElement(element: HTMLElement) {
        this.element.insertAdjacentElement("beforeend", element)
    }
    addBox(box: IBox) {
        const style = [
            `top: ${box.y - 0.5 * box.h}vmin;`,
            `bottom: ${100 - box.y - 0.5 * box.h}vmin;`,
            `left: ${box.x - 0.5 * box.w}vmin;`,
            `right: ${100 - box.x - 0.5 * box.w}vmin;`,
            ...box.rot ? [`transform: rotate(${box.rot}deg);`] : []].join("")
        const element = htmlToElement(`<div class="box" style="${style}"></div>`)
        this.addElement(element)
        return element
    }
    addInput(box: IBox, placeholder="") {
        const inputbox = this.addBox(box)
        const input = htmlToElement(`<input style="font-size: ${0.6 * box.h}vmin" type="number" required placeholder=${placeholder}>`)
        inputbox.insertAdjacentElement("beforeend", input)
        return input
    }
}

/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html: string) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild as HTMLElement;
}