import { Subject } from './subject';
import { Phone } from './phone';
export interface Student {
    id: String,
    name: String,
    address: String,
    phones: Phone[]
}