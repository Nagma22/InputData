import { Component, Input , OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnChanges{

 @Input() count : number;

 @Input()
 private _count = 0;

 set count1(count : number)
 {
  this._count = count;
  console.log(count);
 }

 get count1() : number{
   return this._count;
 }
 ngOnChanges(changes: SimpleChanges)
 {
   for(let property in changes)
   {
     if (property === 'count')
     {
       console.log('Previous', changes[property].previousValue);
       console.log('Current:', changes[property].currentValue);
       console.log('firstChange:', changes[property].firstChange);
     }
   }
 }

}
