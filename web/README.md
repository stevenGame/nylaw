# AiTrade

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Development server in docker

Run `npm start:dev` for a docker dev server. Navigate to `http://docker.url:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## TODO

- [ ] if updated angular version then need update ngx-charts to lasest version


## 法律风险
    功能流程是这样的
    角色 : [平台(我), 使用者(商家), 普通用户]
    平台: 会收集 使用者的抖音ID和登录状态
    使用者: 商家设置 回复关键字,当用户在商家发布的视频或者直播时有用户评论的时候
     通过我们平台自动调用大语言模型来回复用户或者引导用户做某些行为
    商家会得到普通用户的下面列出来的数据
   
    普通用户: 被收集的信息,有抖音账号,评论内容 评论时间 联系方式(如果商家需要 或者普通用户抖音主页设置了)....

    这个有什么法律风险(或者我能通过免责协议把风险转给使用者)

