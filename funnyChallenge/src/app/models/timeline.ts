import { AbstractControl } from '@angular/forms';

class Timeline{
    constructor(
        public textTitle: AbstractControl,
        public text:AbstractControl
    ){}
}
export { Timeline }