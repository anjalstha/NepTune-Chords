import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  selectedSong: any;
  constructor(private http: HttpClient) { }

  setSelectedSong(song: any) {
    this.selectedSong = song;
    localStorage.setItem('selectedSong', JSON.stringify(this.selectedSong))
  }

  getSelectedSong() {
    if(this.selectedSong){
    return this.selectedSong;
    }
    else{
      this.selectedSong =localStorage.getItem('selectedSong');
      return JSON.parse(this.selectedSong)
    }
  }

  loadSongs(): Observable<any[]> {
    return this.http.get<{ songs: string[] }>('/assets/songs/songs.json').pipe(
      switchMap((songs) => {
        const requests = songs.songs.map(fileName => this.http.get<any>('/assets/songs/' + fileName));
        return forkJoin(requests);
      })
    );
  }

  updateLocalSong(fileName: string, updatedData: any): Observable<any> {
    const url = `/assets/songs/${fileName}.json`;
    return this.http.put(url, updatedData);
  }

}
