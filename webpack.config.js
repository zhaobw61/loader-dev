let path = require('path');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'build.js',
        path:path.resolve(__dirname,'dist')
    },
    resolveLoader:{
        modules:['node_modules',path.resolve(__dirname,'loaders')]
        // alias:{
        //     loader1:path.reslove(__dirname,'loaders','loader1.js')
        // }
    },
    module:{
        // loader的分类：pre在前面，post在后面 normal 正常执行
        // loader的顺序：pre + normal + inline + post
        // 行内的loader： let str = require('inline-loader!./a.js')
        //  -! 不会让文件 在通过pre + normal loader来处理了。 let str = require('-!inline-loader!./a.js')
        // ！ 没有normal
        //  !! 什么都不要

        // rules:[ //loader顺序从右向左 从下到上
        //     {
        //         test:/\.js$/,
        //         use:[]
        //     }
        //     // {
        //     //     test:/\.js$/,
        //     //     use:['loader3','loader2','loader1']
        //     // }
        // ]
        rules:[
            {
                test:/\.jpg$/,
                use:'file-loader'
            },
            {
                test:/.\js$/,
                use:{
                    loader:'banner-loader',
                    options:{
                        text:'zzzzzzz',
                        filename:path.resolve(__dirname,'banner.js')
                    }
                }
            }
            // {
            //     test:/.\js$/,
            //     use:{
            //         loader:'babel-loader',
            //         options:{
            //             presets:[
            //                 '@babel/preset-env'
            //             ]
            //         }
            //     }
            // }
        ]
    }
}