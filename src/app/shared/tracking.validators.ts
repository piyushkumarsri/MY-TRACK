import { FormControl } from "@angular/forms";

export class TrackingValidators {
    static httpUrl(control: FormControl) {
      //  if (!control.value) return null;  // validation pass
        if (control.value && /^http/.test(control.value)) {
            return null; // validation pass
        } else {
            return { httpurl: true };  // validation fail
        }

    }
}