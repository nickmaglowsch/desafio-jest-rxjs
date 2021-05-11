import { of } from "rxjs";
import { delay, retry } from "rxjs/operators";

export const example = of("hello").pipe(retry(3), delay(1000));
console.log("foi");
