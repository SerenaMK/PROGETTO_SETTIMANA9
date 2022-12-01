import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
    providedIn: 'root'
})

export class PostService {

    posts: Post[] = [];

    constructor() { }

    private getAllPosts() {
        return fetch("http://localhost:3000/posts/").then((res): Promise<Post[]> => res.json())
    }

    fetchData() {
        let p = this.getAllPosts()
        p.then(res => {
            this.posts = res
        })
    }

    getPostFiltrati(a: boolean): Post[] {
        let newArray = this.posts.filter((e) => {
            return e.active == a
        })
        return newArray
    }

    attivaDB(id: number) {
        let postAttivato = this.posts.find((e) => e.id == id)
        if (postAttivato == undefined) {
            throw new Error("Elemento non trovato")
        }
        postAttivato.active = true
        return fetch("http://localhost:3000/posts/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postAttivato)
        }).then(res => {
            if (res.ok) {
                this.attivaService(id)
                //return -> then
                return true
            } else {
                //throw -> catch
                throw new Error("Attivazione fallita")
            }
        }).catch(err => {
            console.log("ERRORE", err);
        })
    }

    disattivaDB(id: number) {
        let postDisattivato = this.posts.find((e) => e.id == id)
        if (postDisattivato == undefined) {
            throw new Error("Elemento non trovato")
        }
        postDisattivato.active = false
        return fetch("http://localhost:3000/posts/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postDisattivato)
        }).then(res => {
            if (res.ok) {
                this.disattivaService(id)
                //return -> then
                return true
            } else {
                //throw -> catch
                throw new Error("Attivazione fallita")
            }
        }).catch(err => {
            console.log("ERRORE", err);
        })
    }

    attivaService(id: number) {
        this.posts = this.posts.map((e) => e.id == id ? { ...e, active: true } : e)
        // E' COME FARE:
        // this.posts = this.posts.map((e)=> {
        //   if(e.id == id) {
        //     e.active = true
        //   }
        //   return e
        // })
    }

    disattivaService(id: number) {
        this.posts = this.posts.map((e) => e.id == id ? { ...e, active: false } : e)
    }

    eliminaDB(id: number) {
        let postDaEliminare = this.posts.find((e) => e.id == id)
        if (postDaEliminare == undefined) {
            throw new Error("Elemento non trovato")
        }
        postDaEliminare.active = false
        return fetch("http://localhost:3000/posts/" + id, {
            method: "DELETE"
        }).then(res => {
            if (res.ok) {
                this.eliminaService(id)
                //return -> then
                return true
            } else {
                //throw -> catch
                throw new Error("Eliminazione fallita")
            }
        }).catch(err => {
            console.log("ERRORE", err);
        })
    }

    eliminaService(id: number) {
        this.posts = this.posts.filter(e => !(e.id == id))
    }
}
