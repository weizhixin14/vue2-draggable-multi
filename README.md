# vue-draggable-multi

This library is a secondary development based on the vuedraggable@2.x (SortableJS/Vue.Draggable) source code, supporting multi-select drag and drop (MultiDrag).

### Installation

```bash
npm i vue-draggable-multi -S
```

### Usage

For general usage, see [vuedraggable](https://github.com/SortableJS/Vue.Draggable/tree/master).

### Multi-select

#### 1. Mount the Plugin

`MultiDrag` need to be mounted before using the library.

```js
import Sortable, { MultiDrag } from "sortablejs";

Sortable.mount(new MultiDrag());
```

#### 2. Enable multi-drag

Enable multi-drag by setting the `multi-drag` prop to `true`.

```vue
<VueDraggableMulti :multi-drag="true" ...>

// import VueDraggableMulti from "vue-draggable-multi";
```