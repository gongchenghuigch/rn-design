
由于RN官网并没有提供Radio单选组件，所以需要自己封装通用的单选组件


# 传值方式

```
1、使用  dataOption={datas}  属性传值  必填属性
datas数据示例：
[{
                    selecteId: 13,
                    content: <TextInput style={styles.input} placeholder="请输入电话号码" />,
                    disabled: false
                },{
                    selecteId: 14,
                    content: "Banana",
                    disabled: false
                },
                {
                    selecteId: 15,
                    content: "Orange",
                    disabled: false
                }]

注意：content传值可以是字符串也可以是DOM，如果传入的是DOM结构样式自定义就行

2、options属性包含以下参数 必填属性
id:对应数组对象中唯一标识的名字id
value：对象中具体的name或者传入的DOM
disabled：是否可以勾选
<Radio
                        dataOption={this.state.data}
                        options={{
                            id: "selecteId",
                            value: "content",
                            disabled: "disabled"
                        }}
                    />

```
# 自定义属性介绍
属性：

```
initStyle：自定义行内样式（包括背景颜色，行高等）无默认值

txtColor：定义单选按钮对应文字样式（默认值：#414141）

activeTxtColor：定义单选按钮选中时的文字样式 默认值：#ff552e

noneColor：定义disabled时的文案样式 默认值：#ACA899

图片都有默认值，展示上图有
seledImg：被选中时单选按钮图片链接

selImg：默认的单选按钮图片链接

selnoneImg：disabled时的单选按钮图片链接

labelStyle：定义按钮文字样式

selectedValue：默认选中的单选按钮 如果不设置就是默认无选中值

isPeer：布局方式 false一行一列的布局方式，true一行两列的布局方式，默认false
```
事件

```
onValueChange：点击选中时的传值
接收两个参数，一个是按钮ID，一个是按钮name
onValueChange={(id, item) => this.setState({ initId: id, initItem: item })}
把选中的按钮set到父组件的state中，如果需要默认选中的按钮，还需要自己在state中指定一个初始选中的按钮
```
调用

```
<Radio
                        dataOption={this.state.data}
                        options={{
                            id: "selecteId",
                            value: "content",
                            disabled: "disabled"
                        }}
                        onValueChange={(id, item) => this.setState({ initId: id, initItem: item })}
                        selectedValue={this.state.initId}
                        txtColor="#333"
                        activeTxtColor="#000"
                        innerStyle={styles.initStyle}
                        labelStyle={styles.labelStyle}
                        rowHeight={35}
                        isPeer={true}
                    />
```



