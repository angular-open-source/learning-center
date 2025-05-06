import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleModule
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {
  selectedLanguage: string = 'en';
  languages: string[] = ['en','es']

  constructor(private translate: TranslateService) {
    this.selectedLanguage = translate.currentLang
  }

  useLanguage(language: string) {
    this.translate.use(language)
  }
}
