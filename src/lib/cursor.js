import { writable } from "svelte/store";

export const cursor = writable({ x: 0, y: 0 });

if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
        cursor.set({ x: e.clientX, y: e.clientY });
    });
}