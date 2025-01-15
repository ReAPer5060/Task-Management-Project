import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { debounceTime, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule,HttpClientModule,FormsModule],
  providers:[TaskService]
})
export class DashboardComponent implements OnInit {
  tasks: any[] = [];
  userId:any;
  searchSubject=new Subject();
  sText:string='';
  backup: any[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    const userId = 1; // Replace with logged-in user ID
    this.userId=localStorage.getItem('id');
    this.taskService.getAllTasks().subscribe((data: any) => {
      this.tasks = data;
      this.backup=data;

    });
    this.searchSubject.pipe(debounceTime(500)).subscribe((res:any)=>{
      console.log("***res****",res);
      this.tasks=this.backup.filter((item:any)=>item?.title.includes(res))
    })
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      alert('Task deleted successfully');
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    });
  }
  updateTask(taskId:any){
    console.log("TAskId:::   ",taskId)
    this.router.navigate(['add-task'], { queryParams: {id: taskId}});
  }

  logout() {
    alert('Logged out successfully');
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  searchText(ev: any): void {
    console.log("*search**", ev.target.value);
    this.searchSubject.next(this.sText)
  }
}
