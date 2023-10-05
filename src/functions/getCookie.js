export default function getCookie(name){
    let cookies = document.cookie
    cookies = cookies.split(";")
    cookies = cookies.filter(cookie => !cookie.includes("name"))[0]
    if(!cookies){
        
    throw new Response(" Couldn't get it")
    }
    cookies = cookies.replace(`${name}=`, "")
    // console.log(`1 ${cookies}`)
    return cookies
    
    }

export function removeCookie(){
        let cookies = document.cookie
        cookies = cookies.split(";")
        cookies = cookies.filter(cookie => !cookie.includes("jwt"))[0]
        if(!cookies){
            
        throw new Response(" Couldn't get it")
        }
        cookies = cookies.replace(`jwt=`, "")
        // console.log(`1 ${cookies}`)
        return cookies
        
        }