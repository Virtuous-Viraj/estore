const imageValidate = (images) =>{
    let imagesTable = []
    if(Array.isArray(images))
    {
        imagesTable = images
    }
    else{
        imagesTable.push(images)
    }

    if(imagesTable.length > 4)
    {
        return {error: "Send only 4 images at once"}
    }

    for(let image of imagesTable)
    {
        if(image.size > 2* 1048576)
        {
            return {error : "Size must be less than 2Mb"}
        }
        const filetypes = /jpg|jpeg|png/

        const mimetype = filetypes.test(images.mimetype)

        if(!mimetype) return {error : "Incorrect file type (jpg, jpeg, png allowed)"}

    }
    return {error : false}
}

module.exports = imageValidate