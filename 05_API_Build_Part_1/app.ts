import { Application, Context} from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();


// STATIC FILE
app.static('/','./public' )

app.get("/", async (ctx : Context) => {
    console.log("Welcome Home");
    await ctx.file("./public/index.html");
})

app.get("/home2", (ctx : Context) => {
    console.log("Welcome Home");
    ctx.file("./public/index.html");
})



.start({port: 8080});


