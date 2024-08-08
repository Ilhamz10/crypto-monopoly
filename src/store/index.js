import { create } from 'zustand';
import { stepsSlice } from '../models/register/store/steps-slicer';

export const useBoundStore = create((...a) => ({
	...stepsSlice(...a),
}));
