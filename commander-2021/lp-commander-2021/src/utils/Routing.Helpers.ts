export const scrollTo = <T extends HTMLElement>(element: T) => {
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
