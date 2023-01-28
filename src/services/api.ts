import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'store';




const baseUrl ="https://jsonplaceholder.typicode.com"

export const safeKeepApi = createApi({
    reducerPath: 'safeKeepApi',
  baseQuery: fetchBaseQuery({
       baseUrl,
       prepareHeaders(headers, {getState}) {
        const store = (getState() as RootState )
        // const token = store?.userReducer?.user?.token
        const token = ""
        headers.set('Authorization', `Bearer ${token}`)    
        return headers
       },
     }),
     tagTypes: ['User'],
    endpoints: (builder) => ({
        // Examples API
      getUser: builder.query({
        query: () =>{
          return{
            url: "/users",
            method: 'GET',          
          }
        }, 
        providesTags: ['User']
        // invalidatesTags:['User']
      }),
       // Examples API
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
    }),
  });
  
  export const {  
    useGetUserQuery, 
    useUpdateUserMutation
   } =  safeKeepApi;