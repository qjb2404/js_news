import tpl from './index.tpl';
import './index.scss';

import tools from '../../utils/tools';

export default () => {
    return {
        name: 'header',
        tpl(options) {
            return tpl().replace(tools.tplReplace(), (node, key) => {
                return {
                    title: options.title,
                    showLeftIcon: !options.showLeftIcon && 'none',
                    showRightIcon: !options.showRightIcon && 'none'
                }[key];
            })
        }
    }
}