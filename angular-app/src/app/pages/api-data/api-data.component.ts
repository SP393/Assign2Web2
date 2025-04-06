import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, University } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss']
})

export class ApiDataComponent implements OnInit {
  universities: University[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUniversities().subscribe({
      next: (data) => (this.universities = data),
      error: (err) => console.error('API Error', err)
    });
  }
}
