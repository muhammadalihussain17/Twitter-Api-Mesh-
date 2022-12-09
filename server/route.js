const express = require('express');
const router = express.Router();
const needle = require('needle');


const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAPY4hwEAAAAAKmKJtHV4DoJiPfgdS6JKL2HpgtE%3DZ9gapDz1Wl2Zct37h1XjEVL1gwNtyWbxXb96zdSpn0p1ze0TLc';
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

const API_KEY = 'dTCNhESOOR4m9wn0kefqpbYkF'
const API_KEY_SECRET = 'F7tqD9jKzXEUABQYDHuRVCViwqyIDhQ8YFy6aQ8AUjvyysJYNv'
const ACCESS_TOKEN = '1087132722659844098-hLk2qxyIx3h5nAGdLUjEx6cZk3A2fR'
const ACCESS_TOKEN_SECRET = 'bIDmm0uDG3mJBoW5MUtETi44oLVlILSuhC7eHkRTIoNup'


const getTweets = async(id) => {
    try
    {

    const params = {
        'query': 'from:'+id+' -is:retweet',
        'tweet.fields':  'public_metrics', 
        'user.fields': 'profile_image_url',
        'expansions': 'author_id',


    }
    const response = await needle ('get', endpointUrl, params,{
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${BEARER_TOKEN}`
        }
    })

    if (response.statusCode !== 200) {
        if (response.statusCode === 403) {
            res.status(403).send(response.body);
        } 
        else {
            throw new Error(response.body.error.message);
        }
    }
    if (response.body)
        return response.body;
    else
        throw new Error("Unsuccessful Request");   
}
   catch(error)
   {
    res.send(error);

   }
}

const getTweetAnalysis = async(req, res) => {
    
    try {
        let twitterData =await getTweets(req.params.id);
        //res.send(twitterData);
        res.send(await (twitterData));

    } catch (error) {
        res.send(error);
    }

}

const twitterObject = {}
const analyze = async(twitterData) =>
{
    const twitterObject = {}

    twitterObject["username"] = twitterData.includes.users[0].username;
    twitterObject["name"] = twitterData.includes.users[0].name;
    console.log(twitterData.data[0].text)
    let averageCharacter = 0;
    let averageWord = 0;
    let totalCharacter = 0;
    let totalWord = 0;
    let texts = twitterData.data;
    if(texts)
    {
        for(let index =0 ; index < twitterData.data.length ; index++)
        {
            totalCharacter += texts[index].text.length;
            totalWord += texts[index].text.split(" ").length;
        }
    }
   if(twitterData.meta.result_count > 0)
    {
        twitterObject["usesActively"] =  true;
        averageCharacter = totalCharacter/twitterData.meta.result_count;
        averageWord = totalWord/twitterData.meta.result_count;
    }
    else
    {
        twitterObject["usesActively"] =  false;
    }
    twitterObject["averageWordCount"] = averageWord;
    twitterObject["averageCharacterCount"] = averageCharacter;
    console.log(twitterObject);

    return twitterObject;
}

//API route 
router.get("/api/tweet/:id",getTweetAnalysis);
router.get("/api/tweets/:id", getTweets);




/*
API_KEY = 'dTCNhESOOR4m9wn0kefqpbYkF'
API_KEY_SECRET = 'F7tqD9jKzXEUABQYDHuRVCViwqyIDhQ8YFy6aQ8AUjvyysJYNv'
ACCESS_TOKEN = '1087132722659844098-hLk2qxyIx3h5nAGdLUjEx6cZk3A2fR'
ACCESS_TOKEN_SECRET = 'bIDmm0uDG3mJBoW5MUtETi44oLVlILSuhC7eHkRTIoNup'
BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAPY4hwEAAAAAKmKJtHV4DoJiPfgdS6JKL2HpgtE%3DZ9gapDz1Wl2Zct37h1XjEVL1gwNtyWbxXb96zdSpn0p1ze0TLc'
*/



module.exports=router;