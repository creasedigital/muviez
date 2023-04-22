export const SET_GLOBAL_APP_BUTTON_LINK = 'SET_GLOBAL_APP_BUTTON_LINK';
export const UNSET_GLOBAL_APP_BUTTON_LINK = 'UNSET_GLOBAL_APP_BUTTON_LINK';

export interface GlobalButtonState {
    link: string,
    id?: string,
}