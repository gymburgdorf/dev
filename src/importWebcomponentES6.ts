//@ts-ignore
import {DevComponent} from "https://gymburgdorf.github.io/dev/DevComponent.js"
import {WebcompTests} from "./WebcompTests.js"

const wt = new WebcompTests()
const devy = new DevComponent()

document?.querySelector(".app")?.insertAdjacentHTML("beforeend", `<dev-component>123</dev-component>`)
document?.querySelector(".app")?.insertAdjacentHTML("beforeend", `<webcomp-tests><my-path slot="testslot" points="[[70,70], [70,20], [20,20]]"></my-path></webcomp-tests>`)