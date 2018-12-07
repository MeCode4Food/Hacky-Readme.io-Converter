# Hacky readme.io "converter" 

## What does it require
- Node
- Chrome Debugger
- Adblock/Ublock or other CSS Wizardry

## What it does
What the converter really does is that it converts the html created by the readme.io docs generator to proper markdown

## How to install
Run

```
npm i
```

## How to use
1. Enter readme.io 
2. See owl logo blocking screen. use adblock, ublock, css etc to remove blocking css
3. Access the (hopefully) published documentation page
4. For each page, use the chrome debugger to obtain the table html.
  The target html should look like in section #Sample HTML
5. Put it inside `v1/<somename>.html`
6. Run ```node covert.js```
7. Copy Markdown code from terminal
8. Win

## Notes
- Line breaks in tables are formatted as `<br>` even in markdown, and persists in the conversion

## Sample Output
```
| Field Name |Field Type |Field Name in Data Lake |Viz Table Source |
| --- | --- | --- | --- |
| value |value |value |value |
| value |value |value |value |
| value |value |value |value |
| value |value |value |value |
| value |value |value |value |
| value |value |value |value |
| value |value |value |value |
```

### Sample HTML
```html
<div class="block-parameters-table">
    <div class="block-parameters-table">
  <div class="table">
    <div class="tr">
      <div class="th">Field Name</div>
      <div class="th">Field Type</div>
      <div class="th">Field Name in Data Lake</div>
      <div class="th">Viz Table Source</div>
    </div>
    <div class="tr">
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
    </div>
    <div class="tr">
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
    </div>
    <div class="tr">
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
    </div>
    <div class="tr">
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
    </div>
    <div class="tr">
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
    </div>
    <div class="tr">
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
    </div>
    <div class="tr">
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
      <div class="td"><p>value</p>
</div>
    </div>
  </div>
```