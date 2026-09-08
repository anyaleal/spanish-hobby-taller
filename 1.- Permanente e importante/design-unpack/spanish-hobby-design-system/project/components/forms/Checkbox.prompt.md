**Checkbox** — square teal checkbox with label; use in forms and preference lists.

```jsx
<Checkbox label="Send me new lessons occasionally" defaultChecked />
<Checkbox label="I agree to the terms" onChange={(v) => setAgreed(v)} />
```

Works controlled (`checked` + `onChange`) or uncontrolled (`defaultChecked`).
