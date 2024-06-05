<script lang="ts">
    import Calendar from "svelteBlocks/calendar";
    let value:any
</script>

{JSON.stringify(value)}
<Calendar bind:value/>
<Calendar bind:value options={{ bg:"purple",color:"green",border:"hotpink",onSelectedBg:"yellow",onSelectedColor:"blue" }}/>