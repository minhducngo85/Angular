import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html', 
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  Fruits = ["mango","apple","orange","grapes"]; 

  constructor() { }

  ngOnInit(): void {
  }


  isLoggedIn: boolean = true;
  isLoggedOut: boolean = false;

  list = [1, 2, 3, 4, 5]

  studenArr: any[] = [
    {
      "id": 1,
      "name": "Student 1"
    },
    {
      "id": 2,
      "name": "Student 2"
    },
    {
      "id": 3,
      "name": "Student 3"
    },
    {
      "id": 4,
      "name": "Student 4"
    }
  ];

  /**
   * 
   * @param index 
   *  the index
   * @param studentArr
   *  the array 
   * 
   * return unique number of object
   */
  trackByStudent(index: number, studentArr: any): number {
    return studentArr.id;
  }

  logInName: string = 'admin';

  users: User[] = [
    {
      userId: 1,
      userName: 'User1'
    },
    {
      userId: 2,
      userName: 'User2'
    }
  ]
}
