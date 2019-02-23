# next single page

Fusion next 无障碍实践

### 开发调试

```
npm run start
```

### 打包

```
npm run build
```

### a11y问题
1. 在`src/components/header/index.jsx`文件中，页首组件中使用了Balloon，如果Balloon中的内容为普通的文本内容，则可以通过voiceover读出，但是此时需要在Balloon中使用Menu组件，此时由于voiceover点击Balloon后，无法聚焦到Menu上，导致无法继续点击Menu部分的内容。

2. 在`src/pages/page1/components/FormCard/FormCard.jsx`文件中，即更改配置页面的select组件中，当开启voiceover，按下Space按键进入select option中，焦点无法自动聚焦在第一个option选项，而是需要通过arrow down + arrow left操作才能聚焦到第一个option选项，如果能改进可以提升用户体验。 

3. 由于Calender组件的Select组件目前不支持无障碍操作，因此首页的Calender暂时未完成无障碍实践。