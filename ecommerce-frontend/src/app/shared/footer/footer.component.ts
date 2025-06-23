import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-gray-800 text-white p-4 text-center mt-8">
      <div class="container mx-auto">
        <p>&copy; {{ currentYear }} E-Shop. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}