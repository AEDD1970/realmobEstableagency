import { typesRegister } from '../types/types'

const initialState = {
    user : {}
}

export const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesRegister.register:
            return{
                user: {
                    name: action.payload.name,
                lastName: action.payload.lastName,
                phone: action.payload.phone
                }
             }


        default:
            return state
    }


}