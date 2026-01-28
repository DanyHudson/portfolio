import { Component, inject } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.scss'],
})
export class ContactForm {

  http = inject(HttpClient);

  contactFormData = {
    userName: '',
    userEmail: '',
    message: '',
    privacyPolicyAccepted: false,
  };

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.valid && ngForm.submitted && ngForm.touched) {
  //     console.log('Form Data: ', ngForm.value);
  //   }
  //   else {
  //     console.log(' fill out the form correctly ');
  //   }

  // }

  mailTest = true; // set to false for real mail sending

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) { // remove ' !this.mailTest' for real mail sending
      this.http.post(this.post.endPoint, this.post.body(this.contactFormData))
        .subscribe({
          next: (response) => {
            // insert here what else should happen on success, e.g. a success message
            console.log('Response from server: ', response);
            ngForm.resetForm();
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) { // delete this for real mail sending
      // asa above insert here what else should happen on success, e.g. a success message
      ngForm.resetForm();
    }
  }
}
