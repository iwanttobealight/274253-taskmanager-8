export default (filter) => `
<input
type="radio"
id="filter__${filter.name}"
class="filter__input visually-hidden"
name="filter"
checked
/>
<label for="filter__${filter.name}" class="filter__label">
${filter.name.toUpperCase()} <span class="filter__${filter.name}-count">
${filter.count}
</span></label>`;
