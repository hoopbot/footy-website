import {Component, Input, OnInit} from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() heroId: string;

  public heroUrl: Observable<string | null>;
  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    this.getHeroImg();
  }

  private getHeroImg(): void{
    const ref = this.storage.ref('heroes/' + this.heroId.toString() + '.svg');
    this.heroUrl = ref.getDownloadURL();
  }

}
