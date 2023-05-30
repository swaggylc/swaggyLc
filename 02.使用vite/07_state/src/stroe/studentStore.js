import { defineStore } from "pinia";
export const useStudentStore = defineStore("student", {
    state: () => ({
        name:'孙悟空',
        age:18,
        gender:'男',
        address:'花果山',
        skills:['七十二变','筋斗云','法天象地']
    }),
    getters: {
        title:(state)=>{
            return '我叫'+state.name
        }
    },
    actions: {
        growUp(){
            this.age++
        }   
    }
});