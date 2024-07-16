import { Pipe, PipeTransform } from '@angular/core';
import { Students } from '../../features/dashboard/students/models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(student: Students): string {
    return `${student.name} ${student.lastName}`;
  }

}
