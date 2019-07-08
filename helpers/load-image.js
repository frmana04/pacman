function createImage(urlImage){
    return new Promise ((resolve,reject)=>{
        let image = new Image();
        image.addEventListener('load',() =>{
            return resolve(image)
        })
        image.addEventListener('error',()=>{
            return reject(`Error loading ${urlImage}`)

        })
        image.src=urlImage;
    })
}

export {createImage};
