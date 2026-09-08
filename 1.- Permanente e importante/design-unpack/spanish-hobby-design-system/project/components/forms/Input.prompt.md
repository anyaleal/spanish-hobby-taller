**Input** — single-line text field; use in contact forms, search and lesson sign-ups.

```jsx
<Input label="Email" type="email" icon="fa-solid fa-envelope" placeholder="you@email.com" />
<Input label="Name" helper="So we know what to call you" />
<Input label="Email" invalid helper="Please enter a valid address" />
```

Optional `label`, `helper`, leading `icon`. Set `invalid` for the orange error state. Teal focus ring; 6px radius.
