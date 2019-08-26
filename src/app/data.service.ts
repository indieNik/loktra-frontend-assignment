import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get("https://tekdi-challenges.appspot.com/api/People");
  }
  
  getPerson(id: number) {
    return this.http.get("https://tekdi-challenges.appspot.com/api/People/" + id);
  }
  
  deletePerson(id: number) {
    return this.http.delete("https://tekdi-challenges.appspot.com/api/People/" + id);
  }
  
  editPerson(person: any) {
    return this.http.put("https://tekdi-challenges.appspot.com/api/People/" + person.id, person);
  }

  newPerson(person: object) {
    return this.http.post("https://tekdi-challenges.appspot.com/api/People", person);
  }
  
}
