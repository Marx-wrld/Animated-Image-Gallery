const API_KEY = process.env.PEXELS_API_KEY; //creating a variable API_KEY that accesses our pexels environment using process.env

export const getCuratedPhotos = async () => { //creatting an asynchronous function getCuratedPhotos that using the fetch method to fetch data from our API
    const res = await fetch(
        `https://api.pexels.com/v1/curated?page=10&per_page=12`, //send the 11th page and 18 photos per page
        {
            headers:{
                Authorization: API_KEY,
            },
        }
    );
    const responseJson = await res.json(); //Passes the response in JSON format
    return responseJson.photos;
};

export const getQueryPhotos = async (query) => {
    const res = await fetch(`https://api.pexels.com/v1/search?query=${query}`,
    //we have added a qeury parameter to the function and modified the API endpoint to include this query
    {
        headers: {
            Authorization: API_KEY,
        },
    }
    );
    const responseJson = await res.json();
    return responseJson.photos;
};

export const getPhotoById = async (id) => {
    const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
        //This section uses the photos endpoint to get a single image from pexels api
        //getPhotoById returns the reponseJson and not responseJson.photos
        headers: {
            Authorization: API_KEY,
        },
    });
    const responseJson = await res.json();
    return responseJson;
};