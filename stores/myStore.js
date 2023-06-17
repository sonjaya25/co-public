import { defineStore } from 'pinia'

export const useParamsStore = defineStore('params', () => {
    const data = ref('ccccc');
    const setData = (_data)=>{
        data.value = _data;
    };

    return {data, setData}
});