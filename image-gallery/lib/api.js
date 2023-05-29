const API_KEY = process.env.PEXELS_API_KEY; //creating a variable API_KEY that accesses our pexels environment using process.env

export const getCuratedPhotos = async () => { //creatting an asynchronous function getCuratedPhotos that using the fetch method to fetch data from our API
    const res = await fetch(
        `https://api.pexels.com/v1/curated?page=11&per_page=18`, //send the 11th page and 18 photos per page
        {
            headers:{
                Authorization: API_KEY
            },
        }
    );
    const responseJson = await res.json(); //Passes the response in JSON format
    return responseJson.photos;
};
