import {parse} from "mathjs"
declare var MathJax: any

const input = document.getElementById("input") as HTMLInputElement
const output = document.querySelector(".output") as HTMLDivElement

console.log(jax("n"));


input?.addEventListener("input", parseEq)

function parseEq() {
    try {
        const r = parse(input?.value)
        const t = r.toTex({parenthesis: "auto"})

        console.log({r, t});
        output.innerHTML = '';
        //
        //  Reset the tex labels (and automatic equation numbers, though there aren't any here).
        //  Get the conversion options (metrics and display settings)
        //  Convert the input to CommonHTML output and use a promise to wait for it to be ready
        //    (in case an extension needs to be loaded dynamically).
        //
        MathJax.texReset();
        var options = MathJax.getMetricsFor(output);
        MathJax.tex2chtmlPromise(t, options).then(function (node: any) {
          //
          //  The promise returns the typeset node, which we add to the output
          //  Then update the document to include the adjusted CSS for the
          //    content of the new equation.
          //
          output.appendChild(node);
          MathJax.startup.document.clear();
          MathJax.startup.document.updateDocument();
        })
    }
    catch(e) {
        console.warn(e.message)
    }

    
}
