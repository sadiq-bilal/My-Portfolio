// Lets buttons elsewhere on the page fill in the contact form subject.
const EVENT_NAME = 'contact:prefill'

export function prefillSubject(subject) {
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: subject }))
}

export function onPrefill(handler) {
  const listener = (event) => handler(event.detail)
  window.addEventListener(EVENT_NAME, listener)
  return () => window.removeEventListener(EVENT_NAME, listener)
}