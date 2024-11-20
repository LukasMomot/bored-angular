import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-suprise-text',
    imports: [
        CommonModule,
    ],
    template: `<span>This is the best offer for you 😎</span>`,
    styleUrl: './suprise-text.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupriseTextComponent { }
