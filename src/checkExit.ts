export function checkExit(input: string) {
  input.toLocaleLowerCase() === "exit" && process.exit();
}
