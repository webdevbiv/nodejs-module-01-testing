import { writeFile, readFile } from 'fs/promises';

const message = 'Hello, World!';

function sum(a, b) {
  return a + b;
}
console.log(message);
console.log(`The sum of 5 and 3 is: ${sum(5, 3)}`);

try {
  await writeFile('output.txt', message);
  console.log('Message written to output.txt');

  const data = await readFile('output.txt', 'utf8');
  console.log(`Read from file: ${data}`);
} catch (error) {
  console.error(error);
}
