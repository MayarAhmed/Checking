import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { identityRevealedValidator } from '../shared/identity.directive';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  login = { name: ' ', alterEgo: ' ' };

  loginForm: FormGroup;

  constructor(  private route: ActivatedRoute,
    private router: Router) {
  

   }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'name': new FormControl(this.login.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'alterEgo': new FormControl(this.login.alterEgo),
    },  { validators: identityRevealedValidator }); // <-- add custom validator at the FormGroup level
    }
    gotoHome(){
      this.router.navigate(['/home']);
    }
    get name() { return this.loginForm.get('name'); }

    get power() { return this.loginForm.get('power'); }
 

}
