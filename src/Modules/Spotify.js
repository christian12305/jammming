let accessToken;
const client_id = '301a8d2713ee4ec39eac2b3f39a1b581';
//const redirect_uri = 'http://localhost:3000/';
const redirect_uri = 'https://chris-jamming.netlify.app/'


const Spotify = {

    getAccessToken(){

        const accessTokenExtract = window.location.href.match(/access_token=([^&]*)/);
        const expiresInExtract =  window.location.href.match(/expires_in=([^&]*)/);

        if(accessToken){
            return accessToken;
        }

        else if(accessTokenExtract && expiresInExtract){

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
        }   

    },

    async search(input){

        accessToken = this.getAccessToken();
        
        try{

            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${input}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
    
            if(response.ok){
                const jsonResponse = await response.json();
    
                if (jsonResponse.tracks === []) {
                    return [];
                }else{
                    return jsonResponse.tracks.items.map(track => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri,
                        image: track.album.images[0].url
                    }));    
                }
            }

        }catch(e){
            console.log(e)
        }
    },

    async savePlaylist(playlistName, tracksUris){

        if(!playlistName || !tracksUris){
            return;
        }

        //GET user id
        accessToken = this.getAccessToken();

        const headers = {Authorization: `Bearer ${accessToken}`};

        let userId;
        let playlistId;

        try {
            const response = await fetch('https://api.spotify.com/v1/me', {
                headers: headers
            });

            if(response.ok){
                const jsonResponse = await response.json();

                userId = jsonResponse.id;

                //saving playlist
                const responseName = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({name: playlistName})
                });

                if(responseName.ok){
                    const jsonResponseName = await responseName.json();

                    playlistId = jsonResponseName.id;

                    await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({uris: tracksUris})
                    });
                }
            }
        } catch (e) {
            console.log(e)
        }

    }

}

export default Spotify;