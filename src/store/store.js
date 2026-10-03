import { configureStore, createSlice } from '@reduxjs/toolkit'

// Cart
const cart = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    add(state, { payload }) {
      const item = state.items.find(item => item.id === payload.id)

      if (item) {
        item.qty++
      } else {
        state.items.push({ ...payload, qty: 1 })
      }
    },

    inc(state, { payload }) {
      const item = state.items.find(item => item.id === payload)
      if (item) item.qty++
    },

    dec(state, { payload }) {
      const item = state.items.find(item => item.id === payload)

      if (!item) return

      item.qty--

      if (item.qty < 1) {
        state.items = state.items.filter(item => item.id !== payload)
      }
    },

    remove(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload)
    },

    clear(state) {
      state.items = []
    }
  }
})

// Wishlist
const wishlist = createSlice({
  name: 'wishlist',
  initialState: { items: [] },

  reducers: {
    toggleWishlist(state, { payload }) {
      const exists = state.items.some(item => item.id === payload.id)

      if (exists) {
        state.items = state.items.filter(item => item.id !== payload.id)
      } else {
        state.items.push(payload)
      }
    },

    removeFromWishlist(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload)
    },

    clearWishlist(state) {
      state.items = []
    }
  }
})

export const { add, inc, dec, remove, clear } = cart.actions

export const { toggleWishlist, removeFromWishlist, clearWishlist } =
  wishlist.actions

export const store = configureStore({
  reducer: {
    cart: cart.reducer,
    wishlist: wishlist.reducer
  }
})
