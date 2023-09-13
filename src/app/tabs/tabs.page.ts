import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApputilityService } from '../services/apputility.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  apiParam:any;
  constructor(public apputil:ApputilityService) {
    this.test();
  }

  async test() {
      this.apiParam = {
        "username": 'testuser',
        "password": 'testpass',
      };
      console.log(this.apiParam);

      // this.presentLoading();
      await this.apputil.postAPI(this.apiParam, "getprofile")
        .pipe(finalize(async () => {
          // await this.loading.dismiss();
        }))    // Hide the loading spinner on success or error
        .subscribe((response) => {
          console.log(response);
       
        },
          error => {
            // this.loading.dismiss();
            console.log(error);
          });
      // this.router.navigate(['profile']);
    // }

  }

}
