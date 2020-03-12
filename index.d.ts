type Child = string | Node | null | undefined | readonly Child[]

export default function crelt(elt: string | HTMLElement,
                              attrs?: Child | {[attr: string]: any},
                              ...children: Child[]): HTMLElement
