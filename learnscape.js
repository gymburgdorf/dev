class l {
  constructor(e, t) {
    this.element = e, this.img = t, this.element.style.setProperty("background-image", `url('${t}')`), this.element.style.setProperty("position", "relative");
  }
  addImage(e, t) {
    this.addBox(t).style.setProperty("background-image", `url('${e}')`);
  }
  addElement(e) {
    this.element.insertAdjacentElement("beforeend", e);
  }
  addBox(e) {
    const t = [
      `top: ${e.y - 0.5 * e.h}vmin;`,
      `bottom: ${100 - e.y - 0.5 * e.h}vmin;`,
      `left: ${e.x - 0.5 * e.w}vmin;`,
      `right: ${100 - e.x - 0.5 * e.w}vmin;`,
      ...e.rot ? [`transform: rotate(${e.rot}deg);`] : []
    ].join(""), n = o(`<div class="box" style="${t}"></div>`);
    return this.addElement(n), n;
  }
  addInput(e, t = "") {
    const n = this.addBox(e), s = o(`<input style="font-size: ${0.6 * e.h}vmin" type="number" required placeholder=${t}>`);
    return n.insertAdjacentElement("beforeend", s), s;
  }
  addNumberUnitBox(e, t, n) {
    const s = this.addBox(e);
    s.classList.add("databox"), s.style.fontSize = `${0.5 * e.h}vmin`;
    const a = o(`<span class="valbox">${t}</span>`), i = o(`<span class="unitbox">${n}</span>`);
    return s.insertAdjacentElement("beforeend", a), s.insertAdjacentElement("beforeend", i), s;
  }
  addVectorBox(e, t) {
    const n = this.addBox(e);
    n.classList.add("vectorbox"), n.style.fontSize = `${0.6 * 4}vmin`, n.innerHTML = `${t}&nbsp;=&nbsp;`;
  }
  numberBoxToInput(e) {
    var s;
    let t = e.querySelector(".valbox"), n = t == null ? void 0 : t.textContent;
    t.innerHTML = `<input class="" style='width:${1.8}em'>`, (s = e.querySelector(".valbox input")) == null || s.addEventListener("input", (a) => {
      var i;
      parseFloat(((i = a.currentTarget) == null ? void 0 : i.value) || 0) === parseFloat(n || "") && a.currentTarget.classList.add("correct");
    });
  }
}
function o(r) {
  var e = document.createElement("template");
  return r = r.trim(), e.innerHTML = r, e.content.firstChild;
}
export {
  l as Learnscape
};
