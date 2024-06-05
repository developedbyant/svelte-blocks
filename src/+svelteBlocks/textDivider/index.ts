import type { Children,Attrs, Events } from "../types";
import { default as Component } from "./component.svelte";
export default Component
export type T = { children: Children; } & Events<"div"> & Attrs<"div">