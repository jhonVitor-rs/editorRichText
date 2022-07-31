RichTextIframe.document.designMode = 'on'
RichTextIframe.document.body.style.margin = 0
RichTextIframe.document.body.style.wordWrap = 'break-word'

var menu = document.querySelector('.menu')

var buttonsToolbar = []
var selectsToolbar = []

var fonts = ['Arial', 'Calibri', 'Comic Sans MS', 'Impact', 'Trebuchet MS', 'Times New Roman']
var sizes = [1, 2, 3, 4, 5, 6, 7]
var colors = ['#000000', '#333333', '#666666', '#999999', '#CCCCCC', '#FFFFFF', '#0000FF', '#00FF00', '#FF0000', '#00FFFF', '#FFFF00', '#FF00FF']

const selects = [
    {
        command: 'fontname',
        value: fonts
    },
    {
        command: 'fontsize',
        value: sizes
    },
    {
        command: 'forecolor',
        value: colors
    }
]

const buttons = [
    {
        command: 'bold',
        icon: 'bold',
    },
    {
        command: 'italic',
        icon: 'italic'
    },
    {
        command: 'underline',
        icon: 'underline'
    },
    {
        command: 'strikethrough',
        icon: 'strikethrough'
    },
    {
        command: 'justifyleft',
        icon: 'align-left'
    },
    {
        command: 'justifycenter',
        icon: 'align-center'
    },
    {
        command: 'justifyright',
        icon: 'align-right'
    },
    {
        command: 'justifyfull',
        icon: 'align-justify'
    },
    {
        command: 'unlink',
        icon: 'unlink'
    },
    {
        command: 'insertOrderedList',
        icon: 'list-ol'
    },
    {
        command: 'insertUnorderedList',
        icon: 'list-ul'
    },
    {
        command: 'backColor',
        icon: 'highlighter'
    },
    {
        command: 'createLink',
        icon: 'link'
    }
]

function Component(command, element, event){
    this.command = command
    this.element = document.createElement('span')
    this.element.appendChild(element)
    this.recoverValue = () => {
        return null
    }

    var selfComponent = this
    this.element.addEventListener(event, () => {
        RichTextIframe.document.execCommand(command, false, selfComponent.recoverValue())
    })
}

function ComponentSelect(command, values){
    var select = document.createElement('select')
    values.forEach(value => {
        var option = document.createElement('option')
        option.appendChild(document.createTextNode(value))
        select.appendChild(option)
    })

    Component.call(this, command, select, 'change')

    var selfComponentSelect = this
    this.recoverValue = () => {
        return selfComponentSelect.element.firstChild.value
    }
}

function ComponentButton(command, icon){
    var button = document.createElement('button')
    var buttonIcon = document.createElement('i')
    buttonIcon.classList.add('fa', 'fa-'+icon)
    button.appendChild(buttonIcon)
    Component.call(this, command, button, 'click')
}

function initToolbar(){
    buttons.forEach(element => {
        let button = new ComponentButton(element.command, element.icon)
        buttonsToolbar.push(button)
    })
    
    selects.forEach(element => {
        let select = new ComponentSelect(element.command, element.value)
        selectsToolbar.push(select)
    })
    Array.from(selectsToolbar[2].element.firstChild.options).forEach(option => {
        option.style.color = option.value
    })

    renderToolbar()
}

function renderToolbar(){
    var listSelect = document.createElement('div')
    var listButton = document.createElement('div')

    selectsToolbar.forEach(component => {
        listSelect.appendChild(component.element)
    })

    buttonsToolbar.forEach(component => {
        listButton.appendChild(component.element)
    })

    menu.appendChild(listSelect)
    menu.appendChild(listButton)
}

initToolbar()