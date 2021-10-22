import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ArtStyle } from 'src/app/models/art-style.model';
import { CollectionConverterService } from './collection-converter.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ArtStyleService extends DataService<ArtStyle> {

  private artStyles: ArtStyle[]

  constructor(db: AngularFirestore, collectionConverterService: CollectionConverterService) {
    super('art-styles', db, collectionConverterService)
   }

   async getArtStyles() {
     if (!this.artStyles) {
       this.artStyles = await this.getCollectionData()
     }
     return this.artStyles
   }
}
