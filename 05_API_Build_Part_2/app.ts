import { Application, Context} from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();

// STATIC FILE
app.static('/','./public' )

app.get("/", async (ctx : Context) => {
    console.log("Welcome Home");
    await ctx.file("./public/index.html");
});

app
.get("/books", (ctx : Context) => {
    console.log("Welcome to /books ");
    ctx.string("all books");
    ctx.json([
        { title: "swinger the moon", author:"John Doe"},
        { title: "swimmer on the moon", author:"Anna Doe"}, 
    ], 200);
})
.get('/books/:id', () => {})
.post('/books', () => {})
.delete('/books/:id', () => {})




app.start({port: 8080});


