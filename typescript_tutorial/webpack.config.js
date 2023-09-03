module.exports = {
    entry:{//何をコンパイルするのか，どこをバンドルするのかというエントリーポイントを宣言
        bundle :"./src/index.ts",
    },
    output:{//バンドルしたものはどこに出力するのかという宣言
        path : `${__dirname}/dist`,
        filename:"bundle.js",
    },
    mode : "production",//development（ソースマップが有効になる）とproduction（ファイルが圧縮されて軽くなる）がある
    resolve:{
        extensions:[".ts",".js"],//from"./index"で行けるようになるらしい
    },
    devServer:{
        static:{//localserverを立ち上げるときにどこを見に行くかという設定
            directory: `${__dirname}/dist`,
        },
        open: true,//自動的にブラウザを開きたい場合はtrue
    },
    module:{//ファイルに対するルールの設定
        rules:[
            {
                test:/\.ts$/,//拡張子がtsのものをコンパイルするという意味
                loader:"ts-loader",//ts-loaderを使ってコンパイルしてねという意味
            },
        ],
    },
};