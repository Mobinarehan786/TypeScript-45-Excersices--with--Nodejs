function Make_album(artist_name: string,album_tittle: string,tracks?:number){
    let album:{artist:string,tittle:string ,tracks?:number}={
        artist:artist_name,
        tittle:album_tittle
    }
    if (tracks !== undefined){
        album.tracks=tracks;
    }
return album;
}
// calling three functions and creating 3 variables with different values

let album1 =Make_album("Mobina","Album tittle 1")


let album2 =Make_album("Reema","Album tittle 2")
// Calling a make album function with 3rd parameter

let album3 =Make_album("Rahima","Album tittle 3",20)

// print values of our objects created by functions
console.log(album1);
console.log(album2);
console.log(album3);