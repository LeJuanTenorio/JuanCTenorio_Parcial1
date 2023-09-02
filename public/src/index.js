import { data } from "./indexData.js";
import { Card } from "./components/indexExport.js";

class appContainer extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((e) => {
           this.shadowRoot.innerHTML += `
           <card-1 name="${e.name}"
           nameAlt="${e.alternate_names.name}"
           specie="${e.species}"
           gender="${e.gender}"
           house="${e.house}"
           yob="${e.dateOfBirth}"
           name="${e.name}"
           ></card-1>
           `
        });
    }
}

customElements.define("app-container", appContainer);


