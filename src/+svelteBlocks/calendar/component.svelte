<script lang="ts">
    let { value=$bindable(),options={} }:import("./index").T = $props();
    import { createCalendar, type CreateCalendarProps } from '@melt-ui/svelte';
    /** Data attributes for container that can be use to change style */
    let dataAttrs = {
        "data-full-width": options.fullWidth || null,
        style:`
            --BG:${options.bg || "var(--sb-foreground)"};
            --COLOR:${options.color || "var(--sb-text-color)"};
            --HEADER-COLOR:${options.headerColor || "var(--sb-header-color)"};
            --BORDER:${options.border || "var(--sb-border-color)"};
            --SELECTED-BG:${options.onSelectedBg || "var(--sb-button-bg)"};
            --SELECTED-COLOR:${options.onSelectedColor || "var(--sb-button-color)"}`
    }
    /** Handle value change */
    const onValueChange:CreateCalendarProps['onValueChange'] = ({ next }) => {
        // update value
        if(next) value = { day:next.day,year:next.year,month:next.month }
        // return value
        return next
    }
    // calender builder
    const {
        elements: { calendar, heading, grid, cell, prevButton, nextButton },
        states: { months, headingValue, weekdays,value:currentValue },
        helpers: { isDateDisabled, isDateUnavailable }
    } = createCalendar({  onValueChange });
</script>

{#snippet Header()}
    <header class="header">
        <button class="navButton" {...$prevButton} use:prevButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6" />
            </svg>
        </button>
        <span class="title" {...$heading} use:heading>
            {$headingValue}
        </span>
        <button class="navButton" {...$nextButton} use:nextButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
            </svg>
        </button>
    </header>
{/snippet}

{#snippet CalendarBody()}
    {#each $months as month}
        <table {...$grid} use:grid>
            <thead aria-hidden="true">
                <tr>
                {#each $weekdays as day}
                    <th>
                        {day}
                    </th>
                {/each}
                </tr>
            </thead>
            <tbody>
                {#each month.weeks as weekDates}
                <tr>
                    {#each weekDates as date}
                        <td role="gridcell" aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}>
                            <div class="day" {...$cell(date, month.value)} use:cell>
                                {date.day}
                            </div>
                        </td>
                    {/each}
                </tr>
                {/each}
            </tbody>
        </table>
    {/each}
{/snippet}
  
<section class="calendar" {...$calendar} {...dataAttrs} use:calendar>
    {@render Header()}
    {@render CalendarBody()}
</section>

<style>
    .calendar{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: fit-content;
        padding: var(--sb-padding);
        background: var(--BG);
        color: var(--COLOR);
        border-radius: var(--sb-radius);
        box-shadow: 1px 2px 3px var(--sb-shadow);
        border: 1.5px solid var(--BORDER);
        /* make container full width */
        &[data-full-width="true"]{ width: 100%; }
    }

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .title{
        font-size: 16px;
        font-weight: 600;
        color: var(--HEADER-COLOR);
    }
    .navButton{
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
        stroke: var(--sb-icon-color);
        border-radius: 5px;
        width: 20px;
        /* on hover */
        &:hover{
            background: var(--sb-blur-bg);
        }
    }
    .day{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 5px;
        /* today */
        &[data-today]{
            background: var(--sb-blur-bg);
        }
        /* when selected */
        &[data-selected="true"]{
            background-color: var(--SELECTED-BG);
            color: var(--SELECTED-COLOR);
        }
        /* when focused */
        &[data-focused]:not([data-today]){
            outline: none;
            box-shadow: 0 0 0 2px var(--SELECTED-BG);
        }
        /* when date is not allow/disabled */
        &[data-disabled]{
            cursor: default;
            opacity: 70%;
        }
    }
</style>