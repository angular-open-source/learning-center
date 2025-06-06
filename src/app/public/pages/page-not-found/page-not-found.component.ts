import { Component, inject, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [
    MatButton
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent implements OnInit {
  protected invalidPath: string;
  private router: Router  = inject(Router)
  private route: ActivatedRoute = inject(ActivatedRoute)

  constructor() {
    this.invalidPath = '';
  }

  ngOnInit() {
    this.invalidPath = this.route.snapshot.url.map(url => url.path).join('/');
  }

  protected goBackHome() {
    this.router.navigate(['home']).then()
  }

}

