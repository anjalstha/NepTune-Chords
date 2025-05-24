import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService } from './../../services/song.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AlertController, LoadingController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-chords-detail',
  templateUrl: './chords-detail.page.html',
  styleUrls: ['./chords-detail.page.scss'],
})
export class ChordsDetailPage implements OnInit {

  song: any;
  editMode: boolean = false;
  fileName!: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private songService: SongService,
    public ngxSmartModalService: NgxSmartModalService,
    public alertController: AlertController,
  ) {
    this.route.queryParams.subscribe(params => {
      this.editMode = params['edit'] === 'true';
    });
  }

  ngOnInit() {


    this.song = this.songService.getSelectedSong();
    this.fileName = this.song.title;


    if (!this.song) {
      this.song = localStorage.getItem('selectedSong');
      this.song = JSON.parse(this.song);
    }
  }

  async saveChanges(){
    try {
      await this.songService.updateLocalSong(this.fileName, this.song);

      // await this.songService.updateLocalSong(this.fileName, this.song).subscribe(songs => {
      //   const song = songs;
      //   console.log(song);

      // })
      this.router.navigate(['/chords']);
      console.log('Changes saved successfully');
    } catch (error) {
      console.error('Error updating song:', error);
    }
  }


  async savePopUp(){
    const saveAlert = await this.alertController.create({
      header: 'Save',
      message: 'Are you sure you save changes?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          },
        },
        {
          text: 'Yes',
          handler: () => {
            this.saveChanges();
          },
        },
      ],
      backdropDismiss: false,
    });
    await saveAlert.present();
  }

  async exitPopUp(){
    const exitAlert = await this.alertController.create({
      header: 'Exit',
      message: 'Are you sure you want to exit?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          },
        },
        {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['/chords']);
          },
        },
      ],
      backdropDismiss: false,
    });
    await exitAlert.present();
  }
}
