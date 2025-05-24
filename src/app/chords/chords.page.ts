import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SongService } from './../services/song.service';


@Component({
  selector: 'app-chords',
  templateUrl: './chords.page.html',
  styleUrls: ['./chords.page.scss'],
})
export class ChordsPage implements OnInit {

  data: any[] = [];
  results: any[] = [];
  songs: any[] = [];

  constructor(private navCtrl: NavController, private router: Router, private http: HttpClient, private songService: SongService) {}

  ngOnInit() {
    this.songService.loadSongs().subscribe(songs => {
      this.results = songs;
      this.songs = songs
    });  }

  goToDetailPage(song: any) {
    this.songService.setSelectedSong(song);
    this.router.navigate(['/chords', song.title]);
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.songs.filter((song: any) =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query)
    );
  }

  editSong(song: any , editMode: boolean){
    this.songService.setSelectedSong(song);
    this.router.navigate(['/chords', song.title], { queryParams: { edit: editMode } });
  }
}
