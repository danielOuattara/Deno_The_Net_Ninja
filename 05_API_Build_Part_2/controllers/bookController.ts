
import { Context} from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { Book } from './../model/bookModel.ts'


let books: Book =  [
    { id: 1, title: "swinger the moon", author:"John Doe", pages: 300},
    { id: 2, title: "swimmer on the moon", author:"Anna Doe", pages: 250}, 
    { id: 3, title: "Music for every one", author:"Maestro", pages: 350}, 
]

export const getAllBooks = (ctx: Context) => {
    console.log(ctx.request);
    return ctx.json(books, 200)

}
export const getOneBook = (ctx: Context) => {
    console.log(ctx.request)
}
export const createBook = (ctx: Context) => {
    console.log(ctx.request)
}
export const deleteBook = (ctx: Context) => {
    console.log(ctx.request)
}