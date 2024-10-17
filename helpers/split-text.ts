function splitTextIntoSpans(selector: string): void {
  const elements = document.querySelectorAll<HTMLElement>(selector)

  elements.forEach((element) => {
    const text = element.innerText

    const splitText = text
      .split('')
      .map((char: string) => {
        return `<span>${char === ' ' ? '&nbsp;&nbsp;' : char}</span>`
      })
      .join('')

    element.innerHTML = splitText
  })
}

export default splitTextIntoSpans