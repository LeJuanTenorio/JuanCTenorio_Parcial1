class Card extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    };

    connectedCallback(){
        this.render();
    };

    static get observedAttributes(){
        return ["name","nameAlt","specie","gender","house","yob"];
    };

    attributeChangedCallback(propName, _, newName){
        this[propName] = newName;
    }

    render(){
        this.shadowRoot.innerHTML = `
            <h1>${this.name}</h1>
            <h1>${this.nameAlt}</h1>
            <h1>${this.specie}</h1>
            <h1>${this.gender}</h1>
            <h1>${this.house}</h1>
            <h1>${this.yob}"</h1>
        `
    }
}

customElements.define("card-1", Card);
export default Card; 