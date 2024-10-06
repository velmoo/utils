import nodePath from "path";
import fs from "fs";

export const forwardToBackSlashes = (path: string) => path.replace(/\//g, "\\");
export const backToForwardSlashes = (path: string) => path.replace(/\\/g, "/");

export const arePathsEqual = (path1: string, path2: string) => nodePath.relative(path1, path2) === "";

export const withoutExt = (path: string) => /((?:\w|\\)*)\.\w+$/.exec(path)?.[1] ?? path;

export const isDir = (path: string) => fs.statSync(path).isDirectory();
