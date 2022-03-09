import {Get} from './publicApiService';

export const GetAllCategories = ()=>{
    const {data} = Get('categories');
    console.log(data,"resultado de servicio de categorias")
    return data;
}

export const GetCategoriesId = async ()=>{
    try {
        const {data} =  await Get('categories',`${1606}`);
        console.log(data);
        return data;
    } catch (error) {
        return error;
    }
   
}

