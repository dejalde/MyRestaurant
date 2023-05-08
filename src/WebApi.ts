export const Menu = {
    getAll: async()=>{
        const response= await fetch("https://localhost:7214/api/Menus");
        return response.json();
    },
    getById: async (id: number)=>{
        const response = await fetch(`https://localhost:7214/api/Menus/${id}`);
        return response.json();
    },
    create: async (data: any)=> {
        const response = await fetch("https://localhost:7214/api/Menus",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json"
            }
        });
        return response.json();
    }
}

export const Category = {
    getAll: async()=>{
        const response= await fetch("https://localhost:7214/api/Categories");
        return response.json();
    },
    getById: async (id: number)=>{
        const response = await fetch(`https://localhost:7214/api/Categories/${id}`);
        return response.json();
    },
    create: async (data: any, id:number)=> {
        const response = await fetch(`https://localhost:7214/api/Categories?menuId=${id}`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json"
            }
        });
        return response.json();
    },
    delete: async (id: number)=>{
        const response = await fetch(`https://localhost:7214/api/Categories/${id}`,{
            method: "DELETE"
        });
    },
    getCategoriesByMenuId: async (id: number)=>{
        const response = await fetch(`https://localhost:7214/api/Categories/menuId = ${id}`);
        return response.json();
    },
    put: async (data: any, id: number)=> {
        const response = await fetch(`https://localhost:7214/api/Categories/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json"
            }
        });
    }
}

export const Dish = {
    getAll: async()=>{
        const response= await fetch("https://localhost:7214/api/Dishes");
        return response.json();
    },
    getById: async (id: number)=>{
        const response = await fetch(`https://localhost:7214/api/Dishes/${id}`);
        return response.json();
    },
    create: async (data: any, id: number)=> {
        const response = await fetch(`https://localhost:7214/api/Dishes/${id}`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json"
            }
        });
        return response.json();
    },
    delete: async (id: number)=>{
        const response = await fetch(`https://localhost:7214/api/Dishes/${id}`,{
            method: "DELETE"
        });
    },
    getDishesByCategoryId: async (id: number)=>{
        const response = await fetch(`https://localhost:7214/api/Dishes/categoryId = ${id}`);
        return response.json();
    },
    put: async ( data: any, id: number)=> {
        const response = await fetch(`https://localhost:7214/api/Categories/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json"
            }
        });
    }
}

