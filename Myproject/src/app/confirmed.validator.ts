import { FormControlName, FormGroup } from "@angular/forms";
export function ConfirmedValiator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
            return
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ ConfirmedValiator: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    }
}