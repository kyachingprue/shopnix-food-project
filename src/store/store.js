import { configureStore, createSlice } from '@reduxjs/toolkit'
const cart = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    add(s, { payload }) {
      const i = s.items.find(x => x.id === payload.id)
      i ? i.qty++ : s.items.push({ ...payload, qty: 1 })
    },
    inc(s, { payload }) {
      s.items.find(x => x.id === payload).qty++
    },
    dec(s, { payload }) {
      const i = s.items.find(x => x.id === payload)
      i.qty--
      if (i.qty < 1) s.items = s.items.filter(x => x.id !== payload)
    },
    remove(s, { payload }) {
      s.items = s.items.filter(x => x.id !== payload)
    },
    clear(s) {
      s.items = []
    }
  }
})
export const { add, inc, dec, remove, clear } = cart.actions
export const store = configureStore({ reducer: { cart: cart.reducer } })
