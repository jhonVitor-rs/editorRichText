RichTextIframe.document.designMode = 'on'
RichTextIframe.document.body.style.margin = 0
RichTextIframe.document.body.style.wordWrap = 'break-word'

var fonts = ['Arial', 'Calibri', 'Comic Sans MS', 'Impact', 'Trebuchet MS', 'Times New Roman']
var sizes = [1, 2, 3, 4, 5, 6, 7]
var colors = ['#000000', '#333333', '#666666', '#999999', '#CCCCCC', '#FFFFFF', '#0000FF', '#00FF00', '#FF0000', '#00FFFF', '#FFFF00', '#FF00FF']


// Estilo da Fonte
const fontTypes = document.getElementById('fonts')
fonts.forEach(element => {
    let option = document.createElement('option')
    option.appendChild(document.createTextNode(element))
    fontTypes.appendChild(option)
})

fontTypes.addEventListener('change', () => {
    RichTextIframe.document.execCommand('fontname', false, fontTypes.value)
})

//Tamanho da fonte
const fontSizes = document.getElementById('sizes')
sizes.forEach(element => {
    let option = document.createElement('option')
    option.appendChild(document.createTextNode(element))
    fontSizes.appendChild(option)
})

fontSizes.addEventListener('change', () => {
    RichTextIframe.document.execCommand('fontsize', false, fontSizes.value)
})

//fontStyles
const bold = document.getElementById('bold')
const italic = document.getElementById('italic')
const underline = document.getElementById('underline')
const strikethrough = document.getElementById('strikethrough')

function fontStyles(command){
    RichTextIframe.document.execCommand(command, false, null)
}

//fontColors
const fontColors = document.getElementById('fontColor')
colors.forEach(element => {
    let option = document.createElement('option')
    option.appendChild(document.createTextNode(element))
    option.style.backgroundColor = element
    option.style.color = element
    fontColors.appendChild(option)
})

fontColors.addEventListener('change', () => {
    fontColors.style.backgroundColor = fontColors.value
    fontColors.style.color = fontColors.value
    RichTextIframe.document.execCommand('foreColor', false, fontColors.value)
})

//cor de fundo
const backColors = document.getElementById('backColor')
colors.forEach(element => {
    let option = document.createElement('option')
    option.appendChild(document.createTextNode(element))
    option.style.backgroundColor = element
    option.style.color = element
    backColors.appendChild(option)
})

backColors.addEventListener('change', () => {
    backColors.style.backgroundColor = backColors.value
    backColors.style.color = backColors.value
    RichTextIframe.document.execCommand('backColor', false, backColors.value)
})

//Alinhamento
const alignLeft = document.getElementById('justifyLeft')
const alignCenter = document.getElementById('justifyCenter')
const alignRight = document.getElementById('justifyRight')
const alignJustify = document.getElementById('justifyFull')

//links
const insertLink = document.getElementById('createLink')
insertLink.addEventListener('click', () => {
    RichTextIframe.document.execCommand('createLink', false, prompt('Entre com o emdereço do link:'))
})

//funçao botoes
function textFormat(command){
    RichTextIframe.document.execCommand(command, false, null)
}
