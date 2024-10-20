export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  events.forEach((userEvent) => {
    setTimeout(() => html.addEventListener(userEvent, outsideHandleClick));
  });
  function outsideHandleClick(event) {
    if (!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, outsideHandleClick);
      });
      callback();
    }
  }
}
