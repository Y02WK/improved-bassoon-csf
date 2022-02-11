import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css'],
})
export class RecipeAddComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      ingredients: this.fb.array([
        new FormControl('', [Validators.required, Validators.minLength(3)]),
      ]),
      image: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  addInput() {
    const control = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);
    (<FormArray>this.form.get('ingredients')).push(control);
  }

  deleteInput(i: number) {
    (<FormArray>this.form.get('ingredients')).removeAt(i);
  }

  getFormArray(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  submitForm(): void {}
}
