let loaderUtils = require('loader-utils');
let validateOptions = require('schema-utils');
let fs = require('fs')
function loader(source){
    let options = loaderUtils.getOptions(this);
    let cb = this.async();
    let schema = {
        type:'object',
        properties:{
            text:{
                type:'string',
            },
            filename:{
                type:'string'
            }
        }
    }
    validateOptions(schema,options,'banner-loader');
    if(options.filename){
        this.addDependency(options.filename); // 如果依赖的文件发生改动，就重新编译
        fs.readFile(options.filename,'utf8',function(err,data){
            cb(err,`/**${data}**/${source}`);
        });
    }else{
        cb(err,`/**${options.text}**/${source}`);
    }
}
module.exports = loader;
