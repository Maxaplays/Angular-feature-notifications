import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { MessagingService } from './shared/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'Authorization: key=AAAA_13TUls:APA91bHfIJnTi23kEmlhuJrxfKQf7w0iHl2EZXnFUid0HyjzleO9PytcKZP6MGJpKT-2mxrSSby3zAvibN7Xj0gJmF5JrjVdgZpCL5uPJcOSIUjlobQS1n97Q5aJTY6s3HtqJa2mSuOP' \
  -H 'Content-Type: application/json' \
  -d '{
 "notification": {
  "title": "Hello World",
  "body": "This is Message from Admin"
 },
 "to" : "dmw3PHjwrzQ:APA91bH9ZnzlA404vn7WWIX6f5Z7gVGBOd6GFRl-tZwrlgfyLxR88SIvBSt-Ik7Y_lxo86dAZNvsAhHbqKEUXggG5xEhB3jwq-Zsrl50NXjZF8tzKc5XVATlkfPP68eQpCCx3kwVoer6"
}'
 */
