import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router
  .get("/", (context) => {
    context.response.headers.set("type", "plain/text");
    context.response.headers.set("Access-Control-Allow-Origin", "*");
    context.response.body = "no input given!";
  })
  .get("/:string", (context) => {
    if (context.params.string) {
      context.response.headers.set("type", "plain/text");
      context.response.headers.set("Access-Control-Allow-Origin", "*");
      context.response.status = 200;
      const input = context.params.string.toString();
      const output = spongebobify(input);
      context.response.body = output;
    } else {
      context.response.body = "invalid request";
    }
  });

app.use(router.routes());

await app.listen({ port: 5000 });

function spongebobify(input: string): string {
  let output: string = "";
  for (let i = 0; i < input.length; i++) {
    let num = i === 0 ? 2 : 3;
    /* what this if statement does is check the previous character and if 
    it is uppercase then the current character has a 75% chance of being
    lowercase and vice versa. basically it just adds variation because being 
    purely random makes some things look too natural. */
    if (i > 0 && output[i - 1] === output[i - 1].toUpperCase()) {
      num = 1;
    }
    let rand = Math.floor(Math.random() * 4);
    if (rand < num) {
      output += input[i].toUpperCase();
    } else {
      output += input[i].toLowerCase();
    }
  }
  return output;
}
