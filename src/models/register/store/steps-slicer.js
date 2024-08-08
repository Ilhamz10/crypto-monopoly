export const stepsSlice = (set) => ({
	regStep: 1,
	incRegStep: () => set((state) => ({ regStep: state.regStep + 1 })),
});
