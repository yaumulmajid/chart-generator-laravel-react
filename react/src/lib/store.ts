import { create } from "zustand";
import { IProduct } from "./type";

interface SiteNameState {
    siteName: string;
    setSiteName: (name: string) => void;
}

export const useSiteNameStore = create<SiteNameState>((set) => ({
    siteName: "",
    setSiteName: (name) => set({ siteName: name }),
}));

interface ProductState {
    selectedProducts: IProduct[];
    toggleProduct: (product: IProduct) => void;
    resetProducts: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
    selectedProducts: [],
    toggleProduct: (product) =>
        set((state) => {
            const exists = state.selectedProducts.some(
                (p) => p.id === product.id
            );
            if (exists) {
                return {
                    selectedProducts: state.selectedProducts.filter(
                        (p) => p.id !== product.id
                    ),
                };
            } else {
                return {
                    selectedProducts: [...state.selectedProducts, product],
                };
            }
        }),
    resetProducts: () => set({ selectedProducts: [] }),
}));
