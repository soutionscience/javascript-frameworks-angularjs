import { trigger, state, style, animate, transition } from '@angular/animations';


export function visibility(){
	return trigger('visibility', [
        state('shown', style({ transform: 'scale(1.0)',opacity: 1})),
        state('hidden', style({transform: 'scale(0.5)',opacity: 0})),
        transition('* => *', animate('0.3s ease-in-out'))
    ])
}


export function flyInOut() {
	return trigger('flyInOut', [
		state('*', style({ opacity: 1, transform: 'translateX(0)' })),
		transition(':enter', [style({transform: 'translateX(-100%)'}), animate('0.5s ease-in')]),
		transition(':leave', [style({transform: 'translateX(100%)', opacity: 0}), animate('0.5s ease-out')])

		])
}
export function expand() {
	return trigger('expand',[
		   state('*', style({opacity: 1, transform: 'translateX(0)'})),
			transition(':enter', [style({transform: 'translateY(-50%)', opacity: 0 }), 
				animate('0.2s ease-in',
					style({opacity: 1, transform: 'translateX(0)'}))])
			])
},
