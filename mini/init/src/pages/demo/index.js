/**
 * @file index页面
 * @author
 */
import React from 'react';
import {hydrate, render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import Layout from '@components/Layout';
import Index from './components/Index';

const App = function () {
    return (
        <Layout>
            <Index></Index>
        </Layout>
    );
};

const containerId = 'root';
const rootElement = window.document.getElementById(containerId);

if (rootElement) {
    if (rootElement.hasChildNodes()) {
        hydrate(<App />, rootElement);
    } else {
        render(<App />, rootElement);
    }
}

// pre render
export default (locals) => {
    const props = {}; // 这里的优先级高

    return Promise.resolve(
        locals.preRender({
            __render: renderToString,
            id: containerId, // 可选 默认：root
            main: App, // require
            props, // 可选 默认：{}
        })
    );
};
