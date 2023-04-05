import {Learnscape} from "./learnscapes"

const ls = new Learnscape(
    document.querySelector(".learnscape")!,
    "img/lake.png"
)

let {vx1, vx2, vy1, vy2, t1, t2, ax, ay, dx, dy} = getNumbers()
while(dx**2 + dy**2 < 35**2 || dx**2 + dy**2 > 60**2) {
    ({vx1, vx2, vy1, vy2, t1, t2, ax, ay, dx, dy} = getNumbers())
}
const x1 = 50 - 0.5 * dx
const y1 = 50 + 0.5 * dy
const x2 = 50 + 0.5 * dx
const y2 = 50 - 0.5 * dy
ls.addImage("img/boat.png", {x: x1, y: y1, w: 10, h: 10, rot: dir(-vx1, vy1) - 90})
ls.addImage("img/boat.png", {x: x2, y: y2, w: 10, h: 10, rot: dir(-vx2, vy2) - 90})
ls.addVectorBox({x: x1 - (dx >= 0 ? 13 : -12.5), y: y1, w: 16, h: 10}, "<span>v<sub>1</sub></span>")
ls.addVectorBox({x: x2 + (dx >= 0 ? 13.5 : -13.5), y: y2, w: 16, h: 10}, "<span>v<sub>2</sub></span>")
ls.addVectorBox({x: 48, y: 46, w: 16, h: 10}, "a")
ls.addVectorBox({x: 48, y: 54, w: 16, h: 5}, "Δt")
let v1xBox = ls.addNumberUnitBox({x: x1 - (dx >= 0 ? 10 : -14), y: y1 - 2, w: 10, h: 5}, vx1, "m/s")
ls.addNumberUnitBox({x: x1 - (dx >= 0 ? 10 : -14), y: y1 + 2, w: 10, h: 5}, vy1, "m/s")
//ls.addNumberUnitBox({x: x1 - (dx >= 0 ? 10 : -14), y: y1 + 9, w: 10, h: 5}, t1, "s")
ls.addNumberUnitBox({x: x2 + (dx >= 0 ? 16 : -11), y: y2 - 2 , w: 10, h: 5}, vx2, "m/s")
ls.addNumberUnitBox({x: x2 + (dx >= 0 ? 16 : -11), y: y2 + 2, w: 10, h: 5}, vy2, "m/s")
//ls.addNumberUnitBox({x: x2 + (dx >= 0 ? 15 : -11), y: y2 + 9, w: 10, h: 5}, t2, "s")
ls.addNumberUnitBox({x: 50, y: 44, w: 10, h: 5}, ax, "m/s²")
let ayBox = ls.addNumberUnitBox({x: 50, y: 48, w: 10, h: 5}, ay, "m/s²")
ls.addNumberUnitBox({x: 51 , y: 54, w: 8, h: 5}, t2 - t1, "s")

ls.numberBoxToInput(v1xBox)
ls.numberBoxToInput(ayBox)


function getNumbers() {
    const dt = choose([1.5, 2, 2, 2.5, 3, 3, 4, 4, 5, 5, 6, 8, 10])
    const t1 = Math.floor(Math.random() * 8)
    const t2 = t1 + dt
    const a = () => dt % 1 === 0.5 ? choose([-6, -4, -2, 0, 2, 4, 6]) : choose([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
    const ax = a()
    const ay = a()
    const vx1 = choose([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
    const vy2 = choose([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
    const vx2 = vx1 + ax * dt
    const vy1 = vy2 - ay * dt
    const dx = vx1 * dt + 0.5*ax*dt**2
    const dy = vy1 * dt + 0.5*ay*dt**2
    return {vx1, vx2, vy1, vy2, t1, t2, ax, ay, dx, dy}
}

function choose<T>(choices: T[]): T {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function dir(x: number, y: number) {
  return Math.atan2(y, x) * 180 / Math.PI
}