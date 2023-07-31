import type { Ora } from "ora";
import ora from "ora";

let spinner: Ora;

export function startLoading() {
  spinner = ora("正在努力回答中...\r").start();
}

export function stopLoading() {
  spinner.stop();
}
