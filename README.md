# loader-dev
编写和学习loader

### loader概念

- webpack只能处理JS模块，如果要处理其他类型的文件，需要用loader进行转换。loader是webpack中一个概念。它是用来讲一段代码转换成另一段代码的webpack加载器。

- loader 默认是有两个部分组成 pitch normal

### loader的特点

- 第一个loader要返回JS脚本
- 每一个loader只做一件内容，为了使loader在更多的场景链式调用
- 每一个loader都是一个模块
- 每个loader都是无状态的，确保loaer在不同场景转换之间不保存状态
