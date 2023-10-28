export function fetchAllProducts(){
    return new Promise(async(resolve)=>{
        const response=await fetch('http://localhost:8080/products')
        const data=await response.json()
        resolve({data})
    }
    )
}
export function filterAllProducts({filter,sort}){
    //filter[key]=category:smartphones,laptops,fragrances
    let query=''//very very basic things but you have to keep them in mind
        for(let key in filter)
        {
          const categoryValues=filter[key]
          if(categoryValues.length){
          const lastCategoryValue=categoryValues[categoryValues.length-1]
                query+=`${key}=${lastCategoryValue}&`
            }}
          
        
        for(let key in sort){
            query+=`${key}=${sort[key]}&`
        }

    return new Promise(async(resolve)=>{
        const response=await fetch('http://localhost:8080/products?'+query)
        const data=await response.json()
        resolve({data})
    }
    )
}
