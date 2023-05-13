class ProjectComponent extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({mode: 'closed'})

        const project = document.createElement('div')
        project.classList.add('project')

        const image = document.createElement('img')
        image.src = './assets/images/projects/agency.webp'
        image.classList.add('project-image')
        image.alt = `${this.getAttribute('title')} print`

        const text = document.createElement('div')
        text.classList.add('project-text')

        const title = document.createElement('h4')
        title.textContent = 'Website - Agência Espacial'
        title.classList.add('project-title')

        const description = document.createElement('p')
        description.textContent = 'Um website feito para uma agência de marketing, com um banner interativo.'
        description.classList.add('project-description')
        
        const hover = document.createElement('div')
        hover.classList.add('project-hover')

        const titleHover = document.createElement('h4')
        titleHover.classList.add('project-title')
        titleHover.textContent = 'Website - Agência Espacial'

        const descHover = document.createElement('p')
        descHover.classList.add('project-desc-hover')
        descHover.textContent = 'Fui responsável por idealizar a interface e codificá-la'

        const techs = document.createElement('div')
        techs.classList.add('techs')

        const tech1 = document.createElement('span')
        tech1.classList.add('tech')
        tech1.textContent = 'html'
        const tech2 = document.createElement('span')
        tech2.classList.add('tech')
        tech2.textContent = 'css'
        const tech3 = document.createElement('span')
        tech3.classList.add('tech')
        tech3.textContent = 'javascript'

        const accessLinks = document.createElement('div')
        accessLinks.classList.add('access-links')

        const linkRepo = document.createElement('a')
        linkRepo.classList.add('btn-access')
        linkRepo.textContent = 'repo'

        const linkSite = document.createElement('a')
        linkSite.classList.add('btn-access')
        linkSite.textContent = 'acessar'

        const style = document.createElement('style')
        style.textContent = `
        .project {
            background-color: #2a3443;
            width: 350px;
            height: 370px;
            border-radius: 10px;
            padding-top: 15px;
            margin-bottom: 50px;
            position: relative;
            transition: margin-top .3s ease;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
        }
        
        .project:hover {
            margin-top: -20px;
        }
        
        .project:hover .project-hover {
            display: block;
            top: 0;
            opacity: 1;
            visibility: visible;
        }
        
        .project-text {
            margin: 0 20px;
        }
        
        .project-image {
            display: block;
            width: 95%;
            margin: 0 auto;
        }
        
        .project-title {
            font-family: 'Poppins-Regular';
            font-size: 1rem;
            margin: 1.33rem 0;
        }
        
        .project-description {
            font-family: 'Poppins-Light';
            margin: 1em 0;
            font-size: 1em;
        
        }
        
        .project-hover {
            position: absolute;
            top: 50px;
            padding: 0 20px;
            background-color: #2a3443;
            border-radius: 10px;
            font-family: 'Poppins-Light';
            cursor: pointer;
            transition: .2s;
            opacity: 0;
            visibility: hidden;
        }
        
        .project-hover .project-title {
            margin: 2rem 0;
        }
        
        .project-desc-hover {
            margin: 1.5em 0;
        }
        
        .techs {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        
        .tech {
            text-transform: uppercase;
            color: var(--primary-color);
            border: 2px solid var(--primary-color);
            padding: 0 10px;
            border-radius: 30px;
            margin-bottom: 10px;
            transition: .2s;
        }
        
        .tech:hover {
            background-color: var(--primary-color);
            color: var(--text-secondary-color);
        }
        
        .access-links{
            display: flex;
            margin-top: 25%;
            gap: 10px;
        }
        
        .btn-access {
            font-family: 'Poppins-Light';
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            background-color: var(--secondary-color);
            width: 100%;
            height: 60px;
            border-radius: 5px;
            color: var(--primary-color);
            font-size: 1.125rem;
        }
        
        .btn-access:hover {
            background-color: #66fcf112;
        }
        `

        shadow.appendChild(style)
        project.appendChild(image)

        text.appendChild(title)
        text.appendChild(description)
        project.appendChild(text)

        hover.appendChild(titleHover)
        hover.appendChild(descHover)
        hover.appendChild(techs)

        techs.appendChild(tech1)
        techs.appendChild(tech2)
        techs.appendChild(tech3)
        
        hover.appendChild(accessLinks)
        accessLinks.appendChild(linkRepo)
        accessLinks.appendChild(linkSite)
        
        project.appendChild(hover)
        shadow.appendChild(project)
        console.log(this)
        this.style.backgroundColor = '#fff'
    }
}

customElements.define('project-component', ProjectComponent)