import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router
  .get("/", (context) => {
    context.response.headers.set("type", "plain/text");
    context.response.headers.set(
      "Access-Control-Allow-Origin",
      "http://localhost:8000"
    );
    context.response.body = "no input given!";
  })
  .get("/:string", (context) => {
    if (context.params.string) {
      context.response.headers.set("type", "plain/text");
      context.response.headers.set(
        "Access-Control-Allow-Origin",
        "http://localhost:8000"
      );
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
    let rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
      output += input[i].toUpperCase();
    } else {
      output += input[i].toLowerCase();
    }
  }
  return output;
}
