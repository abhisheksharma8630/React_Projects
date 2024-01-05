import { useState,useEffect} from "react";
import { loadGapiInsideDOM,loadAuth2 } from "gapi-script";
import { Button } from "@mui/material";



let clientId = "1060301571893-itmbqhpsph2vj4uqc1qo040dcf7g778v.apps.googleusercontent.com";


const Logged = () => {
    const [user,setUser] = useState(null);
    const [gapi,setGapi] = useState(null);

    useEffect(() => {
        const loadGapi = async () => {
          const newGapi = await loadGapiInsideDOM();
          setGapi(newGapi);
        }
        loadGapi();
      }, []);
      useEffect(() => {
        if (!gapi) return;
    
        const setAuth2 = async () => {
          const auth2 = await loadAuth2(gapi, clientId, '')
          if (auth2.isSignedIn.get()) {
              updateUser(auth2.currentUser.get())
          } else {
              attachSignin(document.getElementById('customBtn'), auth2);
          }
        }
        setAuth2();
    }, [gapi]);
    useEffect(() => {
        if (!gapi) return;
    
        if (!user) {
          const setAuth2 = async () => {
            const auth2 = await loadAuth2(gapi,clientId, '')
            attachSignin(document.getElementById('customBtn'), auth2);
          }
          setAuth2();
        }
      }, [user, gapi])
      const updateUser = (currentUser) => {
        const name = currentUser.getBasicProfile().getName();
        const profileImg = currentUser.getBasicProfile().getImageUrl();
        setUser({
          name: name,
          profileImg: profileImg,
        });
      };
    
      const attachSignin = (element, auth2) => {
        auth2.attachClickHandler(element, {},
          (googleUser) => {
            updateUser(googleUser);
          }, (error) => {
          console.log(JSON.stringify(error))
        });
      };
    
      const signOut = () => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
          setUser(null);
          console.log('User signed out.');
        });
      }
    
      if(user) {
        return (
          <div className="flex gap-2">
                <div className="flex items-center gap-2">
                    <h2>{user.name}</h2>
                    <img src={user.profileImg} className="h-8 w-8 rounded-full" alt="user profile" />
                </div>
                <div id="" className="btn logout" onClick= {signOut}>
                    <Button>Logout</Button>
                </div>
          </div>
        );
      }
    
      return (
        <div className="container">
          <div id="customBtn" className="btn login">
            <Button>Login</Button>
          </div>
        </div>
      );
}
 
export default Logged;