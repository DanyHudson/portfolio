import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { vi } from 'vitest';

import { ContactForm } from './contact-form';

describe('ContactForm', () => {
  let component: ContactForm;
  let fixture: ComponentFixture<ContactForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit whitespace-only required fields', async () => {
    const postSpy = vi.spyOn(component.http, 'post').mockReturnValue(of('Message sent'));

    const compiled = fixture.nativeElement as HTMLElement;
    const userNameInput = compiled.querySelector('#userName') as HTMLInputElement;
    const userEmailInput = compiled.querySelector('#userEmail') as HTMLInputElement;
    const messageInput = compiled.querySelector('#message') as HTMLTextAreaElement;
    const privacyPolicyInput = compiled.querySelector('#privacyPolicyAccepted') as HTMLInputElement;
    const form = compiled.querySelector('form') as HTMLFormElement;

    userNameInput.value = '     ';
    userNameInput.dispatchEvent(new Event('input'));

    userEmailInput.value = 'test@example.com';
    userEmailInput.dispatchEvent(new Event('input'));

    messageInput.value = '     ';
    messageInput.dispatchEvent(new Event('input'));

    privacyPolicyInput.checked = true;
    privacyPolicyInput.dispatchEvent(new Event('change'));

    fixture.detectChanges();
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    await fixture.whenStable();

    expect(postSpy).not.toHaveBeenCalled();
  });
});
