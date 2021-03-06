import {useContext} from 'react'
import {AuthContext} from '../context/Auth/AuthContext'

export function useAuth(){
    return useContext(AuthContext)
}