**@Speira/styled** is the pre-configured library for building your react web application.

This library uses [styled-components](https://www.styled-components.com/) library with [React](https://react.dev/) components.

---

## Colors

```js
<div
  style={{
    columnGap: '12px',
    display: 'flex',
    flexFlow: 'row wrap',
    fontWeight: '600',
    placeContent: 'center',
    rowGap: '12px',
  }}>
  {['dark', 'soft-dark'].map((color) => (
    <div className="sp-column" style={{ width: '150px' }}>
      <div
        className={`sp-center sp-${color}`}
        style={{ width: '150px', height: '150px', color: '#fcfcfc' }}>
        {color}
      </div>
    </div>
  ))}
  {['soft-light', 'light'].map((color) => (
    <div className="sp-column" style={{ width: '150px' }}>
      <div
        className={`sp-center sp-${color}`}
        style={{ width: '150px', height: '150px', color: 'lightslategrey' }}>
        {color}
      </div>
    </div>
  ))}
  {['info', 'success', 'warning', 'danger'].map((color) => (
    <div className="sp-column" style={{ width: '150px' }}>
      <div
        className={`sp-center sp-${color}`}
        style={{ width: '150px', height: '150px', color: '#fcfcfc' }}>
        {color}
      </div>
    </div>
  ))}
  {['primary', 'secondary', 'tertiary', 'quaternary'].map((color) => (
    <div className="sp-column" style={{ width: '150px' }}>
      <div
        className={`sp-center sp-${color}`}
        style={{ width: '150px', height: '150px', color: '#fcfcfc' }}>
        {color}
      </div>
    </div>
  ))}
  {['info', 'success', 'warning', 'danger'].map((color) => (
    <div className="sp-column" style={{ width: '150px' }}>
      <div
        className={`sp-center sp-soft-${color}`}
        style={{ width: '150px', height: '150px', color: 'lightslategrey' }}>
        soft-{color}
      </div>
    </div>
  ))}
  {['primary', 'secondary', 'tertiary', 'quaternary'].map((color) => (
    <div className="sp-column" style={{ width: '150px' }}>
      <div
        className={`sp-center sp-soft-${color}`}
        style={{ width: '150px', height: '150px', color: '#fcfcfc' }}>
        soft-{color}
      </div>
    </div>
  ))}
</div>
```

## Styles

```tsx
<div
  style={{
    columnGap: '12px',
    display: 'flex',
    flexFlow: 'row wrap',
    fontWeight: '600',
    placeContent: 'center',
    rowGap: '12px',
  }}>
  {['radius', 'radius-hight', 'shadow', 'shadow-hight'].map((style) => (
    <div className="sp-column" style={{ width: '150px' }}>
      <div
        className={`sp-center sp-dark sp-${style}`}
        style={{ width: '150px', height: '150px', color: 'lightslategrey' }}>
        {style}
      </div>
    </div>
  ))}
</div>
```

## Responsive

### Hiding element when screensize after

```tsx
<div
  style={{
    columnGap: '12px',
    display: 'flex',
    flexFlow: 'row wrap',
    fontWeight: '600',
    placeContent: 'center',
    rowGap: '12px',
  }}>
  {['hide-xs', 'hide-sm', 'hide-md', 'hide-lg', 'hide-xl'].map((style) => (
    <div className={`sp-column sp-${style}`} style={{ width: '150px' }}>
      <div
        className="sp-center sp-dark"
        style={{ width: '150px', height: '150px', color: 'lightslategrey' }}>
        {style}
      </div>
    </div>
  ))}
</div>
```

### showing elements when screensize after

```tsx
<div
  style={{
    columnGap: '12px',
    display: 'flex',
    flexFlow: 'row wrap',
    fontWeight: '600',
    placeContent: 'center',
    rowGap: '12px',
  }}>
  {['show-xs', 'show-sm', 'show-md', 'show-lg', 'show-xl'].map((style) => (
    <div className={`sp-column sp-${style}`} style={{ width: '150px' }}>
      <div
        className="sp-center sp-dark"
        style={{ width: '150px', height: '150px', color: 'lightslategrey' }}>
        {style}
      </div>
    </div>
  ))}
</div>
```
