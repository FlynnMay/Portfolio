<script>
    import { MoveDown, Plus } from "@lucide/svelte";
    import Topo from "$lib/assets/topo.svelte";
    import ContentCard from "$lib/components/ContentCard.svelte";
    import { onMount } from "svelte";

    let fonts = ["badeen", "sigmar", "sonsie"]
    let titleFont = fonts[0];
    let pauseFont = false;

    function handleMouseOver() {
        pauseFont = true;
    }

    function handleMouseLeave() {
        pauseFont = false;
    }

    onMount(() => {
        function animateFont() {
            if (pauseFont) return;
            const validFonts = fonts.filter((fontName) => {
                return fontName != titleFont;
            })

            const index = Math.floor(Math.random() * validFonts.length);
            titleFont = validFonts[index]
            console.log(index);
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
            <h1 class="text-9xl font-extrabold text-bone font-{titleFont}" on:mouseover={handleMouseOver} on:mouseleave={handleMouseLeave}>Flynn May</h1>
        </div>

        <!-- <div class="bg-kombu min-w-screen"><Plus class="text-white" /></div> -->
    </div>

    <!-- Content -->
    <div class="flex flex-col min-w-full min-h-screen items-center space-y-10">
        <ContentCard title="I have been busy..." footer="1/3"></ContentCard>
        <ContentCard title="I have been lazy..." footer="2/3"></ContentCard>
        <ContentCard title="I have been sleepy..." footer="3/3"></ContentCard>
    </div>
</div>