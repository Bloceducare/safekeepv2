import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'store';

const baseUrl ="/api"
export const safeKeepApi = createApi({
    reducerPath: 'safeKeepApi',
    baseQuery: fetchBaseQuery({
       baseUrl,
       prepareHeaders(headers, {getState}) {
        const store = (getState() as RootState )
        const token = store?.authReducer?.auth.accessToken
        headers.set('Authorization', `Bearer ${token}`)    
        return headers
       },  
     }),
     tagTypes: ['User'],
    endpoints: (builder) => ({       
      getUser: builder.query({
        query: () =>{
          return{
            url: "/users",
            method: 'GET',          
          }
        }, 
        providesTags: ['User']       
      }),      
      updateUser: builder.mutation({
        query: (body) =>{
          return{
            url: "/users",
            method: 'GET',  
            body        
          }
        },       
        invalidatesTags:['User']
      }),
      createVault:builder.mutation({
        query: (body) =>{
          return{
            url: "/vault",
            method: 'POST',  
            body        
          }
        },  
      })
    }),
  });
  
  export const {  
    useGetUserQuery, 
    useUpdateUserMutation,
    useCreateVaultMutation
   } =  safeKeepApi;