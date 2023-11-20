import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../hooks/useHttp';

const initialState: Data = {
    data: [],
    status: 'idle',
    isEnd: false
}

export const fetchData = createAsyncThunk(
    'data/items',
    async () => {
        const { request } = useHttp();
        return request('https://layout.solvintech.ru/nuxt/api/');
    }
);

const getDataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => { state.status = 'pending' })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data.push(action.payload);
                state.status = 'idle';
            })
            .addCase(fetchData.rejected, (state) => { state.status = 'failed' })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = getDataSlice;

export default reducer;



interface Data {
    data: [],
    status: 'idle' | 'pending' | 'succeeded' | 'failed',
    isEnd: Boolean
}