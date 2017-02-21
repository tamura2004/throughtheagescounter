export function Say (text) {
  let msg = new window.SpeechSynthesisUtterance()
  msg.volume = 1
  msg.rate = 1
  msg.pitch = 1
  msg.text = text
  msg.lang = 'ja-JP'
  window.speechSynthesis.speak(msg)
}
