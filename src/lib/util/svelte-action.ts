export type SvelteActionFunction = (node: HTMLElement, ...args: any[]) => SvelteActionsReturnType | void;

export interface SvelteActionsReturnType {
  onUpdate?(...args: any): void;
  onDestroy?(): void;
}
