import { create } from "zustand";

export const useFeatureStore = create((set) => ({
    inViewFeature: null,
    setInViewFeature: featrue => set({ inViewFeature: featrue})
}))