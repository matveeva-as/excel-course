import { DomListener } from "@/core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
  }

  // Возвращает шаблон копмонента
  toHTML() {
    return `<h1>${this.constructor.name}</h1>`;
  }

  init() {
    this.initDOMListeners();
    setTimeout(() => this.removeDOMListeners(), 5000);
  }

  destroy() {
    this.removeDOMListeners();
  }
}
