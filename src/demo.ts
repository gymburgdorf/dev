import {Learnscape} from "./learnscapes"

const ls = new Learnscape(
    document.querySelector(".learnscape")!,
    "img/lake.png"
)

ls.addImage("img/boat.png", {x: 30, y: 50, w: 10, h: 10, rot: 45})
ls.addImage("img/boat.png", {x: 70, y: 40, w: 10, h: 10, rot: 110})
ls.addInput({x: 20, y: 40, w: 5, h: 5}, "v1")
ls.addInput({x: 20, y: 46, w: 5, h: 5}, "v1")
ls.addInput({x: 80, y: 44, w: 5, h: 5}, "v2")
ls.addInput({x: 80, y: 50, w: 5, h: 5}, "v2")