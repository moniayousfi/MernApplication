
import {GET_CONTACTS_SUCCESS,GET_CONTACTS_LOAD,GET_CONTACTS_FAIL} from '../constants/constContacts'
const Initialstate = {
    loading:false,
    contacts:[],
    errors:null};

export const contactReducer = (state = Initialstate,{type,payload})=>{
    switch (type) {
        case GET_CONTACTS_LOAD:
            return  {...state,loading:true}
            
            case GET_CONTACTS_SUCCESS:
                return {...state,contacts:payload,loading:false}
                
            case GET_CONTACTS_FAIL:
                return {...state,errors:payload,loading:false}
                
        default: return state ;
            
    }
}
