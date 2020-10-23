import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  onChangeValue(event) {
    this.valueChange.emit(event.target.value);
  }
}
