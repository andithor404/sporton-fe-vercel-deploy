import {create} from "zustand";
import { Product } from "../types";
import { persist } from "zustand/middleware";

export interface CartItem extends Product{
    qty: number;
}

export interface customerInfo{
    customerName:string;
    customerContact:number | null;
    customerAddress:string;
}

interface CartStore{
    customerInfo: customerInfo | null;
    items:CartItem[];
    setCustomerInfo:(info: customerInfo) => void;
    addItem:(Product: Product, qty?: number) => void;
    removeItem:(ProductId: string) => void;
    reset: () => void;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            customerInfo: null,
            items: [],
            setCustomerInfo: (info) =>{
                set ({customerInfo: info})
            },
            addItem: (Product, qty = 1) =>{
                const items = get().items;
                const existingItem = items.find((item) => item._id === Product._id)

                if(existingItem){
                    set({
                        items: items.map((item) =>
                        item._id === Product._id ? {...item, qty: item.qty + qty}: item)
                    })
                } else{
                    set({items: [...items, {...Product, qty}]});
                }
            },
            removeItem: (productId) =>{
                set({items: get().items.filter((item) => item._id !== productId)})
            },
            reset: () => {
                set({items: [], customerInfo: null})
            }
        }),
        {
        name: "cart-storage",
    }
    )
)