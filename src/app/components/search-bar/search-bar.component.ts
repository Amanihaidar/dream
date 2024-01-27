import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm: string = '';

  constructor(private searchService: SearchService, private router: Router) {}

  search(): void {
    this.searchService.setSearchTerm(this.searchTerm);

    // Navigate to the search results page with the search term
    this.router.navigate(['/search-results'], { queryParams: { searchTerm: this.searchTerm } });
  }
}
