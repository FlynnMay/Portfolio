<script>
    import { MoveDown, Plus } from "@lucide/svelte";
    import ContentCard from "$lib/components/ContentCard.svelte";
    import { onMount } from "svelte";

    let fonts = ["Badeen Display", "Sigmar One", "Sonsie One"]
    let titleFont = fonts[0];
    let pauseFont = false;

    function handleMouseOver() {
        pauseFont = true;
    }

    function handleMouseLeave() {
        pauseFont = false;
    }

    onMount(async () => {
        await document.fonts.ready;
        function animateFont() {
            if (pauseFont) return;
            const validFonts = fonts.filter((fontName) => {
                return fontName != titleFont;
            })

            const index = Math.floor(Math.random() * validFonts.length);
            titleFont = validFonts[index]
        }
        setInterval(animateFont, 500)
    })
</script>

<div class="min-w-full min-h-screen max-h-max bg-kombu">
    <!-- Menu -->
    <div class="fixed left-6 top-6 scale-">
        <Plus class="text-white" />
    </div>

    <!-- Title -->
    <div class="flex h-screen items-center justify-center">
        <div class="flex bg-kombu items-center">
            <!-- svelte-ignore a11y_mouse_events_have_key_events -->
            <h1 class="text-9xl font-extrabold text-bone" style="font-family: {titleFont}" on:mouseover={handleMouseOver} on:mouseleave={handleMouseLeave}>Flynn May</h1>
        </div>

    </div>
    <div class="absolute bottom-5 left-1/2 -translate-x-1/2 bg-kombu"><MoveDown class="text-white animate-bob" /></div>

    <!-- Content -->
    <div class="flex flex-col min-w-full min-h-screen items-center space-y-10">
        <ContentCard title="I have been busy..." footer="1/3"></ContentCard>
        <ContentCard title="I have been lazy..." footer="2/3"></ContentCard>
        <ContentCard title="I have been sleepy..." footer="3/3"></ContentCard>
    </div>
</div>