import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Web3 from 'web3'

export interface Web3State {
  // eslint-disable-next-line
  web3Instance: any
  // eslint-disable-next-line
  ethereum: any
  // eslint-disable-next-line
  error: any
}

const initialState: Web3State = {
  web3Instance: null,
  ethereum: null,
  error: null
}

export const initWeb3 = createAsyncThunk('web3Slice/initWeb3', async () => {
  try {
    let provider
    // eslint-disable-next-line
    const { ethereum, web3 } = window as any

    if (ethereum) {
      provider = ethereum
    } else if (web3) {
      provider = web3.currentProvider
    } else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }

    const web3Instance = new Web3(provider)
    return { web3Instance, provider }
  } catch (err) {
    console.log('Cannot new web3')
  }
})

export const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {},
  extraReducers: {
    // Web3
    [initWeb3.fulfilled.toString()]: (state, { payload }) => {
      state.web3Instance = payload.web3Instance
      state.ethereum = payload.provider
    },
    [initWeb3.rejected.toString()]: (state, { error }) => {
      state.error = error
    }
  }
})

// Action creators are generated for each case reducer function
// export const {  } = web3Slice.actions

export default web3Slice.reducer
