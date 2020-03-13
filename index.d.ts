interface ChildArray extends ReadonlyArray<Child> {}

type Child = string | Node | null | undefined | ChildArray

export default function crelt(elt: string | HTMLElement,
                              attrs?: Child | {[attr: string]: any},
                              ...children: Child[]): HTMLElement
