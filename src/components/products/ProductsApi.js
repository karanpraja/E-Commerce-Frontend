export function fetchAllProducts(){
    return new Promise(async(resolve)=>{
        const response=await fetch('http://localhost:8080/products')
        const data=await response.json()
        resolve({data})
    }
    )
}
export function filterAllProducts({filter,sort,pagination}){
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
            query+=`${key}=${sort[key]}&`//_sort=1&_order=
        }
        for(let key in pagination){
            query+=`${key}=${pagination[key]}&`
        }

    return new Promise(async(resolve)=>{
        const response=await fetch('http://localhost:8080/products?'+query)
        const data=await response.json()
        const totalItems=await response.headers.get('X-Total-Count')
        resolve({responseData:{products:data,totalItems:totalItems}})
    }
    )
}
export function fetchAllCategories(){
    return new Promise(async(resolve)=>{
        const response=await fetch('http://localhost:8080/categories')
        const data=await response.json()
        resolve({data})
    }
    )
}
export function fetchAllBrands(){
    return new Promise(async(resolve)=>{
        const response=await fetch('http://localhost:8080/brands')
        const data=await response.json()
        resolve({data})
    }
    )
}
export function fetchProductDetails(id){
    return new Promise(async(resolve)=>{
        const response=await fetch('http://localhost:8080/products/'+id)
        const data=await response.json()
        console.log(data+"api")
        resolve({data})
    })
}


