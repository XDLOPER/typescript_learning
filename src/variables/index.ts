import {getIDRandom} from '../functions/index'

export let isLogged:boolean;
export const getUserId = getIDRandom(10000,100000000)
export const JSONobject:object = JSON.parse('{"userID":"231313"}')


