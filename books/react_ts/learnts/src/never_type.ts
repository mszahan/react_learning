// never type requires the unreachable code
// like the infinit loop in funtion that never return anything
function foreverTask (taskName: string) : never {
    while (true) {
        console.log(`Doing ${taskName} over and over again..`)
    }
}