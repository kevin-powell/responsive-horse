# Extra styling for later

## Navigation

```css
.nav-toggle {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 999;
}

.nav-list[data-visible="false"] {
  display: none;
}

.nav-list[data-visible="true"] {
  list-style: none;

  position: fixed;
  inset: 0 0 0 auto;
  background: rgb(0 0 0 / 0.8);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.nav-list a {
  color: white;
}
```
