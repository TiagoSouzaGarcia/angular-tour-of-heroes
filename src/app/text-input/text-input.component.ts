import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  placeholder: string = 'placeholder';

  @Input()
  backgroundColor?: string;

  @Input()
  borderRadius?: string;

  public get classes(): string[] {
    const mode = 'input';

    return ['input', `input-field--${this.size}`, mode];
  }
}
