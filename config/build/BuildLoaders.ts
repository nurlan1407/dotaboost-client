import webpack from 'webpack';
import {BuildOptions} from "./types/BuildOptions";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // if we use js we need babel
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            // options:{
            //     getCustomTransformers: ()=>({
            //         before:[options.isDev && ReactRefreshTypeScript()].filter(Boolean)
            //     }),
            //     transpileOnly: options.isDev
            // }
        },
        exclude: /node_modules/,
    };
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    }
    return [
        typescriptLoader, styleLoader
    ];
}