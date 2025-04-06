import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: any;
  submittedData: { name: string; email: string; phone: string; message: string }[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      this.submittedData.push(data);
      this.form.reset();
    }
  }
}
