class SkillComponent extends HTMLElement {
    constructor(){
        super()

        const shadow = this.attachShadow({mode: 'closed'})
        const skill = document.createElement('div')
        skill.setAttribute('class', 'skill')

        const skillTitle = document.createElement('p')
        skillTitle.setAttribute('class', 'skill-title')
        skillTitle.innerText =  this.getAttribute('text')

        const skillImage = document.createElement('img')
        skillImage.setAttribute('class', 'skill-image')
        skillImage.src = this.getAttribute('source')
        skillImage.alt = `${skillTitle.innerText} icon`

        const style = document.createElement('style')
        style.textContent = `
            .skill{
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 1 0 21%;
                gap: 10px;
                transition: all .2s;
                margin: 20px 0;
            }
            .skill:hover{
                transform: scale(1.2);
            }
            
            .skill-title{
                font-family: 'Poppins-Medium';
                text-transform: uppercase;
                margin: 0
            }
            
            .skill-image{
                width: 50px;
            }
        `

        skill.appendChild(skillTitle)
        skill.appendChild(skillImage)
        shadow.appendChild(style)
        shadow.appendChild(skill)
        this.style.display = 'flex'
        this.style.flex = '1 0 21%'

    }
}

customElements.define('my-skills', SkillComponent)