class footer extends HTMLElement {
    async connectedCallback() {
        if(!footer.template) {
            const response = await fetch("./footer-html");
            const html = await response.text();

            const temp = document.createElement("div").innerHTML = html;
            footer.template = temp.querySelector("#footer-template");
        }

        const shadow = this.attachShadow({ mode: "open"});
        const clone = footer.template.content.cloneNode(true);
         
        const title = this.getAttribute("title") || "NO TITLE HELP";
        clone.querySelector(".title").textContent = title;

        shadow.appendChild(clone);
    }
}

customElements.define("footer-basic", footer);

export async function autoRegister(){

}