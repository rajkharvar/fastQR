let text = document.getElementsByClassName('input')[0]
let QRText = 'FastQR'

text.addEventListener('input', (event) => {
  QRText = text.value
  if (QRText === '') {
    QRText = 'FastQR'
  }

  generateQR(QRText)
})

function generateQR (text) {
  new QRious({
    element: document.getElementsByClassName('qr')[0],
    value: text,
    size: '250',
    background: 'white',
    foreground: 'black'
  })
}

generateQR(QRText)