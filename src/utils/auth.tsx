import axiosClient from "./axios";


const authSigIn=()=>axiosClient.post('/auth/signup')

export default{
  authSigIn
}