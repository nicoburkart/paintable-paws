import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CollectionConverterService } from './collection-converter.service';

export abstract class DataService<T> {

  collection = this.db.collection(this.collectionName)

  constructor(private collectionName: string, private db: AngularFirestore, private collectionConverterService: CollectionConverterService) {}

  async getCollectionData() {

    const data: T[] = []
    const querySnapshot = await this.collection.ref
    .withConverter(this.collectionConverterService.createCollectionConverter<T>())
    .get()

    querySnapshot.docs.map((doc) => data.push(doc.data()))
    
    return data;
  }

  
}
