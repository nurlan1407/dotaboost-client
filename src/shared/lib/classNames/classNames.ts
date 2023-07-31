type Mods = Record<string, boolean|string>
const obj:Mods = {
  hovered: true,
  selectable: false,
};

// cls = classname
export const classNames = (cls:string, mods:Mods = {}, additional:string[] = []):string => [cls,
  ...additional,
  Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(([cls, value]) => cls),
].join(' ');