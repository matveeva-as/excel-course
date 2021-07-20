import { ExcelComponent } from "@/core/ExcelComponent";
import { createTable } from "@/components/table/table.template";

export class Table extends ExcelComponent {
  static className = "excel__table";

  constructor($root) {
    this.index = undefined;
    super($root, {
      listeners: ["mousedown", "mouseup"],
    });
  }

  toHTML() {
    return createTable(100);
  }

  onClick() {
    console.log("onClick");
  }

  onMousedown(event) {
    if (event.target.dataset.resize === "col") {
      this.startX = event.x;
      this.index = event.target.dataset["index-col"];
    }
  }

  onMousemove() {
    console.log("onMousemove");
  }

  onMouseup(event) {
    console.log("this.index");
    console.log(this.index);
    document
      .querySelectorAll(`[data-index-col='${this.index}']`)
      .forEach((el) => {
        console.log(el);
        el.style.width = el.style.width + event.x - this.startX;
      });
    this.startX = undefined;
  }
}
