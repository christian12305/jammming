let accessToken;
const client_id = '301a8d2713ee4ec39eac2b3f39a1b581';
const redirect_uri = 'http://localhost:3000/';

const Spotify = {

    getAccessToken(){

        if(accessToken){
            return accessToken;
        }

        const accessTokenExtract = window.location.href.match(/access_token=([^&]*)/);
        const expiresInExtract =  window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenExtract && expiresInExtract){

            accessToken = accessTokenExtract[1];

            const expiresIn = Number(expiresInExtract[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000); //multiplied by 1000 because we need seconds instead of ms
            
            //clear access token from url
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }else{
            var scope = 'playlist-modify-public';
            const url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}`;
            window.location = url;
            return false;
        }        
    },

    search(input){

        console.log(input);

        const accessToken = Spotify.getAccessToken();

        if(accessToken){
            return fetch(`https://api.spotify.com/v1/search?type=track&q=${input}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then(response =>{
                return response.json();
            }).then(jsonResponse =>{
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map(track =>({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                })
                );
            });
        }

        

    }

}

export default Spotify;