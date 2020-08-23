# mofron-effect-synchei
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

synchronize height of target component and height of effect component

this effect resizes height of a target component when the height of the target component changed.


# Install
```
npm install mofron mofron-effect-synchei
```

# Sample
```html
<setting>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-comp-frame">Frame</tag>
    <tag load="mofron-effect-synchei">SyncHei</tag>
</setting>
<Frame name=frm size=(3rem,1rem)>
    <Text effect=SynHei:(@frm,"-0.3rem")>Sync Height</Text>
</Frame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | targetComp | mofron.class.Component | target component |
| | | | undefined: call as getter |
| ◯  | offset | string(size) | offset value (default is '0rem') |
| | | | undefined: call as getter |

