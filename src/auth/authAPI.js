export function fetchUserData(user){
    return new Promise(async (resolve)=>{
        const response=await fetch('http://localhost:8080/users',{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log(user)
        const data= await response.json()
        resolve({data})
    })
}