//Yelp crendentials
const apiKey='SNVFhremgTZz5AuvJbElGo9uUhJC-kKq4vFMA2B-QKuBOnO8mfous_jXpoL6P1QSIKw-u8atj4rwHU9SVRKVzbNq6BE5femktlwIlrLPllqFnQaC_84BJFIkSn_UXnYx'
const clientID='5miZqFIgWmhb85hEArfZsw'
//Yelp module to store functinality needed to iteract with Yelp API
const Yelp={
    search(term, location, sortBy){
        //Enable CORS Anywhere
        //pass browser header into fetch
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {headers: {
            Authorization: `Bearer ${apiKey}`}
        //convert returned response into JSON 
        }).then(response =>{
            return response.json();
        //Retrieve list of businesses from the converted JSON response
        }).then(jsonResponse =>{
        /*If response has a business key, return an array that has all of the business' properties:
        name, address, city, etc.
        If not, let site crash
        */
            if(jsonResponse.businesses){

                return jsonResponse.businesses.map(business=>{
                    
                });
            }
        })
    }
}


