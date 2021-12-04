import { TrafficLights } from './index';

const t = new TrafficLights();
console.log(t, t.shouldStop());

t.next();
console.log(t, t.shouldStop());

t.next();
console.log(t, t.shouldStop());

t.next();
console.log(t, t.shouldStop());
