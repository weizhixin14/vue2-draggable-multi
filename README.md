# vue2-draggable-multi

This library is a secondary development based on the vuedraggable@2.x (SortableJS/Vue.Draggable) source code, supporting multi-select drag and drop (MultiDrag).

### Installation

```bash
npm i vue2-draggable-multi -S
```

### Usage

For general usage, see [vuedraggable](https://github.com/SortableJS/Vue.Draggable/tree/master).

### Multi-select

Enable multi-drag by setting the `multi-drag` prop to `true`.

```js
<Vue2DraggableMulti :multi-drag="true" ...>

// import Vue2DraggableMulti from "vue2-draggable-multi";
```