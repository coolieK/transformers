import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import { ask } from "@reach-sh/stdlib";

if (
  process.argv.length < 3 ||
  ["Autobot", "Decepticon"].includes(process.argv[2]) == false
) {
  console.log("Usage: reach run index [Autobot|Decepticon]");
  process.exit(0);
}
const race = process.argv[2];
console.log(`Your race is ${race}`);

const stdlib = loadStdlib(process.env);
console.log(`The consensus network is ${stdlib.connector}.`);
const suStr = stdlib.standardUnit;
const toAU = (su) => stdlib.parseCurrency(su);
const toSU = (au) => stdlib.formatCurrency(au, 4);
const iBalance = toAU(1000);
const showBalance = async (acc) =>
  console.log(`Your balance is ${toSU(await stdlib.balanceOf(acc))} ${suStr}.`);

const assertEq = (expected, actual) => {
  const exps = JSON.stringify(expected);
  const acts = JSON.stringify(actual);
  console.log("assertEq", { expected, actual }, { exps, acts });
  stdlib.assert(exps === acts);
};

const common = (Who) => ({
  get: () => {
    console.log(`Address: ${Who}`);
    return Who.length;
  },
  check: assertEq,
});

// Autobot
if (race === "Autobot") {
  const acc = await stdlib.newTestAccount(iBalance);
  const autobotInteract = {
    ...common(acc.getAddress()),
  };

  await showBalance(acc);
  const ctc = acc.contract(backend);
  await ctc.participants.Autobot(autobotInteract);
  await showBalance(acc);
  console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);

  // Decepticon
} else {
  const acc = await stdlib.newTestAccount(iBalance);
  const decepticonInteract = {
    ...common(acc.getAddress()),
  };

  const info = await ask.ask("Paste contract info:", (s) => JSON.parse(s));
  const ctc = acc.contract(backend, info);

  console.log(`A decepticon just arrived 👾`);
  //await showBalance(acc);
  //await ctc.p.Deceptor(decepticonInteract);

  await showBalance(acc);
}

ask.done();
