import postMessage from '../models/postMessage.js';

export const getposts = async (req,res)=>{
    try {
        const postMessage = await postMessage.find();
        console.log(postMessages);

    res.status(200).json(postMessages)
    
    }catch(error){
        res.status(404).json({message:error.message});
    }

    }
   
export const createpost = async (req,res) => {
 const body = req.body;
 const newpost = new postMessage(post);
 try{
    await newpost.save();
    res.status(201).json(newpost);

 }  catch (error) {
    res.status(409).json({message:error.message});

 }

}
