// 1. **Basic `setTimeout`:**
//  - Write a function called `delayedMessage` that takes a message and a delay (in milliseconds) as arguments. Use
// `setTimeout` to log the message to the console after the specified delay.
// 2. **Basic `setInterval`:**
//  - Create a function called `countdown` that takes a number as an argument. Use `setInterval` to log the countdown
// from that number to zero, decrementing by 1 every second. Stop the interval when it reaches zero.
// 3. **Clearing Intervals:**
//  - Extend the `countdown` function from the previous question to also accept a callback function that gets executed
// when the countdown reaches zero. Ensure the interval is cleared after the countdown completes.
// 4. **Using Promises with `setTimeout`:**
//  - Write a function called `wait` that returns a Promise. The Promise should resolve after a delay (in milliseconds) that is
// passed as an argument to the function. Test this function by logging a message to the console once the promise
// resolves.
// 5. **Promise-based Countdown:**
//  - Refactor the `countdown` function to return a Promise that resolves when the countdown completes. Use the `wait`
// function from the previous question to handle the delay between countdown steps.
// 6. **Chaining Promises:**
//  - Create a function `delayedLogSequence` that takes an array of messages and delays (in milliseconds). The function
// should use Promises to log each message to the console in sequence, waiting for the specified delay between each log.
// 7. **Using `async/await` with Promises:**
//  - Rewrite the `delayedLogSequence` function using `async/await` instead of chaining `.then()` methods. Ensure the
// function logs each message with the specified delay.
// 8. **Combining `setTimeout` and Promises:**
//  - Create a function called `randomDelayMessage` that logs a message to the console after a random delay between 1
// and 5 seconds. Use `setTimeout` and a Promise to implement this.
// 9. **Using `setInterval` with Promises:**
//  - Write a function called `repeatAction` that takes an action (a function), an interval (in milliseconds), and a duration (in
// milliseconds). Use `setInterval` to repeatedly execute the action at the specified interval, but stop after the specified
// duration. Return a Promise that resolves when the repeating action stops.

//Q1
function delayedMessage(msg, delay){
    setTimeout(() => {
        console.log(msg);
    },delay);
}
delayedMessage("This msg is delayed", 2000);

//Q2
// function countdown(startNumber) {
//     let currentNumber = startNumber;

//     const number = setInterval(() => {
//         if (currentNumber >= 0) {
//             console.log(currentNumber);
//             currentNumber--;
//         } else {
//             clearInterval(number); 
//         }
//     }, 1000); 
// }
// countdown(5); 

//Q3
// function countdown(startNumber, callback) {
//     let currentNumber = startNumber;

//     const number = setInterval(() => {
//         console.log(currentNumber);
//         currentNumber--;

//         if (currentNumber < 0) {
//             clearInterval(number); 
//             console.log("Countdown complete!");
//             if (callback){
//                 return callback(); 
//             }
//         }
//     }, 1000); 
// }
// countdown(5, () => {
//     console.log("This is the callback function running after the countdown!");
// });

//Q4
// function wait(delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, delay);
//     });
// }

// wait(2000)
//     .then(() => {
//     console.log("This message is logged after a 2-second delay!");
// });

//Q5
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); 
        }, delay);
    });
}
function countdownPromise(startNumber) {
    let currentNum = startNumber;

    return new Promise(async (resolve) => {
        while (currentNum >= 0) {
            console.log(currentNum);
            await wait(1000); 
            currentNum--;
        }
        console.log("Countdown finished!");
        resolve(); 
    });
}
countdownPromise(5).then(() => {
    console.log("This message is logged after the countdown completes!");
});

//Q6
// function delayedLogSequence(messages) {
//     let promise = Promise.resolve();

//     messages.forEach(({ message, delay }) => {
//         promise = promise.then(() => 
//             new Promise((resolve) => {
//                 setTimeout(() => {
//                     console.log(message);
//                     resolve();
//                 }, delay);
//             })
//         );
//     });

//     return promise;
// }
// delayedLogSequence([
//     { message: "First message", delay: 1000 },
//     { message: "Second message", delay: 2000 },
//     { message: "Third message", delay: 1500 }
// ]);

//Q7
async function delayedLogSequence(messages) {
    for (const { message, delay } of messages) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log(message);
                resolve();
            }, delay);
        });
    }
}
delayedLogSequence([
    { message: "First message", delay: 1000 },
    { message: "Second message", delay: 2000 },
    { message: "Third message", delay: 1500 }
]);

//Q8
function randomDelayMessage(message) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 5000) + 1000;
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}
randomDelayMessage("This message is logged after a random delay.");


//Q9
function repeatAction(action, interval, duration) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            action();
        }, interval);

        setTimeout(() => {
            clearInterval(intervalId);
            resolve();
        }, duration);
    });
}
repeatAction(() => {
    console.log("Action executed");
}, 1000, 5000).then(() => {
    console.log("Stopped repeating action.");
});
