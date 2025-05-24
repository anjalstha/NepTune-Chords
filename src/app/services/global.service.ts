import { LoadingController, PopoverController } from '@ionic/angular';
import { EventEmitter, Injectable, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  DomainName= 'Protocol Buster';
  isLoading = false;
  GlobalCustomerName = 'Toon';
  alert: any;
  loading: any;
  ImageData: any = localStorage['ImageData'];
  locales: any = [];
  RoleCode = '';
  public alertPresented: any;
  private audio = new Audio();
  messaging: any;
  timeOut: any;
  checkBackURL = false;
  showCallingUserInfo = false;
  isRouteFromLoginToVideoAssistance = false;
  enableVideoassistance: string | undefined;
  showSentAlert: boolean | undefined;
  incidentCountTimer: any;
  reportedIncidentCount = 0;
  enableMSLogin: Boolean= false;
  enableGoogleLogin: Boolean = false;
  enableMMLogin: Boolean = false;
  lang = '1043';
  showQrScanner = true;
  tempUserName: any = null;
  menuItems: any = [];
  localeLength = '';
  showDomainChange = false;
  currentUserId = '';
  switchDomainsName: any;
  public onDomainChange: EventEmitter<any> = new EventEmitter<any>();
  supportUser = false;
  hideDefault = false;
  customLocaleSelect = {
    cssClass: 'customLocaleSelect',
  };
  customSelectInterface = {
    cssClass: 'customSelectInterface',
  };
  domainColor = '';
  valueChanges = false;
  domains: any = [];
  configDomain: any;
  loadingCounter = 0;
  length= 0;
  currentPage = 0;
  searchText = '';
  activeElement:any;

  constructor(public loadingController: LoadingController,
    public alertController: AlertController,
    public _router: Router,
    private _ngZone: NgZone,
    private popoverController: PopoverController,
  )
     {
  }

  showLoading() {
    if (this.loading) {
      this.loading.then((loading: HTMLIonLoadingElement) => {
        loading.dismiss();
      });
    }
    this.activeElement = <HTMLElement> document.activeElement;
    this.activeElement?.blur();
    this.loading = this.loadingController.create({
      message: 'Please wait',
      spinner: 'circles',
    }).then((loading: HTMLIonLoadingElement) => {
      loading.present();
      return loading;
    });
  }

  robotThinking() {
    if (this.loading) {
      this.loading.then((loading: HTMLIonLoadingElement) => {
        loading.dismiss();
      });
    }
    this.activeElement = <HTMLElement> document.activeElement;
    this.activeElement?.blur();
    this.loading = this.loadingController.create({
      translucent: true,
      spinner: null,
      cssClass: 'custom-loading'
    }).then((loading: HTMLIonLoadingElement) => {
      loading.message = '<div class="thinking-message"><img src="assets/icon/cute-robot.gif"><div class="text">I\'m thinking ...</div></div>';
      loading.present();
      return loading;
    });
  }

  dismissLoading() {
    if (this.loading) {
      this.loading.then((loading: HTMLIonLoadingElement) => {
        loading.dismiss();
        setTimeout(() => {
          this.activeElement?.focus();
        }, 100);
      });
    }
  }

async presentAlert(header: any, errMessage: any, unAuthMessage: any, status: any) {
  if(!this.alertPresented){
    let message = errMessage;
    if (status == 401) {
      message = unAuthMessage ? unAuthMessage: errMessage;
    }
    this.alertPresented = true;
    this.alert = await this.alertController.create({
      header,
      message,
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.alertPresented = false;
          if (status == 401) {
            this._ngZone.run( () => {
              this._router.navigate(['/login']);
            } );
          } else {

          }
        }
      }],
      backdropDismiss: false
    });
    await this.alert.present();
  }
}

async scanAlert(header: any, errMessage: any, unAuthMessage: any, status: any) {
  let message = errMessage;
  this.alert = await this.alertController.create({
    header,
    message,
    buttons: [{
      text: 'Ok',
      handler: () => {
        this._router.navigate(['/home']);
      }
    }],
    backdropDismiss: false
  });
  await this.alert.present();
}

// async presentProfilePopover(event: any) {
//   const popover = await this.popoverController.create({
//     component: ProfilePopoverComponent,
//     event: event,
//     showBackdrop: false,
//     cssClass: 'popPopOver',
//     translucent: true
//   });
//   return await popover.present();
// }

clearLocalStorage(){
localStorage.removeItem('authenticationKey');
localStorage.removeItem('UserName');
localStorage.removeItem('isLogin');
localStorage.removeItem('LastName');
localStorage.removeItem('FirstName');
localStorage.removeItem('UserId');
}
}

