import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  navigationGroups = [
    {
      title: 'WORKSPACE',
      items: [
        { label: 'Dashboard', icon: 'bi-grid-1x2', route: '/dashboard' },
        { label: 'Projects', icon: 'bi-kanban', route: '/projects' },
        { label: 'My Tasks', icon: 'bi-check2-square', route: '/tasks' },
        { label: 'Sprints', icon: 'bi-calendar3', route: '/sprints' }
      ]
    },
    {
      title: 'MANAGE',
      items: [
        { label: 'Team Members', icon: 'bi-people', route: '/members' },
        { label: 'Settings', icon: 'bi-gear', route: '/settings' }
      ]
    }
  ];

}
