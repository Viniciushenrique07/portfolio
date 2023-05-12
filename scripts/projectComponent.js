class ProjectComponent extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({mode: 'closed'})
        this.style.backgroundColor = 'red'

        const image = document.createElement('img')

        const text = document.createElement('div')
        const title = document.createElement('h4')
        const description = document.createElement('p')
        
        const hover = document.createElement('div')
        const titleHover = document.createElement('h4')
        const descHover = document.createElement('p')

        const techs = document.createElement('div')
        const tech1 = document.createElement('span')
        const tech2 = document.createElement('span')
        const tech3 = document.createElement('span')

        const accessLinks = document.createElement('div')
        const linkRepo = document.createElement('a')
        const linkSite = document.createElement('a')


        shadow.appendChild(image)

        text.appendChild(title)
        text.appendChild(description)
        shadow.appendChild(text)

        hover.appendChild(titleHover)
        hover.appendChild(descHover)
        hover.appendChild(techs)

        techs.appendChild(tech1)
        techs.appendChild(tech2)
        techs.appendChild(tech3)
        
        hover.appendChild(accessLinks)
        accessLinks.appendChild(linkRepo)
        accessLinks.appendChild(linkSite)
        
        shadow.appendChild(hover)
        console.log(this)

    }
}

customElements.define('project-component', ProjectComponent)