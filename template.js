const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getLine = (() => {
  const getLineGen = (async function* () {
    for await (const line of rl) {
      yield line;
    }
  })();
  return async () => (await getLineGen.next()).value;
})();

const main = async () => {
  // const n = Number(await getLine());
  // const words = (await getLine()).split(" ");
  process.exit(0);
};

main();
