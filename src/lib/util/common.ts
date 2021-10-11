export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export function getColors(): Color[] {
  return ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
}
