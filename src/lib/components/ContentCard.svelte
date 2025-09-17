<script>
    export let title = "Placeholder Title";
    export let footer = "";
</script>

<!-- Content Card -->
<div class="relative min-w-[97dvw] h-auto bg-tan rounded-2xl p-6">
    <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-kombu-mid">{title}</h2>
        <div class="w-[100px] h-[100px] bg-slate-800"></div>
    </div>

    {#if footer}
        <h2 class="mt-6 text-right text-xl font-semibold text-bone">{footer}</h2>
    {/if}
</div>
