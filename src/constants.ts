export enum ReturnCode {
  SUCCESSFUL = 0,
  PARTIALLY_SUCCESSFUL = 20001,
}

export const SUCCESS_CODES = [
  ReturnCode.SUCCESSFUL,
  ReturnCode.PARTIALLY_SUCCESSFUL,
];
