import tpl from './index.tpl';
import './index.scss';
import tools from '../../utils/tools';

export default () => {
	return {
		name: 'bottomTip',
		tpl (isLoading, text) {
			return tpl().replace(tools.tplReplace(), (node, key) => {
        return {
        	isLoading,
        	text
        }[key];    
			});
		} 
	}
}