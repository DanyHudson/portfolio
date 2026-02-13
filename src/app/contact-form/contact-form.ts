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
  submitAttempted = false;

  post = {
    // endPoint: 'https://deineDomain.de/sendMail.php',
    endPoint: 'https://dany-hudson.com/sendMail.php',  // my email just  for testing
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {

    this.submitAttempted = true;

    if (ngForm.submitted && ngForm.form.valid && this.contactFormData.privacyPolicyAccepted && !this.mailTest) { // remove ' !this.mailTest' for real mail sending
      this.http.post(this.post.endPoint, this.post.body(this.contactFormData))
        .subscribe({
          next: (response) => {
            // insert here what else should happen on success, e.g. a success message
            console.log('Response from server: ', response);
            ngForm.resetForm();
            this.submitAttempted = false;
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.submitAttempted && this.mailTest) { // delete the whole else if block for real mail sending
      // as above insert here what else should happen on success, e.g. a success message
      ngForm.resetForm();
      this.submitAttempted = false;
    }
  }
}




// Yes, I see the issue:
// Your custom checkbox error styling relies on the .error-input class being applied to the <input type="checkbox"> when it is invalid and the user has attempted to submit. However, your CSS for the red checkbox border is:

// .privacy-policy input[type="checkbox"].error-input+label::before {
//     background-image: url('../../assets/img/checkbox_red.svg');
//     width: 1.7em;
//     height: 1.7em;
// }

// But in your HTML, the checkbox and label are not adjacent siblings—the label comes after the input, but there may be whitespace or line breaks, which in HTML can break the adjacent sibling selector (+). Also, Angular sometimes reorders or wraps elements, which can break this relationship.

// How to Fix
// 1. Make sure the input and label are truly adjacent (no whitespace or comments between them):

// <input ... [class.error-input]="!contactFormData.privacyPolicyAccepted && submitAttempted" />
// <label for="privacyPolicyAccepted"> ... </label>

// Remove any whitespace, comments, or other elements between the input and label.
// 2. If you want to be robust, use a more general selector:

// .privacy-policy input[type="checkbox"].error-input ~ label::before {
//     background-image: url('../../assets/img/checkbox_red.svg');
//     width: 1.7em;
//     height: 1.7em;
// }

// The ~ selector works for any following sibling, not just the immediately adjacent one.
// 3. Double-check your error condition:

// Your [class.error-input]="!contactFormData.privacyPolicyAccepted && submitAttempted" is correct.
// Your error message display condition is also correct.
// 4. Make sure your SVG path is correct and the image exists.