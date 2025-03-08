import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

// chai aur code pattern for upload file 111111111
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_APIKEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});
const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        //upload the file on cloudinary
        const  response = await cloudinary.uploader.upload(localFilePath , {
            resource_type : "auto"
        })
        //file has been uploaded successfull
        console.log("File is uploaded on cloudinary");
        response.url();
        return response;

    } catch (error){
        fs.unlinkSync(localFilePath) // remove the locally saves temporary file as the upload operation got failed
        return null;
    }
}



// cloudinaey websitw inbuilt pattern for upload file 222222222
// (async function() {

//     // Configuration
//     cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key: process.env.CLOUDINARY_APIKEY, 
//         api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
//     });
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();

export { uploadOnCloudinary }