
# Angular2 first layout 组件


## 安装

该库可用作npm软件包，因此您只需运行以下命令即可：（如果不是新手，建议先装淘宝镜像端，因为cnpm更快）

```
npm install --save ng2-first-layout
```

该命令将在您的`package.json`文件中创建一个记录，并将该包安装到npm modules文件夹中。

## 最简单的设置示例

首先需要将ng2-first-layout指令导入到组件中。

```

import { Ng2FirstLayoutModule } from 'ng2-first-layout';

```

然后通过添加到您的模块的指令列表来注册它：

```
// ...

@NgModule({
  imports: [
    // ...
    
    Ng2FirstLayoutModule,
    
    // ...
  ],
  declarations: [ ... ]
})
// ...
```


最后，我们将ng2-first-layout组件放在模板中：

```
// ...

@Component({
  template: `
    <ng2-first-layout [data]="data" [settings]="settings"></ng2-first-layout>
  `
})
// ...
```


## How can I support developers?

- 可以关注我们的：[Github](https://github.com/ascode/ng2-first-layout.git)
- 创建拉请求，提交错误，建议新功能


## 功能特征（详情请看本项目文档）
* 

ok