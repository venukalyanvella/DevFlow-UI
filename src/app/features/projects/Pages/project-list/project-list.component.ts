import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  searchTerm: string | null = null;
  isLoading: boolean = false;
  viewMode: 'list' | 'grid' = 'list';
  errorMessage: string | null = null;
  filteredProjects: any[] = []; //


  constructor() { }

  ngOnInit(): void {
  }

  loadProjects() {

  }

  currentPage = 1;
  pageSize = 25;
  pageSizeOptions = [25, 50, 100];

  // Keep your existing projects array.
  projects: any[] = [];


  // get filteredProjects(): any[] {
  //   const term = this.searchTerm.trim().toLowerCase();

  //   if (!term) {
  //     return this.projects;
  //   }

  //   return this.projects.filter(project =>
  //     project.name.toLowerCase().includes(term) ||
  //     (project.description ?? '').toLowerCase().includes(term) ||
  //     String(project.projectId).includes(term)
  //   );
  // }

  get totalRecords(): number {
    return this.filteredProjects.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.pageSize);
  }

  get paginatedProjects(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;

    return this.filteredProjects.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  get startRecord(): number {
    return this.totalRecords === 0
      ? 0
      : (this.currentPage - 1) * this.pageSize + 1;
  }

  get endRecord(): number {
    return Math.min(
      this.currentPage * this.pageSize,
      this.totalRecords
    );
  }

  get pageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    let start = Math.max(1, this.currentPage - 2);
    let end = Math.min(this.totalPages, start + maxVisiblePages - 1);

    start = Math.max(1, end - maxVisiblePages + 1);

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    return pages;
  }

  onSearchChange(): void {
    this.currentPage = 1;
  }

  onPageSizeChange(size: number | string): void {
    this.pageSize = Number(size);
    this.currentPage = 1;
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }


}
