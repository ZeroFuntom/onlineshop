import {Component} from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div>
	<nav class = 'navbar navbar-default'>
		<div class = 'container-fluid'>
			<a class = 'navbar-brad'> {{ pageTitle }} </a>
			<ul class = 'nav navbar-nav'>
				<li> <a [routerLink] = "['/welcome']"> Home </a> </li>
				<li> <a [routerLink] = "['/products']"> Product </a> </li>
				<li> <a [routerLink] = "['/user']"> Create User </a> </li>
			</ul>
		</div>
	</nav>
	<div class = 'container'>
		<router-outlet></router-outlet>
	</div>
</div>
`
})

export class AppComponent{
  pageTitle: string = 'Pandas Product Management';
}
