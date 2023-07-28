let accessToken;

const Spotify = {

    getAccessToken(){

        if(accessToken){
            return accessToken;
        }

        const accessTokenExtract = window.location.href.match(/access_token=([^&]*)/);
        const expiresInExtract =  window.location.href.match(/expires_in=([^&]*)/);
        
        if(accessTokenExtract && expiresInExtract){

            accessToken = accessTokenExtract[1];

            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000); //multiplied by 1000 because we need seconds instead of ms
            
            //clear access token from url
            window.history.pushState('Access Token', null, '/');
            console.log(accessToken);
            return accessToken;
        }else{
            const client_id = '301a8d2713ee4ec39eac2b3f39a1b581';
            const redirect_uri = 'http://localhost:3000/';

            var scope = 'playlist-modify-public';
        
            const url = 'https://accounts.spotify.com/authorize';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '?response_type=token';
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

            window.location = url;
        }        
    },



}