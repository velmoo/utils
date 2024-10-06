import type { Obj, OverrideMerge } from "@velmoo/types";

export const mergeObjects = <Objects extends Obj[]>(...objects: Objects): OverrideMerge<Objects> =>
  Object.assign({}, ...objects);
