import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent {
  //selectedRoute = '' 

  constructor(private router: Router) { }

  goToSelectedRoute(event) {
    const selectedRoute = event.target.value;
    // const link = [selectedRoute]
    this.router.navigate([selectedRoute])
  }
}
