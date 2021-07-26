import {GET_CONTACTS_SUCCESS,GET_CONTACTS_LOAD,GET_CONTACTS_FAIL} from '../constants/constContacts'
import axios from 'axios'
export const getContacts =()=> async dispatch =>{
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        const result = await axios.get(`/api/contact`)
        dispatch({type:GET_CONTACTS_SUCCESS,payload:result.data.res})
    } catch (error) {
        dispatch({type:GET_CONTACTS_FAIL,payload:error})
        console.log(error)
    }
}

// Delete contact
export const deleteContact = (id)=> async dispatch =>{
    try {
        const result = await axios.delete(`/api/contact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

// add contact
export const addContact = (user)=> async dispatch =>{
    try {
        const result = await axios.post(`/api/contact`,user)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}