import { Component, OnInit } from '@angular/core';
import { User } from '/root/crm-frontend/src/app/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id)
      .subscribe(() => {
        // Actualiser la liste des utilisateurs après suppression
        this.getUsers();
      });
  }
}
