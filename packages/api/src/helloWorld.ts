export function HelloWorld(planet: string) {
  return `Hello ${planet} AND ${process.env.TEST_VARIABLE2}`;
}
