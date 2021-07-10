import {createContext, ReactNode, useState, useEffect} from 'react'
import firebase from 'firebase'
import {auth} from '../../services/firebase'

type User = {
    id: string;
    name: string;
    avatar: string
}

type AuthContext = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>
}

type ChildrenProps = {
    children: ReactNode
}

//eslint-disable-next-line
export const AuthContext = createContext({} as AuthContext)

export function AuthContextProvider ({children} : ChildrenProps) {

    const [user, setUser] = useState<User>()

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(user => {
           if(user){
               const {displayName, photoURL, uid} = user
               if(!displayName || !photoURL){
                   throw new Error ('Missing data from Google account.')
               }

               setUser({
                   id: uid,
                   name: displayName,
                   avatar: photoURL
               })
           }
       })
       return () => {unsubscribe()}
    },[])

    async function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        const result = await auth.signInWithPopup(provider)
        if(result.user){
            const {displayName, photoURL, uid} = result.user
            if(!displayName || !photoURL){
                throw new Error ('Missing data from Google account.')
            }
            setUser({
                id: uid,
                name:displayName,
                avatar: photoURL
            })
        }
    }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )
}
