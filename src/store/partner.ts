import { PartnerType } from '@/interface/partner';
import { produce } from 'immer';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';


interface PartnerState {
  currentPartner: PartnerType | null;
  setCurrentPartner: (partner: PartnerType) => void;
}

export const PartnerStore = create<PartnerState>((set) => ({
  currentPartner: null,
  setCurrentPartner: (partner: PartnerType) =>
    set(
      produce((state: PartnerState) => {
        state.currentPartner = partner;
      }),
    ),
}));
if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('profileStore', PartnerStore);
}
