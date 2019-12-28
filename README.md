# mofron-effect-synchei
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

it synchronizes the height of the target component and height of effect component.

this effect resizes height when the height of the target component changed.


# Install
```
npm install mofron mofron-effect-synchei
```

# Sample
```html
<require>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-comp-frame">Frame</tag>
    <tag load="mofron-effect-synchei">SyncHei</tag>
</require>
<Frame name=frm size=(3rem,1rem)>
    <Text effect=SynHei(frm,"-0.3rem")>Sync Height</Text>
</Frame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | targetComp | Component | target component |
| ◯  | offset | string (size) | css style size value |

