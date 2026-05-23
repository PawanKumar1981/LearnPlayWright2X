// prime numbers from 1 to 50
/*What is a Prime Number?
A prime number:
should be greater than 1
divisible only by:
1
itself */

/* “Why loop starts from 2?”

Answer:

Because every number is divisible by 1 and itself.
We only need to check if it is divisible by numbers between 2 and num-1. */

for (let num = 2; num <= 50; num++) {

    IsPrime = true;
    for (let i = 2; i < num; i++) {

        if (num % i == 0) {

            IsPrime = false;

            break;

        }
    }
    if (IsPrime) {
        console.log("Prime number  " + num);

    }

}