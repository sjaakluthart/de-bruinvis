export const LANGUAGE_SET = 'LANGUAGE_SET';

export function languageSet(payload) {
  return {
    type: LANGUAGE_SET,
    payload
  };
}
