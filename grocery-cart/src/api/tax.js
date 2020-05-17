
import { of } from 'rxjs';

export const calculateTax = (total) => {
  const tax = +(total * .08).toFixed(2)
  
  return of(tax)
}